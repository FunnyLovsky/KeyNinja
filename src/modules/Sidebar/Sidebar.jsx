import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import SidebarLogo from "./components/SidebarLogo.jsx";

const Sidebar = () => {

    const linkItem = [
        {id: 1, name: 'Test', url: '/test'},
        {id: 2, name: 'Learning', url: '/learn'},
        {id: 3, name: 'Color', url: '/color'},
        {id: 4, name: 'Setting', url: '/setting'},
    ]

    const [isActive, setActive] = useState(null);

    const toggleActive = (index) => {
        setActive(index);
    }

    return(
        <>
            <section className="sidebar">
                <SidebarLogo />

                <div className="sidebar_container">
                    <p>Setting</p>
                    {
                        linkItem.map(item => {
                            return <Link 
                                    key={item.id} 
                                    to={item.url} 
                                    className={(isActive == item.id) ? 'active' : ''} 
                                    onClick={() => toggleActive(item.id)}
                                    >
                                    {item.name}
                                </Link>
                        })
                    }
                </div>

                <div className="sidebar_container">
                    <Link 
                        to="/about" 
                        className={(isActive == 5) ? 'active' : ''}
                        onClick={() => toggleActive(5)}>
                        About</Link>
                    <Link 
                        to="/profile"
                        className={(isActive == 6) ? 'active' : ''}
                        onClick={() => toggleActive(6)}
                    >Profile</Link>
                </div>
            
            </section>
            
            <Outlet/>
        </>

    )
};

export default Sidebar;