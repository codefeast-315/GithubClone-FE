import React from 'react'
import { BookIcon, PlusCircleIcon, LinkIcon, RepoIcon, CodeIcon, BugIcon, GitPullRequestIcon } from '@primer/octicons-react';

import "./SearchPage.css"

function FilterMenu() {
    return (
        <div style={{ backgroundColor: "#0c1017", height: "100vh", color: "whitesmoke" }}>

            <div className="filter-section">
                <div className="filter-menu">
                    <div className="filter-header">
                        <h4>Filter</h4>
                    </div>
                    <div className="filter-body">
                        <div className="filter-item">
                            <CodeIcon />
                            <p>Code</p>
                        </div>
                        <div className="filter-item">
                            <RepoIcon />
                            <p>Repositories</p>
                        </div>
                        <div className="filter-item">
                            <BugIcon />
                            <p>Issue</p>
                        </div>
                        <div className="filter-item">
                            <GitPullRequestIcon />
                            <p>Pull Request</p>
                        </div>
                    </div>
                </div>

                <div className="divider">
                </div>


                <div className="laguages-menu">
                    <div className="filter-header">
                        <h4>Languages</h4>
                    </div>
                    <div className="filter-body">
                        <div className="language-item">
                            <div
                                style={{
                                    backgroundColor: 'green',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%'
                                }}>
                            </div>
                            <p>HTML</p>
                        </div>
                        <div className="language-item">
                            <div
                                style={{
                                    backgroundColor: 'yellow',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%'
                                }}>
                            </div>
                            <p>JavaScript</p>
                        </div>
                        <div className="language-item">
                            <div
                                style={{
                                    backgroundColor: 'lightblue',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%'
                                }}>
                            </div>
                            <p>CSS</p>
                        </div>
                        <div className="language-item">
                            <div
                                style={{
                                    backgroundColor: 'red',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%'
                                }}>
                            </div>
                            <p>Ruby</p>
                        </div>
                        <div className="language-item">
                            <div
                                style={{
                                    backgroundColor: 'white',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%'
                                }}>
                            </div>
                            <p>Java</p>
                        </div>
                        <div className="language-item">
                            <div
                                style={{
                                    backgroundColor: 'blue',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%'
                                }}>
                            </div>
                            <p>Pyhton</p>
                        </div>
                    </div>
                </div>

                <div className="divider">
                </div>

                <div className="advanced-menu">
                    <div className="filter-header">
                        <h4>Advanced</h4>
                    </div>
                    <div className="filter-body">
                        <div className="filter-item">
                            <PlusCircleIcon />
                            <p>Owner</p>
                        </div>
                        <div className="filter-item">
                            <PlusCircleIcon />
                            <p>Size</p>
                        </div>
                        <div className="filter-item">
                            <PlusCircleIcon />
                            <p>Number Of Followers</p>
                        </div>
                        <div className="filter-item">
                            <PlusCircleIcon />
                            <p>Number of Forks</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FilterMenu