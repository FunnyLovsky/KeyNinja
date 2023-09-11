import React from "react";
import { Route, Routes } from "react-router-dom";

import './style/app.less';
import './style/style.less'

import Sidebar from "./modules/Sidebar/Sidebar.jsx";

import Test from "./pages/Test.jsx";
import Learn from "./pages/Learn.jsx";
import Setting from "./pages/Setting.jsx";
import Main from "./pages/Main.jsx";
import Error from "./pages/Error.jsx";
import Color from "./pages/Color.jsx";



const App = () => {


    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route element={<Sidebar/>}>
                <Route path="/test" element={<Test/>}/>
                <Route path="/learn" element={<Learn/>}/>
                <Route path="/setting" element={<Setting />}/>
                <Route path="/color" element={<Color/>}/>
            </Route> 

            <Route path="*" element={<Error/>}/>
        </Routes>

    );
};

export default App;