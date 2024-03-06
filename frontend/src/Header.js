import React from "react";
import "./Header.css";
import Navbar from "./components/Navbar";
import HeroFirst from "./components/NavExtension";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <HeroFirst />
    </div>
  );
};

export default Header;
