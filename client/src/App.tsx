import React from "react";
import Footer from "./components/footer/Footer";
import { Carousel } from "./components/Carousel/Carousel";
import { Navbar } from "./components/Navbar/Navbar";
import { dataCarousel } from "./components/Carousel/dataCarousel";
function App() {
  return (
    <>
      <Navbar />
      <Carousel slides={dataCarousel} />
      <Footer />
    </>
  );
}

export default App;
