import React, { useState } from "react";
import "../css/menu.css";
import "../css/header.css";
import MenuItems from "./MenuItems";

const Menu = () => {
  const [click, setClick] = useState(false);

  return (
    <div>
      <div className="hamburger">
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
        <div className="ham-menu">
          <MenuItems />
        </div>
      </div>
      <div className="main-menu">
        <MenuItems />
      </div>
    </div>
  );
};

export default Menu;
