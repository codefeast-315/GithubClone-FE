import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav } from "@primer/react";
import {
  BookIcon,
  RepoIcon,
  PivotColumnIcon,
  ChevronDownIcon,
  PackageIcon,
  StarIcon,
  EyeIcon,
} from "@primer/octicons-react";
import { TextInput } from "@primer/react";
import "./RepositoriesPage.css";

function RepositriesPage() {
  const navigate = useNavigate();

  const [repos, setRepos] = useState([]); // State to store fetched repositories
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  const [userDetails, setUserDetails] = useState({
    username: "username",
    content: "HTML",
  }); // State to store user details

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const id = localStorage.getItem("userId");
        const response = await axios.get(
          `https://github-clone-be.vercel.app/repos/getAll/${id}`
        );
        setRepos(response.data); // Set the fetched repositories
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      }
    };

    const fetchUserDetails = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(
            `https://github-clone-be.vercel.app/users/${userId}`
          );
          setUserDetails(response.data);
        } catch (error) {
          console.error("Failed to fetch user details:", error);
        }
      }
    };

    fetchRepos();
    fetchUserDetails();
  }, []);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter repositories based on search query
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item
          onClick={() => navigate("/profile")}
          icon={BookIcon}
          sx={{
            backgroundColor: "transparent",
            color: "whitesmoke",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Overview
        </UnderlineNav.Item>
        <UnderlineNav.Item
          aria-current="page"
          icon={RepoIcon}
          sx={{
            backgroundColor: "transparent",
            color: "whitesmoke",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Repositories
        </UnderlineNav.Item>
        <UnderlineNav.Item
          icon={PivotColumnIcon}
          sx={{
            backgroundColor: "transparent",
            color: "whitesmoke",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Projects
        </UnderlineNav.Item>
        <UnderlineNav.Item
          icon={PackageIcon}
          sx={{
            backgroundColor: "transparent",
            color: "whitesmoke",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Packages
        </UnderlineNav.Item>
      </UnderlineNav>

      <div className="repo-page-wrapper">
        <div className="user-profile-section">
          <div className="profile-image"></div>

          <div className="name">
            <h3>{userDetails.username}</h3>
            <p>{userDetails.content}</p>
          </div>

          <button className="follow-btn">Follow</button>

          <div className="follower">
            <p>10 Follower</p>
            <p>3 Following</p>
          </div>
        </div>

        <div className="repo-section">
          <div className="repo-search-section">
            <TextInput
              sx={{
                width: "40%",
                backgroundColor: "transparent",
                color: "whitesmoke",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              placeholder="Find a repository..."
              value={searchQuery}
              onChange={handleSearchChange} // Update search query state on change
            />

            <button className="repo-search-btn">
              <p>Type</p>
              <ChevronDownIcon />
            </button>
            <button className="repo-search-btn">
              <p>Language</p>
              <ChevronDownIcon />
            </button>
            <button className="repo-search-btn">
              <p>Sort</p>
              <ChevronDownIcon />
            </button>
            <button
              className="repo-search-btn"
              onClick={() => navigate("/createRepo")}
              style={{ backgroundColor: "#238737" }}
            >
              <p>New</p>
            </button>
          </div>

          {filteredRepos
            .slice()
            .reverse()
            .map((repo) => (
              <div key={repo._id} className="repo-item-wrapper">
                <div className="repo-info">
                  <h3
                    onClick={() => navigate(`/repoview/${repo._id}`)}
                    className="repository-name"
                  >
                    {repo.name}
                  </h3>
                  <p className="description">{repo.content[0]}</p>

                  <div className="repo-info-section">
                    <div className="language-item">
                      <div
                        style={{
                          backgroundColor: "green",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <p>HTML</p>
                    </div>

                    <div className="description">
                      Updated {/* Adjust based on your API's response */}
                    </div>
                  </div>
                </div>

                <div className="repo-acftions">
                  <button className="repo-star-btn">
                    <StarIcon />
                    <p>Star</p>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RepositriesPage;
