import React from "react";
import { dataCarousel } from "../../components/Carousel/dataCarousel";
import { fakeDataCompanyProduct } from "../../components/Products/dataProducts";
import { fakeDataBestSeller } from "../../components/Products/dataProducts";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BestSeller from "../../components/Products/BestSeller/CardBestSeller";
import CompanyProduct from "../../components/Products/CompanyProduct/CompanyProduct";
import Contact from "../../components/Products/Contact/Contact";
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel slides={dataCarousel} />
      <BestSeller dataProducts={fakeDataBestSeller} />
      <CompanyProduct dataProducts={fakeDataCompanyProduct} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
