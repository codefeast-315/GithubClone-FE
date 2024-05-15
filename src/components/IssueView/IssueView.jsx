import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav, TextInput } from "@primer/react";
import {
  ChevronDownIcon,
  CommentDiscussionIcon,
  IssueOpenedIcon,
  MilestoneIcon,
  TagIcon,
} from "@primer/octicons-react";
import "./IssueView.css";

function IssueView() {
  const { repositoryId } = useParams();
  const navigate = useNavigate();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch(
          `https://github-clone-be.vercel.app/repo/issues/${repositoryId}`
        );
        const data = await response.json();
        setIssues(data);
      } catch (error) {
        console.error("Failed to fetch issues:", error);
      }
    };

    fetchIssues();
  }, [repositoryId]);

  return (
    <div>
      <Navbar />
      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item
          onClick={() => navigate(`/repoview/${repositoryId}`)}
          sx={{ color: "whitesmoke" }}
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
          onClick={() => navigate(`/pullrequest/${repositoryId}`)}
        >
          Pull Requests
        </UnderlineNav.Item>
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate(`/repoSettings/${repositoryId}`)}
        >
          Settings
        </UnderlineNav.Item>
      </UnderlineNav>

      <div className="pull-request-wrapper">
        <div className="pr-search-section">
          <div className="filter-and-search" style={{ width: "100%" }}>
            <button className="repo-search-btn">
              <p>Filter</p>
              <ChevronDownIcon />
            </button>
            <TextInput
              sx={{
                width: "90%",
                height: "30px",
                backgroundColor: "transparent",
                color: "whitesmoke",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              placeholder="is:issue is:open "
            />
          </div>

          <div className="pr-btn-section">
            <button className="repo-search-btn">
              <TagIcon />
              <p>Label</p>
            </button>
            <button className="repo-search-btn">
              <MilestoneIcon />
              <p>Milestone</p>
            </button>
            <button
              className="new-pr-btn"
              onClick={() => navigate(`/addIssue/${repositoryId}`)}
            >
              <p>New Issue</p>
            </button>
          </div>
        </div>

        <div className="pr-list-box">
          <div className="boxupper">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IssueOpenedIcon />
              <h5>62 open</h5>
            </div>
          </div>

          <div className="boxlower">
            {issues.map((issue) => (
              <div
                key={issue._id}
                className="lowerbox-card"
                onClick={() => {
                  navigate(`/issueDetails/${issue._id}`);
                }}
              >
                <div className="lowerbox-card-text">
                  <IssueOpenedIcon />
                  <p>{issue.title}</p>
                </div>
                <CommentDiscussionIcon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueView;
