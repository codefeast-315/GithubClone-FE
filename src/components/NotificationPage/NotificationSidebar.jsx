import React from 'react'
import { BookmarkIcon, CheckCircleFillIcon, InboxIcon, ChevronDownIcon } from '@primer/octicons-react';

import "./NotificationPage.css"

function NotificationSidebar() {
    return (
        <div style={{ backgroundColor: "#20262c" }}>
            <div className="left-notifiaction-section">

                <div className="btn-grp">
                    <button className='inbox'>
                        <InboxIcon />
                        <p>Inbox</p>
                    </button>
                    <button className='saved'>
                        <BookmarkIcon />
                        <p>Saved</p>
                    </button>
                    <button className='done'>
                        <CheckCircleFillIcon />
                        <p>Done</p>
                    </button>
                </div>
                <div className="line-break">
                </div>

                <div className="notification-filter-section">
                    <div className="filter-text">
                        <p>Filter</p>
                    </div>

                    <div className="filter-btn-grp">
                        <button className='filter-btn'>
                            <p>Assigned</p>
                        </button>
                        <button className='filter-btn'>
                            <p>Participating</p>
                        </button>
                        <button className='filter-btn'>
                            <p>Mentioned</p>
                        </button>
                        <button className='filter-btn'>
                            <p>Team Mentioned</p>
                        </button>
                        <button className='filter-btn'>
                            <p>Review Requested</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationSidebar