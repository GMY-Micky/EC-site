import React from "react";
import "../css/sideBarMenu.css";

const SideBarMenu = () => {
  document
    .getElementsByClassName("level-3")
    .addEventListner("click", function hideShow() {
      if (divison.style.display != "none") {
        divison.style.display = "none";
      } else {
        divison.style.display = "block";
      }
    });

  return (
    <div className="sidebar-menu">
      <div className="menu">
        <ul className="level-2">
          <li className="level-2-item">
            <div className="level-3-lable">
              <a href="#">
                <span>Featured</span>
              </a>
            </div>
            <ul className="level-3" style={{ display: "none" }}>
              <li className="level-3-item">New Arrivals</li>
              <li className="level-3-item">Best Sellers</li>
              <li className="level-3-item">custom</li>
              <li className="level-3-item">Shop All</li>
            </ul>
          </li>
          <li className="level-2-item">
            <div className="level-3-lable">
              <a href="#">
                <span>Style</span>
              </a>
            </div>
            <ul className="level-3" style={{ display: "none" }}>
              <li className="level-3-item">Classic</li>
              <li className="level-3-item">Digital</li>
              <li className="level-3-item">Chronograph</li>
              <li className="level-3-item">Oversized</li>
              <li className="level-3-item">Automatic</li>
            </ul>
          </li>
          <li className="level-2-item">
            <div className="level-3-lable">
              <a href="#">
                <span>Use</span>
              </a>
            </div>
            <ul className="level-3" style={{ display: "none" }}>
              <li className="level-3-item">Surf & Tide</li>
              <li className="level-3-item">Sports & Fitness</li>
              <li className="level-3-item">Waterproof/Resistant</li>
            </ul>
          </li>
          <li className="level-2-item">
            <div className="level-3-lable">
              <a href="#">
                <span>Trending</span>
              </a>
            </div>
            <ul className="level-3" style={{ display: "none" }}>
              <li className="level-3-item">Sustainable Watches</li>
              <li className="level-3-item">Black Watches</li>
              <li className="level-3-item">Gold Watches</li>
              <li className="level-3-item">Stainless Steel Watches</li>
              <li className="level-3-item">Leather Watches</li>
              <li className="level-3-item">Blue Watches</li>
              <li className="level-3-item">Rose Gold Watches</li>
            </ul>
          </li>
          <li className="level-2-item">
            <div className="level-3-lable">
              <a href="#">
                <span>Collaboration</span>
              </a>
            </div>
            <ul className="level-3" style={{ display: "none" }}>
              <li className="level-3-item">Grateful Dead</li>
              <li className="level-3-item">Metallica</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarMenu;
