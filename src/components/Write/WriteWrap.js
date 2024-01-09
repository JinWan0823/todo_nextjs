'use client';
import CardToday from '../Calendar/CardToday';
import LinkBtn from '../main/LinkBtn';
import SelectLevel from './SelectLevel';
import { useEffect, useState } from 'react';
import WriteForm from './WriteForm';

export default function WriteWrap({
  setViewSection,
  today,
  todayDate,
  setTodayDate,
  nowMonth,
  selectMonth,
  setSelectMonth,
}) {
  const getData = async (content) => {
    console.log(content);
    try {
      const data = await fetch(`http://localhost:9999/todolist`);
      const response = await data.json();

      const filteredData = response.find((item) => item.month === selectMonth && item.date === todayDate);
      console.log(filteredData);

      if (!filteredData) {
        // 데이터가 없는경우 post요청으로 생성
        const writeData = await fetch('http://localhost:9999/todolist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            year: 24,
            month: selectMonth,
            date: todayDate,
            content: [content],
            success: false,
          }),
        });
        console.log(writeData);
      } else {
        // 기존에 데이터가 있는경우 put으로 데이터 추가
        console.log(filteredData);
        return;
      }
    } catch (error) {
      console.error('Data Fetching Error : ', error);
    }
  };

  return (
    <div className="w-[calc(100%-10px)] mx-auto">
      <div className="mt-[10px]">
        <LinkBtn setViewSection={setViewSection} icon={'back'} />
      </div>
      <div className="bg-[#fff] w-full min-h-[400px] max-h-[400px] overflow-y-auto mx-auto rounded-[10px] relative shadow-lg mt-[4px] solid-border">
        <CardToday month={selectMonth} day={todayDate} />
        <WriteForm month={selectMonth} day={todayDate} setViewSection={setViewSection} getData={getData} />
      </div>
    </div>
  );
}
