'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../main/Card';
import { useEffect, useState } from 'react';
import BtnWrap from '../main/BtnWrap';
import LinkBtn from '../main/LinkBtn';
import SelectMenu from './SelectMenu';
import SwiperCore from 'swiper';

export default function CalendarWrap({
  setViewSection,
  today,
  todayDate,
  setTodayDate,
  nowMonth,
  selectMonth,
  setSelectMonth,
}) {
  const [monthData, setMonthData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:9999/todolist');
      const data = await response.json();
      const filteredTodo = await data.filter((item) => item.month === selectMonth);
      setMonthData(filteredTodo);
    } catch (error) {
      console.error('Data Fetching Error : ', error);
    }
  };

  useEffect(() => {
    getData();
    setTodayDate(1);
  }, [selectMonth]);

  useEffect(() => {
    const swiper = new SwiperCore('.swiper-core', {
      slidesPerView: 1,
      spaceBetween: 50,
      on: {
        init: (swiper) => {
          swiper.slideTo(todayDate - 1);
        },
        slideChange: (swiper) => {
          const newTodayDate = swiper.realIndex + 1;
          setTodayDate(newTodayDate);
        },
      },
    });
  }, [todayDate]);

  const daysInMonth = Array.from({ length: new Date(2024, selectMonth, 0).getDate() }, (_, index) => index + 1);

  const handleRefreshCalendar = () => {
    setSelectMonth(nowMonth);
    setTodayDate(today.getDate());
  };

  return (
    <>
      <div className="swiper-container w-[calc(100%-10px)] mx-auto">
        <div className="flex justify-between items-center mt-[10px]">
          <div className="flex">
            <LinkBtn setViewSection={setViewSection} setTodayDate={setTodayDate} />
            <SelectMenu setSelectMonth={setSelectMonth} selectMonth={selectMonth} />
          </div>
          <BtnWrap handleRefreshCalendar={handleRefreshCalendar} />
        </div>
        <Swiper spaceBetween={50} slidesPerView={1} className="swiper-core">
          {daysInMonth.map((day, index) => {
            const dayData = monthData.find((item) => item.date === day);
            return (
              <SwiperSlide key={index} className={`Day${index + 1}`}>
                <Card item={dayData || {}} month={selectMonth} day={index + 1} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
