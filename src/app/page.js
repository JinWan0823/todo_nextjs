'use client';
import CalendarWrap from '@/components/Calendar/CalendarWrap';
import WriteWrap from '@/components/Write/WriteWrap';
import { useState } from 'react';

export default function Home() {
  const [viewSection, setViewSection] = useState(true);

  const nowMonth = new Date().getMonth() + 1;
  const [selectMonth, setSelectMonth] = useState(nowMonth);
  const today = new Date();
  const [todayDate, setTodayDate] = useState(today.getDate());

  return (
    <>
      {viewSection ? (
        <CalendarWrap
          setViewSection={setViewSection}
          today={today}
          todayDate={todayDate}
          setTodayDate={setTodayDate}
          nowMonth={nowMonth}
          selectMonth={selectMonth}
          setSelectMonth={setSelectMonth}
        />
      ) : (
        <WriteWrap
          setViewSection={setViewSection}
          today={today}
          todayDate={todayDate}
          setTodayDate={setTodayDate}
          nowMonth={nowMonth}
          selectMonth={selectMonth}
          setSelectMonth={setSelectMonth}
        />
      )}
    </>
  );
}
