import React from "react";
import { fakeDataBestSeller } from '../dataProducts'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../Products/products.css";

import { Grid, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const BestSeller = (Products) => {
    return (
        <div className="my-5 md:my-5" id="pro">
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
                spaceBetween={30}
                modules={[Grid, Pagination, Navigation]}
                className='mySwiper sm:px-5 px-0'
            >
                {
                    fakeDataBestSeller.map((pro, idx) => {
                        return (
                            <SwiperSlide key={idx} className="flex-col">
                                <Link to="/viewproduct" className="hover:text-black hover:no-underline">
                                    <img src={pro.image} alt="best seller" />
                                    <p className="md:text-xl text-[0.4rem] text-[#FFDEAD]">New</p>
                                    <p className="md:text-3xl text-[0.7rem] font-bold">{pro.title}</p>
                                    <h1 className=" md:text-3xl text-[0.5rem]">{pro.description}</h1>
                                    <h2 className="md:text-xl text-[0.5rem]">From {pro.price}</h2>
                                </Link>
                            </SwiperSlide>


                        )
                    })
                }
            </Swiper>
        </div >
    );
}
export default BestSeller;