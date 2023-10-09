import React from "react";
import ReactDOM from "react-dom/client";
import HomeCarousel from "./HomeCarousel";
import ContentCarousel from "./ContentCarousel";
import HeaderComp from "./HeaderComp";
import FooterComp from "./FooterComp";
function BodyComp() {
  return (
    <div>
        <HeaderComp />
      <HomeCarousel />
      <ContentCarousel />
      <ContentCarousel />
      <FooterComp />
    </div>
  );
}

export default BodyComp;
