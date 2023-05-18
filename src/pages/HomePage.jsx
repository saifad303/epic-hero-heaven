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
      <Gallery></Gallery>
      <Services></Services>
      <ShopByCategory></ShopByCategory>
      <TrustedCompany></TrustedCompany>
    </div>
  );
};

export default HomePage;
