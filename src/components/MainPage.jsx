import React from "react";
import Hero from "./Hero";
import ProductLinks from "./ProductLinks";
import ProductsSlider from "./ProductsSlider";
import "../css/mainPage.css";
import ImageGallery from "./ImageGallery";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className="main-page">
      <Hero />
      <ProductLinks />
      <ProductsSlider />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default MainPage;
