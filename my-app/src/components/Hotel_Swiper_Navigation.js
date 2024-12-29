import React from 'react';
import {useSwiper} from "swiper/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

const HotelSwiperNavigation = () => {
  const swiper = useSwiper()
  return (
    <div className="swiper-nav-btns">
      <FontAwesomeIcon onClick={()=> swiper.slidePrev()} className="prev-button" icon={faArrowLeft}/>
      <FontAwesomeIcon onClick={()=> swiper.slideNext()}  className="next-button" icon={faArrowRight}/>

    </div>
  );
};

export default HotelSwiperNavigation;
