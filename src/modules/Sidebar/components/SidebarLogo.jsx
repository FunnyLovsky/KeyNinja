import React from 'react';
import logo from '../../../../public/assets/icon.svg';
import { Link } from 'react-router-dom';

const SidebarLogo = () => {
    return (
        <div className="sidebar_logo">
            <Link to="/">
                <img src={logo} alt="logo" width="50px" height="50px" />
                <h2>KeyNinja</h2>
            </Link>
        </div>
    );
};

export default SidebarLogo;
