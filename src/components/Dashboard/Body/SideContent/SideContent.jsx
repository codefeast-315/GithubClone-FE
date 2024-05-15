import React, { useState, useEffect } from "react";
import { ActionMenu, ActionList, Avatar, IconButton } from "@primer/react";
import { BookmarkSlashFillIcon } from "@primer/octicons-react";
import Searchbar from "../../Navbar/Searchbar/Searchbar";
import { Button } from "@mui/material";

import "./SideContent.css"; // Import your CSS file

const Sidebar = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleRepos, setVisibleRepos] = useState(7); // Initially show 7 repositories
  const [showLess, setShowLess] = useState(false); // Initially show all repositories
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchRepositories = async () => {
      setIsLoading(true);
      try {
        const id = localStorage.getItem("userId");
        const response = await fetch(
          `https://github-clone-be.vercel.app/repos/getAll/${id}`
        );
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const loadMoreRepos = () => {
    setVisibleRepos((prevVisibleRepos) => prevVisibleRepos + 15);
    setShowLess(true);
  };

  const showLessRepos = () => {
    setVisibleRepos(7); // Show only 7 repositories
    setShowLess(false); // Set showLess state to true
  };

  return (
    <div className="sidebar">
      <div className="account">
        <div className="aicon">
          <Avatar
            src="https://avatars.githubusercontent.com/u/92997159?v=4"
            size={25}
          />
        </div>

        <div className="accountName">
          <ActionMenu>
            <ActionMenu.Button
              sx={{
                backgroundColor: "black", // Set the background to black
                border: "1px solid white", // Add a white border
                color: "white", // Ensure the text color is white
                "&:hover": {
                  backgroundColor: "black", // Keep the background black on hover
                  borderColor: "white", // Keep the border white on hover
                  color: "white", // Keep the text color white on hover
                },
              }}
            >
              Test user
            </ActionMenu.Button>
            <ActionMenu.Overlay width="medium">
              <ActionList
                sx={{
                  backgroundColor: "rgb(40,44,52)", // Set the background to black
                  color: "white", // Ensure the text color is white
                }}
              ></ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
        </div>
      </div>

      <b className="sidebar-heading">Recent </b>
      <div className="recent">
        <Searchbar
          sx={{ width: "100%" }}
          placeholder="Search repositories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <IconButton
          icon={BookmarkSlashFillIcon}
          size={"medium"}
          variant="primary"
        /> */}
      </div>

      <ul className="repo-list">
        {filteredRepositories.slice(0, visibleRepos).map((repo, index) => (
          <li key={index}>
            <Avatar
              src={"https://avatars.githubusercontent.com/u/92997159?v=4"}
              size={15}
            />
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="repoTitle"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
      {filteredRepositories.length > visibleRepos && !showLess && (
        <Button onClick={loadMoreRepos}>Load More</Button>
      )}
      {showLess && <Button onClick={showLessRepos}>See Less</Button>}
    </div>
  );
};

export default Sidebar;
