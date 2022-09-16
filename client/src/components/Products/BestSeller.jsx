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
                    dataProducts.map((img, idx) => {
                        return (
                            <SwiperSlide ><img src={img.image} alt="" /></SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
export default BestSeller;