import React, { useState } from 'react'
import { dataCarousel } from './dataCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    return (
        <section className='relative h-[290px] sm:h-[300px] md:h-[400px] lg:h-[700px] w-[100vw] flex items-start '>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="left-arrow text-white border-2 rounded-full hover:bg-[#45aece] absolute top-[45%] sm:top-[40%] md:top-[30%] lg:top-[50%]  left-[10%] md:left-[5%] md:text-5xl z-10 cursor-pointer select-none " onClick={() => prevSlide()} />
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="right-arrow text-white border-2 rounded-full hover:bg-[#45aece] absolute top-[45%] sm:top-[40%] md:top-[30%] lg:top-[50%]  right-[10%] md:right-[5%] md:text-5xl z-10 cursor-pointer select-none" onClick={() => nextSlide()} />
            {dataCarousel.map((arr, idx) => {
                return (
                    <div key={idx} className={idx === current ? 'relative flex h-[100vh] justify-center items-start opacity-100 duration-1000' : 'relative h-[100vh] flex justify-center items-start opacity-0 duration-1000 ease-in-out'}>
                        {idx === current && (
                            <img src={arr.image} alt="images" className="w-[100vw] h-[30vh] md:h-[40vh] lg:h-[70vh] rounded-lg" />
                        )}
                    </div>
                )
            })}
            <a href='#pro' className='absolute opacity-90 top-[60%] left-[20%] sm:top-[70%] md:top-[50%] lg:top-[80%] uppercase font-medium border-2 hover:bg-[#45aece] hover:text-white hover:no-underline text-[#45aece] rounded-md px-4 py-2 md:text-3xl'>Tìm hiểu thêm</a>
        </section>
    )
}
export default Carousel;