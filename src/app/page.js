"use client";
import CalendarWrap from "@/components/Calendar/CalendarWrap";
import WriteWrap from "@/components/Write/WriteWrap";
import CheckToday from "@/components/main/CheckToday";
import WeatherWrap from "@/components/weather/WeatherWrap";
import { useState } from "react";

export default function Home() {
  const [viewSection, setViewSection] = useState(true);

  const nowMonth = new Date().getMonth() + 1;
  const [selectMonth, setSelectMonth] = useState(nowMonth);
  const today = new Date();
  const [todayDate, setTodayDate] = useState(today.getDate());

  const [monthData, setMonthData] = useState([]);
  const [countGoalList, setCountGoalList] = useState([]);

  const handleViewSection = async () => {
    setViewSection((prev) => !prev);
  };

  const getData = async () => {
    try {
      const response = await fetch(
        `https://uneven-pickle-verse.glitch.me/todolist?month=${selectMonth}`
      );
      const data = await response.json();
      setMonthData(data);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  return (
    <>
      <CheckToday />
      <WeatherWrap />
      {viewSection ? (
        <CalendarWrap
          handleViewSection={handleViewSection}
          today={today}
          todayDate={todayDate}
          setTodayDate={setTodayDate}
          nowMonth={nowMonth}
          selectMonth={selectMonth}
          setSelectMonth={setSelectMonth}
          viewSection={viewSection}
          monthData={monthData}
          getData={getData}
          countGoalList={countGoalList}
          setCountGoalList={setCountGoalList}
        />
      ) : (
        <WriteWrap
          handleViewSection={handleViewSection}
          today={today}
          todayDate={todayDate}
          setTodayDate={setTodayDate}
          nowMonth={nowMonth}
          selectMonth={selectMonth}
          setSelectMonth={setSelectMonth}
          getData={getData}
        />
      )}
    </>
  );
}
