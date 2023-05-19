import React from "react";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import Services from "../components/Services/Services";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
TrustedCompany;

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ShopByCategory></ShopByCategory>
      <Gallery></Gallery>
      <TrustedCompany></TrustedCompany>
    </div>
  );
};

export default HomePage;
