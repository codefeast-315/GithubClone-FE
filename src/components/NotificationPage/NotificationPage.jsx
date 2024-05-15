import React, { useState, useEffect } from "react";
import io from "socket.io-client"; // Import Socket.IO client
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { ChevronDownIcon } from "@primer/octicons-react";
import { TextInput } from "@primer/react";
import axios from "axios";

import "./NotificationPage.css";
import NotificationSidebar from "./NotificationSidebar";
import SideDrawer from "./SideDrawer";

function NotificationPage() {
  const [issues, setIssues] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const userID = localStorage.getItem("userId");
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          `https://github-clone-be.vercel.app/repo/issues/user/${userID}`
        );
        setIssues(response.data);
      } catch (error) {
        console.error("Failed to fetch issues:", error);
      }
    };

    fetchIssues();

    const socket = io("https://github-clone-be.vercel.app");

    socket.on("connect", () => {
      socket.emit("joinRoom", userID);
    });

    socket.on("issueUpdate", (updatedIssue) => {
      console.log("Updated issues:", updatedIssue);
      setIssues(updatedIssue);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="line-break"></div>

      <div className="notification-wrapper">
        <div className="left-sidebar-noti">
          <NotificationSidebar />
        </div>

        <div className="right-notification-section">
          <div className="filter-and-search">
            <div className="mobile-sidedrawer-btn">
              <SideDrawer />
            </div>

            <button className="repo-search-btn all-btn">
              <p>All</p>
            </button>
            <button className="repo-search-btn unread-btn">
              <p>Unread</p>
            </button>
            <TextInput
              className="text-input-notification"
              sx={{
                width: "100%",
                height: "30px",
                border: "0.5px solid gray",
                backgroundColor: "transparent",
                color: "whitesmoke",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              placeholder="search "
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
            <button className="repo-search-btn grp-by">
              <p>Group By: Date</p>
              <ChevronDownIcon />
            </button>
          </div>

          <div className="notification-section">
            <div className="select-section">
              <input type="checkbox" />
              <p>Select All</p>
            </div>

            <div className="message-section">
              {issues
                .slice()
                .reverse()
                .map((issue, index) => (
                  <div key={index} className="message">
                    <input type="checkbox" />
                    <div className="text-section">
                      <h5>{issue.title}</h5>
                      {/* Display other issue details as needed */}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;
