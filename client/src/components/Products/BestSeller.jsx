import React from "react";
import { dataProducts } from './dataProducts'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./bestSeller.css";

import { Grid, Pagination } from "swiper";

const BestSeller = () => {
    return (
        <>
            <h1 className="text-5xl text-center mb-4">Best Seller</h1>
            <Swiper
                slidesPerView={4}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper grid "
            >
                {
                    dataProducts.map((val, idx) => {
                        return (
                            <SwiperSlide key={idx} className="flex-col hover:">
                                <img src={val.image} alt="best seller" />
                                <p className="md:text-xl text-[0.4rem] text-[#FFDEAD]">New</p>
                                <p className="md:text-3xl text-[0.7rem] font-bold">{val.title}</p>
                                <h1 className=" md:text-3xl text-[0.5rem]">{val.description}</h1>
                                <h2 className="md:text-xl text-[0.5rem]">From {val.price}</h2>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
export default BestSeller;