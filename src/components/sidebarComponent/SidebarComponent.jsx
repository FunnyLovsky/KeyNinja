import React from "react";

import Sidebar from '../sidebar/Sidebar.jsx';

const SidebarComponent = ({children, sidebar = false}) => {
    return(
        <>
            {
                (sidebar) ? 
                    <div>
                        <Sidebar/>
                        {children}
                    </div>
                : <div>{children}</div>
            }
        </>

    );
};

export default SidebarComponent;