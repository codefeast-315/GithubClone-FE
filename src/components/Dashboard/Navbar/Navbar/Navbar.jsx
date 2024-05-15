import React from "react";
import { useNavigate } from "react-router-dom";
import CreateNew from "../CreateNew/CreateNewButton";
import Sidebar from "../../Sidebar/Sidebar";
import Searchbar from "../Searchbar/Searchbar";
import Issues from "../Issues/Issues";
import Prbutton from "../PullRequest/Prbutton";
import NotiButton from "../Notificationbutton/NotiButton";
import AvatarIcon from "../Avatar/Avatar";
import { MarkGithubIcon } from "@primer/octicons-react";
import TemporaryDrawer from "../../Sidebar/Sidebar";
import "./Navbar.css";

const Navbar = (props) => {
  const navigate = useNavigate();

  console.log("name:" + props.name)
  return (
    <div className="navbarMain">
      <div className="leftnav">
        <div className="sideMenu">
          <TemporaryDrawer />
        </div>
        <div className="logoBox">
          {" "}
          <div
            className="logo"
            onClick={() => navigate("/")}
          >
            <MarkGithubIcon size={"medium"} />
          </div>
          <div className="name">{props.name ? props.name : 'Dashboard'}</div>
        </div>
      </div>

      <div className="rightnav">
        <Searchbar />
        <div className="verticalLine">|</div>
        <div className="icons">
          <CreateNew />
          <Issues />
          <Prbutton />
          <NotiButton />
          <AvatarIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
