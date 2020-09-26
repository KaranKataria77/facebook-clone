import React from 'react';
import Sidebarrow from './Sidebarrow';
import './Sidebar.css';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';



const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <Sidebarrow src={user.photoURL} title={user.displayName}/>
            <Sidebarrow Icon={LocalHospitalRoundedIcon} title="Covid-19 Information Center"/>
            <Sidebarrow Icon={EmojiFlagsIcon} title="Pages"/>
            <Sidebarrow Icon={PeopleIcon} title="Friends"/>
            <Sidebarrow Icon={ChatIcon} title="Message"/>
            <Sidebarrow Icon={StorefrontIcon} title="Marketplace"/>
            <Sidebarrow Icon={VideoLibraryIcon} title="Videos"/>
            <Sidebarrow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}

export default Sidebar;