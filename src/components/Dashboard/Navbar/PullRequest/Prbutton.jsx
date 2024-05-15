import { GitPullRequestIcon } from "@primer/octicons-react";
import { IconButton } from "@primer/react";
import React from "react";

const Prbutton = () => {
  return (
    <div className="navbar-pr">
      <IconButton
        icon={GitPullRequestIcon}
        sx={{
          backgroundColor: "transparent", // Make the background transparent
          border: "1px solid white", // Add a white border
          color: "white", // Ensure the icon color is white
          "&:hover": {
            backgroundColor: "transparent", // Optional: Add a hover effect
          },
        }}
        aria-label="Pull Requests"
      />
    </div>
  );
};

export default Prbutton;
