import React from 'react';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faBed, faHotel, faStar} from "@fortawesome/free-solid-svg-icons";
import hotel_1 from "../assets/hotel_1.png";
import hotel_2 from "../assets/hotel_2.png";
import hotel_3 from "../assets/hotel_3.png";
import hotel_4 from "../assets/hotel_4.jpg";
import hotel_5 from "../assets/hotel_5.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import arrow from "../assets/arrow.png"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Hotel_Swiper_Navigation from "./Hotel_Swiper_Navigation";

const Hotels_Swiper = () => {

  const hotels = [
    {
      rate: 4.5,
      name: 'Luxury Hotel',
      guests_number: 2,
      surface: '50m²',
      price: 1200,
      img: hotel_1,
    },
    {
      rate: 4.2,
      name: 'Premium Resort',
      guests_number: 3,
      surface: '70m²',
      price: 1400,
      img: hotel_2,
    },
    {
      rate: 4.8,
      name: 'Beachside Retreat',
      guests_number: 4,
      surface: '90m²',
      price: 2000,
      img: hotel_3,
    },
    {
      rate: 4.0,
      name: 'Mountain Lodge',
      guests_number: 2,
      surface: '60m²',
      price: 1300,
      img: hotel_4,
    },
    {
      rate: 4.7,
      name: 'Urban Getaway',
      guests_number: 2,
      surface: '45m²',
      price: 1100,
      img: hotel_5,
    },
  ];


  return (
    <>

      <Swiper
        className="hotel_swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={true}

        spaceBetween={30}
        slidesPerView={5}

        slidesPerGroup={1}

        breakpoints={{

          320: {slidesPerView: 1, spaceBetween: 50},
          768: {slidesPerView: 2, spaceBetween: 30},
          1024: {slidesPerView: 3, spaceBetween: 40},
          1280: {slidesPerView: 3, spaceBetween: 50},
          1440: {slidesPerView: 4, spaceBetween: 50},
        }}
      >
        {hotels.map((hotel, index) => (

          <SwiperSlide key={index}>
            <div className="card">
              <div className="card_img" style={{
                backgroundImage: `url(${hotel.img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}>
                <div className="card_img_rate">
                  <FontAwesomeIcon className="card_img_rate_icon" icon={faStar}/>
                  <p>{hotel.rate}</p>
                </div>
              </div>
              <div className="card_dsc">
                <div className="card_dsc_text">
                  <h5>{hotel.name}</h5>
                  <div className="card_dsc_text_parameters">
                    <span><FontAwesomeIcon icon={faBed}/><p>{hotel.guests_number} bedrooms</p></span>
                    <span><FontAwesomeIcon icon={faHotel}/><p>{hotel.surface}</p></span>
                  </div>
                </div>
                <div className="card_dsc_price">
                  <span>$ {hotel.price}</span>
                  <p>per month</p>
                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      <Hotel_Swiper_Navigation/>
      </Swiper>


    </>
  );
};

export default Hotels_Swiper;
