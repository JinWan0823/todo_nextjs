"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../main/Card";
import { useEffect, useState } from "react";
import BtnWrap from "../main/BtnWrap";
import WriteBtn from "../main/WriteBtn";
import SelectMenu from "./SelectMenu";
import SwiperCore from 'swiper';

export default function CalendarWrap() {
  const nowMonth = new Date().getMonth()+1;
  const [selectMonth, setSelectMonth] = useState(nowMonth);
  const [monthData, setMonthData] = useState([]);
  const today = new Date()
  const [todayDate,setTodayDate] = useState(today.getDate());
  
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:9999/todolist");
      const data = await response.json();
      const filteredTodo = data.filter((item) => item.month === selectMonth);

      if(nowMonth === selectMonth) {
        setTodayDate(today.getDate());
      } else {
        setTodayDate(1);
      }

      setMonthData(filteredTodo);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  useEffect(() => {
    getData();
    console.log(todayDate)
  }, [selectMonth]);

  useEffect(() => {
    const swiper = new SwiperCore(".swiper-core", {
      slidesPerView: 1,
      spaceBetween:50,
      on: {
        init: (swiper) => {
          swiper.slideTo(todayDate - 1);
        },
      },
    });
  }, [todayDate]);


  const daysInMonth = Array.from(
    { length: new Date(2024, selectMonth, 0).getDate() },
    (_, index) => index + 1
  );

  const handleRefreshCalendar = () => {
    setTodayDate(today.getDate());
    setSelectMonth(nowMonth);
  }

  return (
    <>
      <div className="swiper-container w-[calc(100%-10px)] mx-auto">
        <div className="flex justify-between items-center mt-[10px]">
          <div className="flex">
            <WriteBtn />
            <SelectMenu setSelectMonth={setSelectMonth} selectMonth={selectMonth}/>
          </div>
          <BtnWrap handleRefreshCalendar={handleRefreshCalendar}/>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="swiper-core"
        >
          {daysInMonth.map((day, index) => {
            const dayData = monthData.find((item) => item.date === day);
            return (
              <SwiperSlide key={index} className={`Day${index + 1}`}>
                <Card
                  item={dayData || {}}
                  month={selectMonth}
                  day={index + 1}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
