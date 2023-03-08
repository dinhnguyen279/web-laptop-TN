import React from "react";
import { imageCarousel } from "../../components/Carousel/dataCarousel";
import { fakeDataCompanyProduct } from "../../components/Products/dataProducts";
import { fakeDataBestSeller } from "../../components/Products/dataProducts";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BestSeller from "../../components/Products/BestSeller/CardBestSeller";
import CompanyProduct from "../../components/Products/CompanyProduct/CompanyProduct";
import Contact from "../../components/Products/Contact/Contact";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel slides={imageCarousel} />
      <BestSeller dataProducts={fakeDataBestSeller} />
      <CompanyProduct dataProducts={fakeDataCompanyProduct} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
