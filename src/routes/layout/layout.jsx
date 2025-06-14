import React from 'react';
import "./layout.scss";
import Navbar from "../../components/navbar/Navbar.jsx";
import HomePage from "../homePage/homePage.jsx";
import { Outlet } from 'react-router-dom';

const layout = () => {
  return (
    <div className="layout">
        <div className="navbar">
            {<Navbar />}
        </div>
        <div className="content">
            { <Outlet />}
        </div>
    </div>
  )
}

export default layout