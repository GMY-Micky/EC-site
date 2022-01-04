import React from "react";
import Hero from "./Hero";
import ProductLinks from "./ProductLinks";
import ProductsSlider from "./ProductsSlider";
import "../css/mainPage.css";
import SlickSlider from "./SlickSlider";

const MainPage = () => {
  return (
    <div className="main-page">
      <Hero />
      <ProductLinks />
      <ProductsSlider />
    </div>
  );
};

export default MainPage;
