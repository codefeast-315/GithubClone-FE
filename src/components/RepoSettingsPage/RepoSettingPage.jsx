import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav, TextInput } from "@primer/react";
import SettingsSidebar from "./SettingsSidebar";

import "./RepoSettingPage.css";

function RepoSettingPage() {
  const navigate = useNavigate();
  const { repositoryId } = useParams();

  const deleteRepo = async (repoId) => {
    try {
      const response = await fetch(
        `https://github-clone-be.vercel.app/repos/${repositoryId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete repository");
      }

      const data = await response.json();
      console.log(data);
      navigate(`/`);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

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
      </UnderlineNav>

      <div className="settings-wrapper">
        <div className="left-menu">
          <SettingsSidebar />
        </div>

        <div className="right-settings">
          <div className="genral-settings">
            <h3>General</h3>
            <div className="line-break"></div>
            <h5 style={{ margin: "10px 0px" }}>Repository Name</h5>
            <TextInput
              className="settings-text-input"
              sx={{
                height: "30px",
                backgroundColor: "transparent", // Make the background transparent
                color: "whitesmoke", // Ensure the icon color is white
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              placeholder=""
            />
            <button className="btn">Rename</button>

            <div className="check-box-input">
              <input type="checkbox" name="" />
              <div className="checkbox-text">
                <h6>Template repository</h6>
                <p>
                  Template repositories let users generate new repositories with
                  the same directory structure and files.
                </p>
              </div>
            </div>
            <div className="check-box-input">
              <input type="checkbox" name="" />
              <div className="checkbox-text">
                <h6>Require contributors to sign off on web-based commits </h6>
                <p>
                  Enabling this setting will require contributors to sign off on
                  commits made through GitHub’s web interface. Signing off is a
                  way for contributors to affirm that their commit complies with
                  the repository's terms, commonly the Developer Certificate of
                  Origin (DCO). Learn more about signing off on commits.
                </p>
              </div>
            </div>

            <div className="default-branch" style={{ marginTop: "20px" }}>
              <h3>General</h3>
              <div className="line-break"></div>
              <p>
                Default branch The default branch is considered the “base”
                branch in your repository, against which all pull requests and
                code commits are automatically made, unless you specify a
                different branch.
              </p>

              <TextInput
                className="settings-text-input"
                sx={{
                  // width: "300px",
                  height: "30px",
                  backgroundColor: "transparent", // Make the background transparent
                  color: "whitesmoke", // Ensure the icon color is white
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                placeholder=""
              />
              <button className="btn">Rename Branch</button>
            </div>

            <div className="social-preview" style={{ marginTop: "20px" }}>
              <h3>Social preview</h3>
              <div className="line-break"></div>
              <p>
                Upload an image to customize your repository’s social media
                preview.
                <br />
                Images should be at least 640×320px (1280×640px for best
                display).
              </p>

              <button className="btn" style={{ marginLeft: "0px" }}>
                Edit
              </button>
            </div>
          </div>

          <div className="default-branch" style={{ marginTop: "20px" }}>
            <h3>Pull Requests</h3>
            <div className="line-break"></div>
            <p style={{ margin: "10px 0px" }}>
              When merging pull requests, you can allow any combination of merge
              commits, squashing, or rebasing. At least one option must be
              enabled. If you have linear history requirement enabled on any
              protected branch, you must enable squashing or rebasing.
            </p>

            <div className="settings-box">
              <div className="check-box-input" style={{ marginTop: "10px" }}>
                <input type="checkbox" name="" />
                <div className="checkbox-text">
                  <h6>Allow merge commits </h6>
                  <p>
                    Add all commits from the head branch to the base branch with
                    a merge commit.
                  </p>
                  <h6 style={{ marginTop: "10px" }}>Default commit message</h6>
                  <p>Presented when merging a pull request with merge.</p>
                </div>
              </div>

              <div className="line-break"></div>

              <div className="check-box-input" style={{ marginTop: "10px" }}>
                <input type="checkbox" name="" />
                <div className="checkbox-text">
                  <h6>Allow squash merging </h6>
                  <p>
                    Combine all commits from the head branch into a single
                    commit in the base branch.
                  </p>
                  <h6 style={{ marginTop: "10px" }}>Default commit message</h6>
                  <p>Presented when merging a pull request with squash.</p>
                </div>
              </div>

              <div className="line-break"></div>

              <div className="check-box-input" style={{ marginTop: "10px" }}>
                <input type="checkbox" name="" />
                <div className="checkbox-text">
                  <h6>Allow rebase merging </h6>
                  <p>
                    Add all commits from the head branch onto the base branch
                    individually.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="danger-zone" style={{ marginTop: "20px" }}>
            <h3>Danger Zone</h3>

            <div className="settings-box">
              <div className="setting-option">
                <div className="text-section">
                  <h5>Change repository visibility</h5>
                  <p>This repository is currently public.</p>
                </div>
                <button
                  className="btn"
                  style={{ marginLeft: "0px", color: "red" }}
                >
                  Change visibility
                </button>
              </div>

              <div className="line-break"></div>

              <div className="setting-option">
                <div className="text-section">
                  <h5>Disable branch protection rules</h5>
                  <p>Disable branch protection rules enforcement and APIs</p>
                </div>
                <button
                  className="btn"
                  style={{ marginLeft: "0px", color: "red" }}
                >
                  Disable branch protection rules
                </button>
              </div>

              <div className="line-break"></div>

              <div className="setting-option">
                <div className="text-section">
                  <h5>Transfer ownership</h5>
                  <p>
                    Transfer this repository to another user or to an
                    organization where you have the ability to create
                    repositories.
                  </p>
                </div>
                <button
                  className="btn"
                  style={{ marginLeft: "0px", color: "red" }}
                >
                  Transfer
                </button>
              </div>

              <div className="line-break"></div>

              <div className="setting-option">
                <div className="text-section">
                  <h5>Archive this repository</h5>
                  <p>Mark this repository as archived and read-only.</p>
                </div>
                <button
                  className="btn"
                  style={{ marginLeft: "0px", color: "red" }}
                >
                  Archive this repository
                </button>
              </div>

              <div className="line-break"></div>

              <div className="setting-option">
                <div className="text-section">
                  <h5>Delete this repository</h5>
                  <p>
                    Once you delete a repository, there is no going back. Please
                    be certain.
                  </p>
                </div>
                <button
                  className="btn"
                  style={{ marginLeft: "0px", color: "red" }}
                  onClick={deleteRepo}
                >
                  Delete This Repository
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoSettingPage;
