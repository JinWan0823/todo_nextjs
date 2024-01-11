"use client";
import CalendarWrap from "@/components/Calendar/CalendarWrap";
import WriteWrap from "@/components/Write/WriteWrap";
import { useState } from "react";

export default function Home() {
  const [viewSection, setViewSection] = useState(true);

  const nowMonth = new Date().getMonth() + 1;
  const [selectMonth, setSelectMonth] = useState(nowMonth);
  const today = new Date();
  const [todayDate, setTodayDate] = useState(today.getDate());

  const [monthData, setMonthData] = useState([]);

  const handleViewSection = async () => {
    setViewSection((prev) => !prev);
  };

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:9999/todolist");
      const data = await response.json();
      const filteredTodo = await data.filter(
        (item) => item.month === selectMonth
      );
      setMonthData(filteredTodo);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  return (
    <>
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
