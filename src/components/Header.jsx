import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "../css/header.css";
import "../css/menu.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <div className="header-search">
        <div className="search-icon">
          <i className="fas fa-search" />
          <input className="search-bar" type="text" placeholder="search" />
        </div>
      </div>
      <div>
        <Link to="/" className="header-logo">
          <i className="fas fa-dollar-sign" /> ECOM
        </Link>
      </div>
      <div className="header-icons">
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-user-circle"></i>
      </div>
      <div className="header-links">
        <Link to="/" className="store-link">
          store
        </Link>
        <Link to="/" className="sign-in-link">
          sign in
        </Link>
      </div>
    </div>
  );
};

export default header;
