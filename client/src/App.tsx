import React from "react";
import { Carousel } from "./components/Carousel/Carousel";
import { Navbar } from "./components/Navbar/Navbar";
import { dataCarousel } from "./components/Carousel/dataCarousel";
function App() {
  return (
    <>
      <Navbar />
      <Carousel slides={dataCarousel} />
    </>
  );
}

export default App;
