import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav, TextInput } from "@primer/react";
import {
  ChevronDownIcon,
  GitPullRequestIcon,
  TagIcon,
  MilestoneIcon,
} from "@primer/octicons-react";

import "./PullRequest.css";

function PullReqest() {
  const navigate = useNavigate();
  const { repositoryId } = useParams();

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
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate(`/issue/${repositoryId}`)}
        >
          Issues
        </UnderlineNav.Item>
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          aria-current="page"
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
          <div className="filter-and-search">
            <button className="repo-search-btn">
              <p>Filter</p>
              <ChevronDownIcon />
            </button>
            <TextInput
              sx={{
                width: "500px",
                height: "30px",
                backgroundColor: "transparent",
                color: "whitesmoke",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              placeholder="is:pr is:open "
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
            <button className="new-pr-btn">
              <p>New Pull Request</p>
              {/* <ChevronDownIcon /> */}
            </button>
          </div>
        </div>

        <div className="pr-list-section">
          <div className="text-info">
            <GitPullRequestIcon size={24} />
            <h3>Welcome to pull requests!</h3>
            <p className="description">
              Pull requests help you collaborate on code with other people. As
              pull requests are created, they’ll appear here in a searchable and
              filterable list. To get started, you should create a pull request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PullReqest;
