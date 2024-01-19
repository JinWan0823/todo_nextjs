"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../main/Card";
import { useEffect, useState } from "react";
import BtnWrap from "../main/BtnWrap";
import LinkBtn from "../main/LinkBtn";
import SelectMenu from "./SelectMenu";
import SwiperCore from "swiper";
import DatePicker from "./DataPicker";

export default function CalendarWrap({
  handleViewSection,
  today,
  todayDate,
  setTodayDate,
  nowMonth,
  selectMonth,
  setSelectMonth,
  monthData,
  getData,
  countGoalList,
  setCountGoalList,
}) {
  const [openPicker, setOpenPicker] = useState(false);

  useEffect(() => {
    getData();
  }, [selectMonth]);

  useEffect(() => {
    const swiper = new SwiperCore(".swiper-core", {
      slidesPerView: 1,
      spaceBetween: 50,
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
    setSelectMonth(nowMonth);
    setTodayDate(today.getDate());
  };

  return (
    <>
      {openPicker && (
        <DatePicker
          setSelectMonth={setSelectMonth}
          setTodayDate={setTodayDate}
          selectMonth={selectMonth}
          todayDate={todayDate}
          setOpenPicker={setOpenPicker}
        />
      )}
      <div className="swiper-container w-[calc(100%-10px)] mx-auto">
        <div className="flex justify-between items-center mt-[10px]">
          <div className="flex">
            <LinkBtn
              handleViewSection={handleViewSection}
              setTodayDate={setTodayDate}
            />
            <SelectMenu
              setSelectMonth={setSelectMonth}
              selectMonth={selectMonth}
            />
          </div>
          <BtnWrap
            handleRefreshCalendar={handleRefreshCalendar}
            setOpenPicker={setOpenPicker}
          />
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="swiper-core"
          onSlideChange={(swiper) => {
            const newTodayDate = swiper.realIndex + 1;
            setTodayDate(newTodayDate);
          }}
        >
          {daysInMonth.map((day, index) => {
            const dayData = monthData.find((item) => item.date === day);
            return (
              <SwiperSlide key={index} className={`Day${index + 1}`}>
                <Card
                  item={dayData || {}}
                  month={selectMonth}
                  day={index + 1}
                  countGoalList={countGoalList}
                  setCountGoalList={setCountGoalList}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
