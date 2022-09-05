import React from "react";
import "../CSS/styles.css";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Learn from "../Components/Learn";
import MainCategory from "./MainCategory";
import Pricing from "../Components/Pricing";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";

const HomeView = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Learn />
      <MainCategory />
      <Pricing />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomeView;
