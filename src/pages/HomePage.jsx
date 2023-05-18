import React from "react";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import Services from "../components/Services/Services";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <Services></Services>
    </div>
  );
};

export default HomePage;
