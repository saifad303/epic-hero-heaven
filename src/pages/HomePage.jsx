import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";
import Services from "../components/Services/Services";
import TrustedCompany from "../components/TrustedCompany/TrustedCompany";
import Testimonials from "../components/Slick/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Epic Hero Heaven | Home</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <ShopByCategory></ShopByCategory>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      {/* <TrustedCompany></TrustedCompany> */}
    </div>
  );
};

export default HomePage;
