import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav, Avatar } from "@primer/react";
import {
  StarIcon,
  RepoForkedIcon,
  EyeIcon,
  CopilotIcon,
  PersonAddIcon,
  DesktopDownloadIcon,
} from "@primer/octicons-react";
import "./CreateRepoDetail.css";

function CreateRepoDetail() {
  const navigate = useNavigate();
  const { repositoryId } = useParams(); // Call useParams at the top level
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "https://backendgit-1.onrender.com/repo/file",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const data = await response.json();
      setFileURL(data.fileUrl);
      console.log(data);

      const anotherAPIResponse = await fetch(
        `https://backendgit-1.onrender.com/repos/filechange/${repositoryId}`,
        {
          method: "POST",
          body: JSON.stringify({ content: data.fileUrl }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!anotherAPIResponse.ok) {
        throw new Error("Failed to send fileURL to another API");
      }

      console.log("FileURL sent to another API successfully");
      navigate(`/repoview/${repositoryId}`);
    } catch (error) {
      console.error(
        "Failed to upload file or send fileURL to another API:",
        error
      );
    }
  };

  return (
    <div>
      <Navbar />
      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item
          aria-current="page"
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate("/repoview")}
        >
          Code
        </UnderlineNav.Item>
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate("/issue")}
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

      <div className="repo-detail-wrapper">
        <div className="header-btn-section">
          <div className="username">
            <Avatar
              src="https://avatars.githubusercontent.com/u/92997159?v=4"
              size={30}
            />
            <h5>RepoName</h5>
          </div>
          <div className="btn-wrapper">
            <button className="repo-search-btn">
              <EyeIcon />
              <p>Unwatch</p>
            </button>

            <button className="repo-search-btn">
              <RepoForkedIcon />
              <p>Fork</p>
            </button>

            <button className="repo-search-btn">
              <StarIcon />
              <p>Star</p>
            </button>
          </div>
        </div>

        <div className="line-break"></div>

        <div className="box-container">
          <div className="detail-box">
            <CopilotIcon size={30} />
            <h5>Start coding with Codespaces</h5>
            <p>
              Add a README file and start coding in a secure, configurable, and
              dedicated development environment.
            </p>
            <button className="repo-search-btn" style={{ width: "150px" }}>
              <p style={{ padding: "10px" }}>Create a Codespace</p>
            </button>
          </div>

          <div className="detail-box">
            <PersonAddIcon size={30} />
            <h5>Add collaborators to this repository</h5>
            <p>
              Search for people using their GitHub username or email address.
            </p>
            <button className="repo-search-btn" style={{ width: "150px" }}>
              <p style={{ padding: "10px" }}>Invite Collaborators</p>
            </button>
          </div>
        </div>

        <div className="quick-setup-wrapper">
          <div className="setup-header">
            <h4>Quick setup — if you've done this kind of thing before</h4>
            <div className="quick-setup-btn-wrapper">
              <button className="repo-search-btn" style={{ width: "200px" }}>
                <DesktopDownloadIcon />
                <p>Set up in desktop</p>
              </button>
              <p>or</p>
              <button className="repo-search-btn">
                <p>HTTPS</p>
              </button>
              <p className="repo-link">github.com/UserName/repo.git</p>
            </div>
            <div className="get-started">
              <p>Get started by creating a new file or </p>
              <label htmlFor="file" style={{ color: "blue" }}>
                Upload existing file
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className="file-input"
                onChange={handleFileChange}
              />
              <button onClick={uploadFile}>Upload File</button>
              <p>
                We recommend every repository include a README, LICENSE, and
                .gitignore.
              </p>
            </div>
          </div>

          <div className="create-new-command">
            <h4>…or create a new repository on the command line</h4>
            <div className="command-box">
              <p> echo "# repo" README.md</p>
              <p> git init</p>
              <p> git add README.md</p>
              <p> git commit -m "first commit"</p>
              <p> git branch -M main</p>
              <p> git remote add origin git@github.com:UserName/repo.git</p>
              <p> git push -u origin main</p>
            </div>
          </div>

          <div className="create-new-command">
            <h4>…or push an existing repository from the command line</h4>
            <div className="command-box">
              <p> git remote add origin git@github.com:UserName/repo.git</p>
              <p> git branch -M main</p>
              <p> git push -u origin main</p>
            </div>
          </div>

          <div className="create-new-command">
            <h4>…or import code from another repository</h4>

            <p>
              {" "}
              You can initialize this repository with code from a Subversion,
              Mercurial, or TFS project.
            </p>
            <button className="repo-search-btn" style={{ margin: "20px 0px" }}>
              <p>Import Code</p>
            </button>
          </div>
        </div>
        <div className="protip">
          <p style={{ fontWeight: "900" }}>ProTip! </p>
          <p> Use the URL for this page when adding GitHub as a remote.</p>
        </div>
      </div>
    </div>
  );
}

export default CreateRepoDetail;
