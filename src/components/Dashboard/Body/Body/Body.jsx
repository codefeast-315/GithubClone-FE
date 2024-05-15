import { PageLayout } from "@primer/react";
import React from "react";
import Feed from "../Feed/Feed";
import SideContent from "../SideContent/SideContent";
import "./Body.css";
import Repositories from "../../../../static/Repositories";

const Body = () => {
  return (
    <div className="BodyContent">
      <div className="side">
        <SideContent repositories={Repositories} />
      </div>
      <div className="feed">
        <Feed />
      </div>
    </div>
  );
};

export default Body;
