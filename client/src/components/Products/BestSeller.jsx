import React from "react";
import { dataProducts } from './dataProducts'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./products.css";

import { Grid, Pagination } from "swiper";

const BestSeller = () => {
    return (
        <>
            <h1 className="text-lg md:md-4 md:text-5xl text-center mb-1">Best Seller</h1>
            <Swiper
                slidesPerView={4}
                pagination={{
                    clickable: true,
                }}
                // grid={
                //     {
                //         row: 1,
                //     }
                // }
                spaceBetween={30}
                modules={[Grid, Pagination]}
                className='mySwiperx '
            >
                {
                    dataProducts.map((pro, idx) => {
                        return (
                            <SwiperSlide key={idx} className="flex-col hover:">
                                <img src={pro.image} alt="best seller" />
                                <p className="md:text-xl text-[0.4rem] text-[#FFDEAD]">New</p>
                                <p className="md:text-3xl text-[0.7rem] font-bold">{pro.title}</p>
                                <h1 className=" md:text-3xl text-[0.5rem]">{pro.description}</h1>
                                <h2 className="md:text-xl text-[0.5rem]">From {pro.price}</h2>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}
export default BestSeller;