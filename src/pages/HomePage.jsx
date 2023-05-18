import React from "react";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default HomePage;
