import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import SidebarLogo from "./components/SidebarLogo.jsx";

const Sidebar = () => {

    const linkItem = [
        {id: 1, name: 'Test', url: '/test'},
        {id: 2, name: 'Learning', url: '/learn'},
        {id: 3, name: 'Color', url: '/color'},
        {id: 4, name: 'Setting', url: '/setting'},
    ]

    return(
        <>
            <section className="sidebar">
                <SidebarLogo />

                <div className="sidebar_container">
                    <p>Setting</p>
                    {linkItem.map(item => 
                        <NavLink key={item.id} to={item.url}>{item.name}</NavLink>
                    )}
                </div>

                <div className="sidebar_container">
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
            
            </section>
            
            <Outlet/>
        </>

    )
};

export default Sidebar;