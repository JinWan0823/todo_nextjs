"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Card from "../main/Card";
import { useEffect, useState } from 'react';

export default function CalendarWrap(){
  const [lastDate,setLastDate] = useState(0);
  const [selectMonth, setSelectMonth] = useState(0);


  useEffect(()=>{
    const date = new Date();
    const month = date.getMonth() + 1;
    date.setMonth(month,1);
    const last = date.setDate(date.getDate() -1);

    setLastDate(last)
    setSelectMonth(month)
  },[])

  const renderSwiperSlided = () => {
    const slides = [];

    for(let i = 1; i <= lastDate ; i++){
      slides.push(
        <SwiperSlide key={i}><Card /></SwiperSlide>
      )
    }
  }


  return (
     <>
      <div className='swiper-container mt-[20px]'>
          <Swiper
          spaceBetween={50}
          slidesPerView={1}
        >
          {renderSwiperSlided()}
        </Swiper>
      </div>
     </>


  )
}
