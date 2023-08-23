import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './style/app.less';
import './style/style.less'

import Sidebar from "./components/sidebar/Sidebar.jsx";

import Test from "./pages/Test.jsx";
import Learn from "./pages/Learn.jsx";
import Setting from "./pages/Setting.jsx";
import Main from "./pages/Main.jsx";
import Error from "./pages/Error.jsx";
import Color from "./pages/Color.jsx";



const App = () => {
    return (
        <BrowserRouter>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Main/>}/> 
                <Route path="/test" element={<Test/>}/>
                <Route path="/learn" element={<Learn/>}/>
                <Route path="/setting" element={<Setting />}/>
                <Route path="/color" element={<Color/>}/>
                
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;