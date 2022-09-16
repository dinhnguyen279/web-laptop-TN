import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { dataCarousel } from "../../components/Carousel/dataCarousel";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BestSeller from "../../components/Products/BestSeller";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel slides={dataCarousel} />
      <BestSeller />
      <Footer />
    </div>
  );
};

export default Home;
