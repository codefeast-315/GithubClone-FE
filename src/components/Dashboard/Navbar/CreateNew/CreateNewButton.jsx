import React from "react";
import { useNavigate } from "react-router-dom";

import { ActionMenu, ActionList } from "@primer/react";

const CreateNew = () => {
  const navigate = useNavigate();

  return (
    <div className="navabar-createnew">
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
          +
        </ActionMenu.Button>
        <ActionMenu.Overlay width="medium">
          <ActionList
            sx={{
              backgroundColor: "rgb(40,44,52)", // Set the background to black
              color: "white", // Ensure the text color is white
            }}
          >
            <ActionList.Item
              onSelect={() => {
                window.location.href = "/createRepo";
              }}
              sx={{
                backgroundColor: "rgb(40,44,52)", // Set the background to black
                color: "white", // Ensure the text color is white
              }}
            >
              New Repository
            </ActionList.Item>
            <ActionList.Item
              onSelect={() => {
                window.location.href = "/createRepo";
              }}
              sx={{
                backgroundColor: "rgb(40,44,52)", // Set the background to black
                color: "white", // Ensure the text color is white
              }}
            >
              Import Repository
            </ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item
              onSelect={() => {
                window.location.href = "/editcode";
              }}
              sx={{
                backgroundColor: "rgb(40,44,52)", // Set the background to black
                color: "white", // Ensure the text color is white
              }}
            >
              New Codespace
            </ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </div>
  );
};

export default CreateNew;
