import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav, TextInput } from "@primer/react";
import axios from "axios";

import "./IssueDetails.css";
import AvatarIcon from "../Dashboard/Navbar/Avatar/Avatar";

function IssueDetails() {
  const [issueDetails, setIssueDetails] = useState("");
  const navigate = useNavigate();
  const { issueId } = useParams();

  useEffect(() => {
    const fetchIssueDetails = async () => {
      try {
        const response = await axios.get(
          `https://github-clone-be.vercel.app/repo/issue/${issueId}`
        );
        setIssueDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch issue details:", error);
      }
    };

    fetchIssueDetails();
  }, [issueId]);

  return (
    <div>
      <Navbar />
      {/* <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item
          onClick={() => navigate(`/repoview/${repositoryId}`)}
          sx={{ color: "whitesmoke" }}
        >
          Code
        </UnderlineNav.Item>
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate(`/issue/${repositoryId}`)}
        >
          Issues
        </UnderlineNav.Item>
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate(`/pullrequest/${repositoryId}`)}
        >
          Pull Requests
        </UnderlineNav.Item>
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          aria-current="page"
          onClick={() => navigate(`/repoSettings/${repositoryId}`)}
        >
          Settings
        </UnderlineNav.Item>
      </UnderlineNav> */}

      <div className="issue-detail">
        <div className="issue-text-info">
          <div>
            <h1>{issueDetails.title}</h1>
          </div>

          <div className="issue-status-section">
            <div className="open">Open</div>
            <div className="issue-status-text">
              Vishalk91-4 opened this issue 2 days ago · 0 comments
            </div>
          </div>
        </div>
      </div>

      <div className="line-break" style={{ margin: "20px" }}></div>

      <div className="issue-detail-section-wrapper">
        <div className="issue-detail-right">
          <div className="issue-message">
            <AvatarIcon />
            <div className="text-box">
              <div className="info-section">
                <h1>{issueDetails.description}</h1>
              </div>
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

export default IssueDetails;
