"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../main/Card";
import { useEffect, useState } from "react";
import BtnWrap from "../main/BtnWrap";
import WriteBtn from "../main/WriteBtn";

export default function CalendarWrap() {
  const [selectMonth, setSelectMonth] = useState(0);
  const [monthData, setMonthData] = useState([]);
  const todayDate = new Date().getDay();

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:9999/todolist");
      const data = await response.json();
      const filteredTodo = data.filter((item) => item.month === 1);

      setMonthData(filteredTodo);
      console.log(monthData);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  useEffect(() => {
    const date = new Date();
    const month = date.getMonth() + 1;

    setSelectMonth(month);
    getData();
  }, [selectMonth]);

  const daysInMonth = Array.from(
    { length: new Date(2024, selectMonth, 0).getDate() },
    (_, index) => index + 1
  );

  return (
    <>
      <div className="swiper-container w-[calc(100%-10px)] mx-auto">
        <div className="flex justify-between items-center mt-[10px]">
          <WriteBtn />
          <BtnWrap />
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          initialSlide={todayDate - 1}
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
