import React from "react";
import Footer from "./components/footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import { dataCarousel } from "./components/Carousel/dataCarousel";
import BestSeller from "./pages/Products/BestSeller";

function App() {
  return (
    <>
      <Navbar />
      <Carousel slides={dataCarousel} />
      <BestSeller />
      <Footer />
    </>
  );
}

export default App;
