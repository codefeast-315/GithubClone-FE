import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav } from "@primer/react";
import {
  BookIcon,
  RepoIcon,
  PivotColumnIcon,
  PackageIcon,
  EyeIcon,
} from "@primer/octicons-react";
import HeatMapProfile from "./HeatMap";

function Profile() {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "username",
    content: "HTML",
  });

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const id = localStorage.getItem("userId");
        const response = await axios.get(
          `https://backendgit-1.onrender.com/repos/getAll/${id}`
        );
        setRepositories(response.data);
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      }
    };

    const fetchUserDetails = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(
            `https://backendgit-1.onrender.com/users/${userId}`
          );
          setUserDetails(response.data);
        } catch (error) {
          console.error("Failed to fetch user details:", error);
        }
      }
    };

    fetchRepositories();
    fetchUserDetails();
  }, []);

  const fetchRepoId = async (repoName) => {
    try {
      const response = await axios.post(
        "https://backendgit-1.onrender.com/repos/repoid",
        {
          repositoryName: repoName,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch repoId:", error);
      return null;
    }
  };

  return (
    <>
      <Navbar />

      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item
          aria-current="page"
          icon={BookIcon}
          sx={{
            backgroundColor: "transparent",
            color: "whitesmoke",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Overview
        </UnderlineNav.Item>
        <UnderlineNav.Item
          onClick={() => navigate("/repo")}
          icon={RepoIcon}
          sx={{
            backgroundColor: "transparent",
            color: "whitesmoke",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Repositories
        </UnderlineNav.Item>
        <UnderlineNav.Item
          icon={PivotColumnIcon}
          sx={{
            backgroundColor: "transparent",
            color: "whitesmoke",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Projects
        </UnderlineNav.Item>
        <UnderlineNav.Item
          icon={PackageIcon}
          sx={{
            backgroundColor: "transparent",
            color: "whitesmoke",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Packages
        </UnderlineNav.Item>
      </UnderlineNav>

      <div className="profile-page-wrapper">
        <div className="user-profile-section">
          <div className="profile-image"></div>

          <div className="name">
            <h3>{userDetails.username}</h3>
          </div>

          <button className="follow-btn">Follow</button>

          <div className="follower">
            <p>10 Follower</p>
            <p>3 Following</p>
          </div>
        </div>

        <div className="user-repo-section">
          <div className="repo-card-wrapper">
            {repositories.splice(0, 4).map((repo, index) => (
              <div key={index} className="repo">
                <h3
                  className="repo-name"
                  onClick={async () => {
                    const repoId = await fetchRepoId(repo.name);
                    console.log("Navigating to repoId:", repoId);
                    navigate(`/repoview/${repoId}`);
                  }}
                >
                  {repo.name}
                </h3>
                <p className="description">{repo.description}</p>
                <p className="language">HTML</p>
              </div>
            ))}
          </div>

          <div className="heat-map-section">
            <HeatMapProfile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
