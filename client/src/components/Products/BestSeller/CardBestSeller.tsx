import React from "react";
import { DataBestSeller } from "../dataProducts";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../Products/products.css";

import { Grid, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

interface Props {
  dataProducts: DataBestSeller[];
}
const BestSeller: React.FC<Props> = (dataProducts) => {
  const Products = dataProducts.dataProducts;

  return (
    <div className="my-5" id="pro">
      <div className="mb-4 text-black text-center">
        <h1 className="text-lg mb-2 md:mb-4 md:text-5xl">Best Seller</h1>
        <hr className="border-black border-2 m-auto w-14" />
      </div>

      <Swiper
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        spaceBetween={10}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper sm:px-5 px-0"
      >
        {Products.map((pro, idx) => {
          return (
            <SwiperSlide key={pro.id} className="flex-col">
              <Link to="/store" className="hover:text-black hover:no-underline">
                <img
                  src={pro.image}
                  alt="best seller"
                  className="w-[100%] h-[100%] object-cover"
                />
                <p className="md:text-xl text-[0.4rem] text-black">New</p>
                <p className="md:text-3xl text-[0.7rem] font-bold">
                  {pro.title}
                </p>
                <h1 className=" md:text-3xl text-[0.5rem]">
                  {pro.description}
                </h1>
                <h2 className="md:text-xl text-[0.5rem]">Chỉ từ {pro.price}</h2>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default BestSeller;
