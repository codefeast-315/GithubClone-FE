import React from "react";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav } from "@primer/react";
import { ActionMenu, ActionList } from "@primer/react";

import "./EditCode.css";
import RepoCodeEditor from "./RepoCodeEditor";
import { Navigate, useParams } from "react-router-dom";

function EditCode() {
  const { repositoryId } = useParams();
  const deleteFile = async () => {
    try {
      const response = await fetch(
        `https://backendgit-1.onrender.com/repos/filechange/${repositoryId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete file");
      }

      const data = await response.json();
      console.log(data.message);
      Navigate(`/repoview/${repositoryId}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="code-editor-heading">
        <h4>project/README.md</h4>
        <div className="submit-btn-section">
          <button className="btn">Cancel</button>
          <button className="btn" onClick={deleteFile}>
            Delete File
          </button>
          <button className="btn">Submit Changes</button>
        </div>
      </div>

      <div className="code-editor-section">
        <div className="code-btn-section">
          <div className="left">
            <button className="btn">Preview</button>
            <button className="btn">Edit</button>
          </div>

          <div className="right">
            <ActionMenu>
              <ActionMenu.Button>Select Language</ActionMenu.Button>
              <ActionMenu.Overlay width="medium">
                <ActionList>
                  <ActionList.Item>Javascript</ActionList.Item>
                  <ActionList.Item>C++</ActionList.Item>
                  <ActionList.Item>Python</ActionList.Item>
                  <ActionList.Item>Java</ActionList.Item>
                </ActionList>
              </ActionMenu.Overlay>
            </ActionMenu>
          </div>
        </div>

        <RepoCodeEditor />
      </div>
    </div>
  );
}

export default EditCode;
