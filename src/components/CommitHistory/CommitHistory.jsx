import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../Dashboard/Navbar/Navbar/Navbar";
import { UnderlineNav, ActionMenu, ActionList, Avatar } from "@primer/react";

import './CommitHistory.css'
import { CodeIcon, CopyIcon } from '@primer/octicons-react';

function CommitHistory() {
    const navigate = useNavigate();


    return (
        <div>
            <Navbar name="UserName" />

            <UnderlineNav aria-label="Repository">
                <UnderlineNav.Item aria-current="page" sx={{ color: "whitesmoke" }} onClick={() => navigate('/repoView')}>
                    Code
                </UnderlineNav.Item>
                <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/issue')}>
                    Issues
                </UnderlineNav.Item>
                <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/pullrequest')}>
                    Pull Requests
                </UnderlineNav.Item>
                <UnderlineNav.Item sx={{ color: "whitesmoke" }} onClick={() => navigate('/repoSettings')}>
                    Settings
                </UnderlineNav.Item>
            </UnderlineNav>

            <div className="commit-history-wrapper">
                <div className="commit-heading">
                    <h3>Commits</h3>
                </div>
                <div className="line-break"></div>
            </div>

            <div className="btn-wrapper">
                <ActionMenu>
                    <ActionMenu.Button
                        sx={{
                            backgroundColor: "black", // Set the background to black
                            border: "1px solid white", // Add a white border
                            color: "white", // Ensure the text color is white
                            "&:hover": {
                                backgroundColor: "black",
                                color: "black",
                            },
                        }}
                    >
                        main
                    </ActionMenu.Button>
                    <ActionMenu.Overlay width="medium">
                        <ActionList
                            sx={{
                                backgroundColor: "rgb(40,44,52)", // Set the background to black
                                color: "white", // Ensure the text color is white
                            }}
                        >
                            <ActionList.Item
                                sx={{
                                    backgroundColor: "rgb(40,44,52)", // Set the background to black
                                    color: "white", // Ensure the text color is white
                                }}
                            >
                                Main
                            </ActionList.Item>
                            <ActionList.Item
                                sx={{
                                    backgroundColor: "rgb(40,44,52)", // Set the background to black
                                    color: "white", // Ensure the text color is white
                                }}
                            >
                                Master
                            </ActionList.Item>

                            <ActionList.Item
                                variant="danger"
                                sx={{
                                    backgroundColor: "rgb(40,44,52)", // Set the background to black
                                    color: "white", // Ensure the text color is white
                                }}
                            >
                                Random
                            </ActionList.Item>
                        </ActionList>
                    </ActionMenu.Overlay>
                </ActionMenu>
            </div>

            <p
                style={{
                    color: "gray",
                    margin: "10px 30px"
                }}
            >
                Commits on Apr 9, 2024
            </p>

            <div className="commit-history">
                <div className="commit-card">
                    <div className="commit-card-left">
                        <div className="commit-card-header">
                            <h4>Commit 1</h4>
                        </div>
                        <div className="commit-card-body">
                            <span>
                                <Avatar
                                    src="https://avatars.githubusercontent.com/u/92997159?v=4"
                                    size={20}
                                />
                            </span>
                            <span style={{ marginLeft: "10px" }}>UserName</span>
                        </div>
                    </div>

                    <div className="commit-card-right">
                        <p style={{ color: "gray" }}>q45gs453</p>
                        <CopyIcon />
                        <CodeIcon />
                    </div>
                </div>

                <div className="line-break"></div>

                <div className="commit-card">
                    <div className="commit-card-left">
                        <div className="commit-card-header">
                            <h4>Commit 1</h4>
                        </div>
                        <div className="commit-card-body">
                            <span>
                                <Avatar
                                    src="https://avatars.githubusercontent.com/u/92997159?v=4"
                                    size={20}
                                />
                            </span>
                            <span style={{ marginLeft: "10px" }}>UserName</span>
                        </div>
                    </div>

                    <div className="commit-card-right">
                        <p style={{ color: "gray" }}>q45gs453</p>
                        <CopyIcon />
                        <CodeIcon />
                    </div>
                </div>


            </div>


            <p
                style={{
                    color: "gray",
                    margin: "10px 30px"
                }}
            >
                Commits on Apr 9, 2024
            </p>

            <div className="commit-history">
                <div className="commit-card">
                    <div className="commit-card-left">
                        <div className="commit-card-header">
                            <h4>Commit 1</h4>
                        </div>
                        <div className="commit-card-body">
                            <span>
                                <Avatar
                                    src="https://avatars.githubusercontent.com/u/92997159?v=4"
                                    size={20}
                                />
                            </span>
                            <span style={{ marginLeft: "10px" }}>UserName</span>
                        </div>
                    </div>

                    <div className="commit-card-right">
                        <p style={{ color: "gray" }}>q45gs453</p>
                        <CopyIcon />
                        <CodeIcon />
                    </div>
                </div>

                <div className="line-break"></div>

                <div className="commit-card">
                    <div className="commit-card-left">
                        <div className="commit-card-header">
                            <h4>Commit 1</h4>
                        </div>
                        <div className="commit-card-body">
                            <span>
                                <Avatar
                                    src="https://avatars.githubusercontent.com/u/92997159?v=4"
                                    size={20}
                                />
                            </span>
                            <span style={{ marginLeft: "10px" }}>UserName</span>
                        </div>
                    </div>

                    <div className="commit-card-right">
                        <p style={{ color: "gray" }}>q45gs453</p>
                        <CopyIcon />
                        <CodeIcon />
                    </div>
                </div>


            </div>


        </div>
    )
}

export default CommitHistory