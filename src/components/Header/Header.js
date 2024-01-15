import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon className="header__Menu" />
                <Link to={`/`}>
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="YouTube"
                    />
                </Link>
            </div>
            <div className="header__input">
                <input
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                    placeholder="Search"
                ></input>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="Muhammad Husnain"
                    src="https://media.licdn.com/dms/image/D4D03AQFKmVdn_rpCxA/profile-displayphoto-shrink_800_800/0/1696443020672?e=1710979200&v=beta&t=pxsWQQi5dR5V44UAxxVfAYhPmzdsgaz-L56AtxYCmGc"
                />
            </div>
        </div>
    );
}

export default Header;
