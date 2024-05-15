import React from "react";
import { useNavigate } from "react-router-dom";
import { UnreadIcon } from "@primer/octicons-react";
import { IconButton } from "@primer/react";

const NotiButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <IconButton
        onClick={() => navigate('/notification')}
        icon={UnreadIcon}
        sx={{
          backgroundColor: "transparent", // Make the background transparent
          border: "1px solid white", // Add a white border
          color: "white", // Ensure the icon color is white
          "&:hover": {
            backgroundColor: "transparent", // Optional: Add a hover effect
          },
        }}
        aria-label="Notification"
      />
    </div>
  );
};

export default NotiButton;
