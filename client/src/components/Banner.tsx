import React from "react";
import banner from "../assets/images/1.jpg";
const Banner = () => {
  return (
    <div className="hover:scale-105 transition-all ease-linear duration-1000">
      <img src={banner} alt="" className="w-[100%] h-[100%] object-cover" />
    </div>
  );
};

export default Banner;
