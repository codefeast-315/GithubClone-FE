import * as React from "react";
import { useNavigate } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import { Avatar } from "@primer/react";
import { NavList } from "@primer/react";
import { IconButton } from "@primer/react";

import {
  SmileyIcon,
  PersonIcon,
  ArrowSwitchIcon,
  RepoIcon,
  ProjectIcon,
  CopilotIcon,
  OrganizationIcon,
  StarIcon,
  ShareIcon,
  GearIcon,
  GlobeIcon,
  BeakerIcon,
  PeopleIcon,
  CommentDiscussionIcon,
  SignOutIcon,
} from "@primer/octicons-react";

import "./Avatar.css";

export default function AvatarIcon() {
  const navigate = useNavigate();

  const AvatarImage = () => {
    return (
      <div className="AvatarImage">
        <Avatar
          src="https://avatars.githubusercontent.com/u/92997159?v=4"
          size={45}
        />
      </div>
    );
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <div
      style={{
        // paddingTop: "10px",
        backgroundColor: "#171b23",
        minHeight: "100vh",
      }}
    >
      <NavList aria-label="Main navigation">
        <NavList.Item
          sx={{ color: "white", paddingLeft: "10px", marginBottom: "10px" }}
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/92997159?v=4"
            size={40}
          />
          <span className="avatar-sidebar-title">UserName</span>
        </NavList.Item>

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <SmileyIcon />
          <span className="avatar-sidebar-title">Set Status</span>
        </NavList.Item>
        <NavList.Divider sx={{ color: "white", paddingLeft: "10px" }} />

        <NavList.Item
          onClick={() => navigate("/profile")}
          sx={{ color: "white", paddingLeft: "10px" }}
        >
          <PersonIcon />
          <span className="avatar-sidebar-title">Profile</span>
        </NavList.Item>
        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <ArrowSwitchIcon />
          <span className="avatar-sidebar-title">Switch Account</span>
        </NavList.Item>
        <NavList.Divider sx={{ color: "white", paddingLeft: "10px" }} />

        <NavList.Item
          sx={{ color: "white", paddingLeft: "10px" }}
          onClick={() => {
            navigate(`./repo`);
          }}
        >
          <RepoIcon />
          <span className="avatar-sidebar-title">Your Repo</span>
        </NavList.Item>

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <ProjectIcon />
          <span className="avatar-sidebar-title">Your Projects</span>
        </NavList.Item>

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <CopilotIcon />
          <span className="avatar-sidebar-title">Your Copilot</span>
        </NavList.Item>

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <OrganizationIcon />
          <span className="avatar-sidebar-title">Your Organisation</span>
        </NavList.Item>

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <StarIcon />
          <span className="avatar-sidebar-title">Stars</span>
        </NavList.Item>

        <NavList.Divider sx={{ color: "white", paddingLeft: "10px" }} />

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <ShareIcon />
          <span className="avatar-sidebar-title">Upgrade</span>
        </NavList.Item>

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <GlobeIcon />
          <span className="avatar-sidebar-title">Try Enterprise</span>
        </NavList.Item>

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <BeakerIcon />
          <span className="avatar-sidebar-title">Feature Preview</span>
        </NavList.Item>

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <GearIcon />
          <span className="avatar-sidebar-title">Settings</span>
        </NavList.Item>

        <NavList.Divider sx={{ color: "white", paddingLeft: "10px" }} />

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <PeopleIcon />
          <span className="avatar-sidebar-title">Github Support</span>
        </NavList.Item>

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <CommentDiscussionIcon />
          <span className="avatar-sidebar-title">Github Community</span>
        </NavList.Item>

        <NavList.Divider sx={{ color: "white", paddingLeft: "10px" }} />

        <NavList.Item sx={{ color: "white", paddingLeft: "10px" }}>
          <SignOutIcon />
          <span className="avatar-sidebar-title">Signout</span>
        </NavList.Item>
      </NavList>
    </div>
  );

  const anchor = "right"; // Set anchor to 'left' only

  return (
    <div>
      <React.Fragment key={anchor}>
        <IconButton
          aria-label="Search"
          icon={AvatarImage}
          onClick={toggleDrawer(anchor, true)}
          sx={{
            marginLeft: "10px",
            border: "none",
            backgroundColor: "transparent", // Make the background transparent // Add a white border
            "&:hover": {
              backgroundColor: "transparent", // Optional: Add a hover effect
            },
          }}
        />

        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
