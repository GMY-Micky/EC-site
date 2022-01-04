import React from "react";
import "../css/menu.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const MenuItems = () => {
  return (
    <div>
      <nav className="menu_items">
        <a>
          <h6>Men's Watches</h6>
          <div className="menu_down_btn">
            <BiChevronDown />
          </div>
          <div className="sub_menu">
            <h6>Men's Watches</h6>
          </div>
        </a>
        <a>
          <h6>Women's Watches</h6>
          <div className="menu_down_btn">
            <BiChevronDown />
          </div>
          <div className="sub_menu">
            <h6>Women's Watches</h6>
          </div>
        </a>
        <a>
          <h6>Denim</h6>
          <div className="menu_down_btn">
            <BiChevronDown />
          </div>
          <div className="sub_menu">
            <h6>Denim</h6>
          </div>
        </a>
        <a>
          <h6>Bags</h6>
          <div className="menu_down_btn">
            <BiChevronDown />
          </div>
          <div className="sub_menu">
            <h6>Bags</h6>
          </div>
        </a>
        <a>
          <h6>Shoes</h6>
          <div className="menu_down_btn">
            <BiChevronDown />
          </div>
          <div className="sub_menu">
            <h6>Shoes</h6>
          </div>
        </a>
        <a>
          <h6>Clothing</h6>
          <div className="menu_down_btn">
            <BiChevronDown />
          </div>
          <div className="sub_menu">
            <h6>Clothing</h6>
          </div>
        </a>
        <a>
          <h6>Bands</h6>
          <div className="menu_down_btn">
            <BiChevronDown />
          </div>
          <div className="sub_menu">
            <h6>Bands</h6>
          </div>
        </a>
      </nav>
    </div>
  );
};

export default MenuItems;
