import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">FPT Aptech</h1>
        <nav className="menu">
          <a href="#objects" className="menu-item">Objects</a>
          <a href="#subjects" className="menu-item">Subjects</a>
          <button className="menu-btn">Sign In</button>
          <button className="menu-btn">Sign Up</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
