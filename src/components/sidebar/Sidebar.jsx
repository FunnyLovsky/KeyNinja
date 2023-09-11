import React, { useState } from "react";
import logo from '../../../public/assets/icon.svg';
import { Link } from "react-router-dom";

const Sidebar = () => {

    const linkItem = [
        {id: 1, name: 'Test', url: '/test'},
        {id: 2, name: 'Learning', url: '/learn'},
        {id: 3, name: 'Color', url: '/color'},
        {id: 4, name: 'Setting', url: '/setting'},
    ]

    const [isActive, setActive] = useState(null);

    function toggleActive(index) {
        setActive(index);
    }

    return(
        <section className="sidebar">
            <div className="sidebar_logo">
                <Link to="/" onClick={() => toggleActive(0)}>
                    <img src={logo} alt="logo" width='50px' height='50px'/>
                    <h2>KeyNinja</h2>
                </Link>
            </div>

            <div className="sidebar_container">
                <p>Setting</p>
                {
                    linkItem.map(item => {
                        return <Link 
                            key={item.id} 
                            to={item.url} 
                            className={(isActive == item.id) ? 'active' : ''} 
                            onClick={() => toggleActive(item.id)}>{item.name}</Link>
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
                    onClick={() => toggleActive(6)}>Profile</Link>
            </div>

        </section>
    )
};

export default Sidebar;