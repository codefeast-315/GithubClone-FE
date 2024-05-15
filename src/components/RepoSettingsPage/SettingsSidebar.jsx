import React from "react";
import { NavList } from "@primer/react";

function Sidebar() {
  return (
    <div>
      <NavList aria-label="Main navigation">
        <NavList.Item aria-current="page" sx={{ color: "white" }}>
          General
        </NavList.Item>

        <NavList.Divider sx={{ color: "white" }} />

        <p style={{ color: "gray" }}>Access</p>
        <NavList.Item sx={{ color: "white" }}>Collaborators</NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Moderation options</NavList.Item>

        <NavList.Divider sx={{ color: "white" }} />

        <p style={{ color: "gray" }}>Code and automation</p>
        <NavList.Item sx={{ color: "white" }}>Branches</NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Tags</NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Rules</NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Actions</NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Webhooks</NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Enviornment</NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Codespaces</NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Pages</NavList.Item>

        <NavList.Divider sx={{ color: "white" }} />

        <p style={{ color: "gray" }}>Security</p>
        <NavList.Item sx={{ color: "white" }}>
          Code Security and analysis
        </NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Deploy keys</NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Secret and Varibles</NavList.Item>

        <NavList.Divider sx={{ color: "white" }} />

        <p style={{ color: "gray" }}>Integration</p>
        <NavList.Item sx={{ color: "white" }}>GItHub Apps</NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Email notification</NavList.Item>
        <NavList.Item sx={{ color: "white" }}>Autolink refrences</NavList.Item>

        {/* <NavList.Divider sx={{ color: 'white' }} /> */}
      </NavList>
    </div>
  );
}

export default Sidebar;
