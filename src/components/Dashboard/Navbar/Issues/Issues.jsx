import React from "react";
import { IconButton } from "@primer/react";
import { IssueOpenedIcon } from "@primer/octicons-react";
import Box from "@mui/material/Box"; // Import Box from MUI
import "./Issues.css";

const Issues = () => {
  return (
    <div className="navbar-issues">
      <Box>
        <IconButton
          icon={IssueOpenedIcon}
          aria-label="Issues"
          sx={{
            backgroundColor: "transparent",
            border: "1px solid white",
            color: "white",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        />
      </Box>
    </div>
  );
};

export default Issues;
