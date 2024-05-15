import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import Axios
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav, TextInput, Button } from "@primer/react";

import "./CreateNewIssue.css";
import Editor from "./Editor";
import AvatarIcon from "../Dashboard/Navbar/Avatar/Avatar";

function CreateNewIssue() {
  const navigate = useNavigate();
  const { repositoryId } = useParams();

  const [title, setTitle] = useState("");

  useEffect(() => {
    localStorage.removeItem("Description");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const status = "closed";

    try {
      const description = localStorage.getItem("Description");
      const response = await axios.post(
        `https://github-clone-be.vercel.app/repo/issue/${repositoryId}`,
        {
          title,
          description,
          status,
        }
      );

      console.log(response.data);

      navigate(`/issueDetails/${response.data._id}`);
    } catch (error) {
      console.error("Failed to submit issue:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate(`/repoview/${repositoryId}`)}
        >
          Code
        </UnderlineNav.Item>
        <UnderlineNav.Item
          aria-current="page"
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate(`/issue/${repositoryId}`)}
        >
          Issues
        </UnderlineNav.Item>
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate("/pullrequest")}
        >
          Pull Requests
        </UnderlineNav.Item>
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate("/repoSettings")}
        >
          Settings
        </UnderlineNav.Item>
      </UnderlineNav>

      <div className="issue-add-section-wrapper">
        <div className="add-issue-wrapper">
          <div className="add-issue-left-section">
            <AvatarIcon />
            <div className="issue-input">
              <h4>Title</h4>
              <TextInput
                className="text-input-addIssue"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{
                  marginBottom: "20px",
                  height: "30px",
                  backgroundColor: "transparent",
                  color: "whitesmoke",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              />
              <h4>Add a description</h4>
              <div className="editor-container">
                <Editor />
              </div>
              <Button className="Submit-issue" onClick={handleSubmit}>
                Submit New Issue
              </Button>
            </div>
          </div>
        </div>

        <div className="issue-detail-left">
          <div className="detail-section">
            <div className="detail">
              <h5>Assignees</h5>
              <div className="detail-text">
                <p>No one assigned</p>
              </div>
            </div>
            <div className="detail">
              <h5>Labels</h5>
              <div className="detail-text">
                <p>None yet</p>
              </div>
            </div>
            <div className="detail">
              <h5>Projects</h5>
              <div className="detail-text">
                <p>None yet</p>
              </div>
            </div>
            <div className="detail">
              <h5>Projects</h5>
              <div className="detail-text">
                <p>None yet</p>
              </div>
            </div>
            <div className="detail">
              <h5>Projects</h5>
              <div className="detail-text">
                <p>None yet</p>
              </div>
            </div>
            <div className="detail">
              <h5>Projects</h5>
              <div className="detail-text">
                <p>None yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNewIssue;
