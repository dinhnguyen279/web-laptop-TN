import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  slides: string[];
}

const Carousel = ({ slides }: Props) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     nextSlide();
  //   }, 3000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="relative flex items-start mt-20">
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        className="left-arrow text-white border-2 rounded-full hover:bg-[#45aece] absolute top-[50%] -translate-y-[50%] left-[5%]  md:text-5xl z-10 cursor-pointer"
        onClick={() => prevSlide()}
      />
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        className="right-arrow text-white border-2 rounded-full hover:bg-[#45aece] absolute top-[50%] -translate-y-[50%]  right-[5%]  md:text-5xl z-10 cursor-pointer"
        onClick={() => nextSlide()}
      />
      {slides.map((arr, idx) => {
        return (
          <div
            key={idx}
            className={
              idx === current
                ? "relative flex h-full justify-center items-start transition-all duration-1000 ease-linear"
                : "relative h-full flex justify-center items-start duration-200 transition-all ease-in-out "
            }
          >
            {idx === current && (
              <img
                src={arr}
                alt="images"
                className="w-[100%] h-[100%] object-cover rounded-lg"
              />
            )}
          </div>
        );
      })}
      {/* <a
        href="#pro"
        className="absolute opacity-90 top-[70%] left-[20%] uppercase font-medium border-4 text-gray-50 bg-black hover:no-underline hover:text-gray-300 rounded-md px-4 py-2 md:text-3xl"
      >
        Tìm hiểu thêm
      </a> */}
    </section>
  );
};
export default Carousel;
