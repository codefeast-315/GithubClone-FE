import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import NotificationSidebar from './NotificationSidebar';


export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    return (
        <div >
            <button
                className='repo-search-btn'
                onClick={toggleDrawer(true)}
            >
                Menu
            </button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <NotificationSidebar />
            </Drawer>
        </div>
    );
}