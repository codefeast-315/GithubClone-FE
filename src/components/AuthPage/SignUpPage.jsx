import React, { useState, useEffect } from "react";
import { PageHeader } from "@primer/react/drafts";
import logo from "./github-mark-white.svg";
import { Box, Button } from "@primer/react";
import axios from "axios";
import { useAuth } from "../../authContext";
import { useGoogleLogin } from "@react-oauth/google";
import "./loginPage.css";

function LoginPage() {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setCurrentUser(null);
  }, []);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const { currentUser, setCurrentUser } = useAuth();
  const { user, setUser } = useState("");

  const signup = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        setLoader(true);
        console.log("====================================");
        console.log(codeResponse);
        console.log("====================================");

        const tokenResponse = await axios.post(
          "https://oauth2.googleapis.com/token",
          {
            code: codeResponse.code,
            client_id:
              "91345958396-beb4723vdvoj27ueujgpvru8chf0hsir.apps.googleusercontent.com",
            client_secret: "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",
            redirect_uri: "https://project-vter.onrender.com",
            grant_type: "authorization_code",
          }
        );

        const accessToken = tokenResponse.data.access_token;

        const userDetailsResponse = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const userDetails = userDetailsResponse.data;

        const email = userDetails.email;
        const username = userDetails.name;
        const googleId = userDetails.sub;

        const res = await axios.post(
          "https://github-clone-be.vercel.app/oauth/google/signup",
          {
            email,
            username,
            googleId,
          }
        );

        const token = res.data.token;
        const userId = res.data.userId;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        setLoader(false);
        setCurrentUser(userId);
        console.log("====================================");
        console.log(res.data);
        console.log("====================================");
        window.location.href = "/"; // Adjust the path as needed
      } catch (err) {
        alert("Google login failed. Please try again.");
        setLoader(false);
      }
    },
    flow: "auth-code",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const res = await axios.post("https://github-clone-be.vercel.app/signup", {
        email: username,
        username: email,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", res.data.userId);
      setLoader(false);
      setCurrentUser(res.data.userId);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("SignUp failed.");
      setLoader(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-logo-container">
        <img className="logo-login" src={logo} alt="Logo" />
      </div>

      <div className="login-box-wrapper">
        <div className="login-heading">
          <Box sx={{ padding: 1 }}>
            <PageHeader>
              <PageHeader.TitleArea variant="large">
                <PageHeader.Title>Sign Up</PageHeader.Title>
              </PageHeader.TitleArea>
            </PageHeader>
          </Box>
        </div>

        <div className="login-box">
          <div>
            <label className="label">Username</label>
            <input
              autoComplete="off"
              name="Username"
              id="Username"
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">Email address</label>
            <input
              autoComplete="off"
              name="Email"
              id="Email"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="div">
            <label className="label">Password</label>
            <input
              autoComplete="off"
              name="Password"
              id="Password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            variant="primary"
            className="login-btn"
            onClick={handleLogin}
            disabled={loader}
          >
            {loader ? "Loading..." : "Sign In"}
          </Button>

          <Button
            variant="primary"
            className="login-btn"
            onClick={() => signup()}
            disabled={loader}
          >
            {loader ? "Loading..." : "Google"}
          </Button>
        </div>
        <div className="pass-box">
          <p>
            New to GitHub? <a href="/signup">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
