import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "../product/product.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import { Images, NameSpecifications, Specifications } from "./dataProduct";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <Navbar />
      {/* <div className="container flex-row justify-between my-20 p-5 md:flex-col"> */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 my-20 p-5 items-center justify-center">
        <div className="w-full lg:w-1/2">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {Images.map((val, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={val}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="w-full flex justify-center my-3">
            {Images.map((val, index) => {
              return (
                <div className="w-1/5 " key={index}>
                  <img className="px-2" src={val} alt="" />
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link to="/cart">
              <button className="border border-[rgb(22,69,155)] mx-2 py-2 px-3 text-[rgb(22,69,155)] font-bold bg-[rgba(250,252,255,0.9)] hover:bg-[rgb(22,69,155)] hover:text-white">
                Thêm vào Giỏ
              </button>
            </Link>
            <Link to="/pay">
              <button className="border border-[rgb(22,69,155)] mx-2 py-2 px-3 text-white font-bold bg-[rgba(22,69,155,0.82)] hover:bg-[rgb(22,69,155)]">
                Đặt Hàng
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          {NameSpecifications.map((value, index) => {
            return (
              <h1 className="my-3 font-bold text-2xl" key={index}>
                {value.name}
              </h1>
            );
          })}
          <ul>
            <li>✔ Bảo hành chính hãng 18 tháng.</li>
            <li>✔ Hỗ trợ đổi mới trong 7 ngày.</li>
            <li>✔ Hàng chính hãng.</li>
          </ul>
          <h2 className="my-3 font-bold text-lg">Thông số kỹ thuật: </h2>
          <tbody className="w-full">
            {Specifications.map((value, index) => {
              return (
                <tr key={index}>
                  <td className="border border-[#eeeeee] bg-stone-100 p-2 w-1/4">
                    {value.title}
                  </td>
                  <td className="border border-[#eeeeee] bg-stone-50 p-2 w-3/4">
                    {value.infor}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
