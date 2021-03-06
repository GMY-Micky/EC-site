import React, { useState } from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import SideBarMenu from "./SideBarMenu";

const header = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const [clickSearch, setClickSearch] = useState(false);

  const handleMenu = () => {
    if (clickSearch === true) {
      setClickSearch(false);
    }
    setClickMenu(!clickMenu);
  };

  const handleSearch = () => {
    if (clickMenu === true) {
      setClickMenu(false);
    }
    setClickSearch(!clickSearch);
  };

  return (
    <div className="header">
      <div className="left-head">
        <div className="sidebar-menu">
          <button onClick={handleMenu} className="sidebar-menu-btn">
            <i className={clickMenu ? "fas fa-times" : "fas fa-bars"} />
          </button>
          {clickMenu && <SideBarMenu />}
        </div>
        <div className="header-search">
          <button onClick={handleSearch} className="search-btn">
            <i className="fas fa-search search-icon" />
          </button>
          {clickSearch && (
            <input className="search-bar" type="text" placeholder="search" />
          )}
        </div>
      </div>
      <div>
        <Link to="/" className="header-logo">
          <i className="fas fa-dollar-sign" /> ECOM
        </Link>
      </div>
      <div className="header-icons">
        <Link to="/sign-in" className="sign-in-logo">
          <i className="fas fa-user-circle"></i>
        </Link>
      </div>
      <div className="header-links">
        <Link to="/sign-in" className="sign-in-link">
          sign in
        </Link>
      </div>
    </div>
  );
};

export default header;
