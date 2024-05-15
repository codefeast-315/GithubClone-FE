import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  PageLayout,
  Label,
  Avatar,
  Text,
  Octicon,
  Heading,
  CounterLabel,
} from "@primer/react";
import { ActionMenu, ActionList } from "@primer/react";
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { Header } from "@primer/react";
import { ProgressBar } from "@primer/react";
import { UnderlineNav } from "@primer/react";
import { PageHeader } from "@primer/react/drafts";
import {
  BookIcon,
  CheckIcon,
  EyeIcon,
  FileDirectoryFillIcon,
  FileIcon,
  GraphIcon,
  HistoryIcon,
  StarIcon,
} from "@primer/octicons-react";
import "./Repo.css";

const Repo = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [componentCount, setComponentCount] = useState(10);
  const { repositoryId } = useParams();
  const [repositoryTitle, setRepositoryTitle] = useState("");
  const [repositoryFile, setRepositoryFile] = useState("");

  useEffect(() => {
    const fetchRepoTitle = async () => {
      try {
        console.log("====================================");
        console.log("id", repositoryId);
        console.log("====================================");
        const response = await axios.get(
          `https://github-clone-be.vercel.app/repos/getRepositoryById/${repositoryId}`
        );
        setRepositoryTitle(response.data);
        setRepositoryFile(response.data.content);
        console.log("====================================");
        console.log(response.data);
        console.log("====================================");
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch repository title:", error);
        setIsLoading(false);
      }
    };

    fetchRepoTitle();
  }, [repositoryId]);

  const mockData = [
    {
      type: "folder",
      folderName: "src",
      lastCommitText: "Added new component",
      lastCommitTime: "2 months ago",
    },
    {
      type: "folder",
      folderName: "public",
      lastCommitText: "Updated index.html",
      lastCommitTime: "1 month ago",
    },
    {
      type: "folder",
      folderName: "node_modules",
      lastCommitText: "Updated dependencies",
      lastCommitTime: "3 months ago",
    },
    {
      type: "file",
      folderName: "package.json",
      lastCommitText: "Updated package version",
      lastCommitTime: "1 month ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "file",
      folderName: "README.md",
      lastCommitText: "Updated documentation",
      lastCommitTime: "2 weeks ago",
    },
    {
      type: "contributors",
      contributors: [
        {
          name: "John Doe",
          avatarUrl: "https://avatars.githubusercontent.com/u/92997159?v=4",
        },
        {
          name: "Joe Don",
          avatarUrl: "https://avatars.githubusercontent.com/u/92997159?v=4",
        },
        // Add more contributors as needed
      ],
    },
    // Add more mock data as needed
  ];

  return (
    <div>
      <Navbar />

      <UnderlineNav aria-label="Repository">
        <UnderlineNav.Item
          aria-current="page"
          onClick={() => navigate(`/repoview/${repositoryId}`)}
          sx={{ color: "whitesmoke" }}
        >
          Code
        </UnderlineNav.Item>
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate(`/issue/${repositoryId}`)}
        >
          Issues
        </UnderlineNav.Item>
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate("/pullrequest")}
        >
          Pull Requests
        </UnderlineNav.Item>
        <UnderlineNav.Item
          sx={{ color: "whitesmoke" }}
          onClick={() => navigate(`/repoSettings/${repositoryId}`)}
        >
          Settings
        </UnderlineNav.Item>
      </UnderlineNav>

      {isLoading ? (
        <ProgressBar progress={50} aria-label="Upload test.png" />
      ) : (
        <div className="bodyRepo">
          <PageLayout>
            <PageLayout.Header
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div className="header">
                <div className="titleHead">
                  <Header.Item>
                    <PageHeader>
                      <PageHeader.TitleArea variant={"large"}>
                        <PageHeader.Title>
                          {repositoryTitle.name}
                        </PageHeader.Title>
                        <PageHeader.TrailingVisual>
                          <Label>
                            {repositoryTitle.visibility ? "Public" : "Private"}
                          </Label>
                        </PageHeader.TrailingVisual>
                      </PageHeader.TitleArea>
                    </PageHeader>
                  </Header.Item>
                </div>

                <div className="downloadButton">
                  <ActionMenu>
                    <ActionMenu.Button
                      sx={{
                        backgroundColor: "black",
                        border: "1px solid gray",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "black",
                          borderColor: "white",
                          color: "white",
                        },
                      }}
                    >
                      Add File
                    </ActionMenu.Button>
                    <ActionMenu.Overlay>
                      <ActionList
                        sx={{
                          backgroundColor: "rgb(40,44,52)",
                          color: "white",
                        }}
                      >
                        <ActionList.Item
                          sx={{
                            backgroundColor: "rgb(40,44,52)",
                            color: "white",
                          }}
                        >
                          Create New File
                        </ActionList.Item>
                      </ActionList>

                      <ActionList
                        sx={{
                          backgroundColor: "rgb(40,44,52)",
                          color: "white",
                        }}
                      >
                        <ActionList.Item
                          sx={{
                            backgroundColor: "rgb(40,44,52)",
                            color: "white",
                          }}
                          onClick={() =>
                            navigate(`/uploadFile/${repositoryId}`)
                          }
                        >
                          Upload File
                        </ActionList.Item>
                      </ActionList>
                    </ActionMenu.Overlay>
                  </ActionMenu>

                  <ActionMenu>
                    <ActionMenu.Button
                      sx={{
                        backgroundColor: "green", // Set the background to black
                        color: "white", // Ensure the text color is white
                      }}
                    >
                      Code
                    </ActionMenu.Button>
                    <ActionMenu.Overlay width="small">
                      <ActionList
                        sx={{
                          backgroundColor: "rgb(40,44,52)", // Set the background to black
                          color: "white", // Ensure the text color is white
                        }}
                      >
                        <ActionList.Item
                          onSelect={() => alert("Download link clicked")}
                          sx={{
                            backgroundColor: "rgb(40,44,52)", // Set the background to black
                            color: "white", // Ensure the text color is white
                          }}
                        >
                          Download as zip
                        </ActionList.Item>
                      </ActionList>
                    </ActionMenu.Overlay>
                  </ActionMenu>
                </div>
              </div>
            </PageLayout.Header>

            <PageLayout.Content
              sx={{
                height: 500,
                marginBottom: 250,
              }}
            >
              <div className="headerTable">
                <div className="headerTableLeft">
                  <div className="avatarHead">
                    <Avatar
                      src="https://avatars.githubusercontent.com/u/92997159?v=4"
                      size={30}
                    />
                  </div>
                  <div className="HeaderLeftText">
                    <Text sx={{ padding: "10px" }}>Prasun60</Text>
                  </div>
                </div>
                <Text
                  className="latest-commit"
                  sx={{ paddings: "10px", marginLeft: "30px" }}
                >
                  Latest Commit
                  <Octicon
                    icon={CheckIcon}
                    size={32}
                    color="success.fg"
                    sx={{ mr: 2 }}
                  />
                </Text>
                <div
                  className="headerTableRight"
                  onClick={() => navigate("/commitHistory")}
                >
                  <Octicon icon={HistoryIcon} size={16} sx={{ mr: 2 }} />
                  <Text>4 months ago</Text>
                </div>
              </div>

              <div className="tableBody">
                {repositoryFile.slice(1).map((item, index) => {
                  const fileName = item.split("/").pop();
                  return (
                    <div
                      key={index}
                      className="rows"
                      onClick={() => navigate(`/editcode/${repositoryId}`)}
                    >
                      <div className="leftTextBody">
                        <FileIcon size={16} />
                        {fileName}
                      </div>
                      <div className="centreTextBody">First Commit</div>
                      <div className="rightTextBody">Last Commit</div>
                    </div>
                  );
                })}
              </div>
            </PageLayout.Content>
            <PageLayout.Pane sx={{}}>
              <div className="About">
                <Heading sx={{ color: "whitesmoke" }}>About</Heading>
                <div className="f4 my-3 color-fg-muted text-italic">
                  No description, website, or topics provided.
                </div>
                <div className="AboutText">
                  <div className="readmeIcon">
                    <a href="#readme" className="iconLink">
                      <BookIcon />
                      <Text>Readme</Text>
                    </a>
                  </div>
                  <div className="ActivityIcon">
                    <a href="#activity" className="iconLink">
                      <GraphIcon size={16} />
                      <Text>Activity</Text>
                    </a>
                  </div>
                  <div className="StarIcon">
                    <a href="#star" className="iconLink">
                      <Octicon icon={StarIcon} />
                      <Text>Star</Text>
                    </a>
                  </div>
                  <div className="WatchIcon">
                    <a href="#watch" className="iconLink">
                      <Octicon icon={EyeIcon} />
                      <Text>Watch</Text>
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="About">
                <Heading sx={{ color: "whitesmoke" }}>Releases</Heading>
                <div style={{ paddingTop: "10px", color: "gray" }}>
                  No releases published
                </div>
              </div>
              <hr />
              <div className="About">
                <div className="CountContri">
                  <Heading sx={{ color: "whitesmoke" }}>Contributors</Heading>
                  <CounterLabel scheme="primary">
                    {
                      mockData.find((item) => item.type === "contributors")
                        .contributors.length
                    }
                  </CounterLabel>
                </div>
                <div
                  style={{ paddingTop: "10px", color: "gray" }}
                  className="ContributorList"
                >
                  {mockData
                    .find((item) => item.type === "contributors")
                    .contributors.map((contributor, idx) => (
                      <div key={idx} className="Contributors">
                        <Avatar src={contributor.avatarUrl} size={30} />
                        <Text>{contributor.name}</Text>
                      </div>
                    ))}
                </div>
              </div>
            </PageLayout.Pane>
            <PageLayout.Footer></PageLayout.Footer>
          </PageLayout>
        </div>
      )}
    </div>
  );
};

export default Repo;
