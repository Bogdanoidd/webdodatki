import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import Sidebar from "./Sidebar";
import SocialIcons from "./SocialIcons"; 

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
 
        {showLinks && <Sidebar />}

        <SocialIcons />
      </div>
    </nav>
  );
};

export default Navbar;
