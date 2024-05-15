import React from "react";
// import { ThemeProvider, BaseStyles, theme } from "@primer/react";
import "../../App.css";
import Navbar from "./Navbar/Navbar/Navbar";
import Body from "./Body/Body/Body";

const Dashboard = () => {
  return (

    <div className="App">
      <Navbar name="UserName" />
      <div className="line-break"></div>
      <Body />
    </div>

  );
};

export default Dashboard;
