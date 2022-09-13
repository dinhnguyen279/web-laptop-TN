import React, { useState } from 'react'
// import  Carousel1  from '../../assets/images/Carousel1.jpg';
// import  Carousel2  from '../../assets/images/Carousel2.jpg';
// import  Carousel3  from '../../assets/images/Carousel3.jpg';
// import  Carousel4  from '../../assets/images/Carousel4.jpg';
import '../Carousel/index.css'
import { dataCarousel } from './dataCarousel'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

export const Carousel = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        
    }
    console.log(current);
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
  return (
      <section className='relative h-[100vh] w-full flex justify-center items-start '>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} className="left-arrow text-white border-2 rounded-full hover:bg-[#45aece] absolute top-[20%] left-[20%] text-5xl z-10 cursor-pointer select-none " onClick={()=>prevSlide()}/>
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="right-arrow text-white border-2 rounded-full hover:bg-[#45aece] absolute top-[20%] right-[20%] text-5xl z-10 cursor-pointer select-none" onClick={()=>nextSlide()}/>
              {dataCarousel.map((arr, idx) => {
                  return (
                      <div key={idx} className={idx === current ? ' relative h-[10vh] flex justify-center items-start opacity-100 duration-1000' : 'relative h-[100vh] flex justify-center items-start opacity-0 duration-1000 ease-in-out'}>
                          {idx === current && (
                              <img src={arr.image} alt="images" className="w-[60vw] h-[50vh] rounded-lg" />
                          )}
                      </div>
                  )
              })}
      </section>
  )
}
