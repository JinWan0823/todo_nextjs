'use client';
import CardToday from '../Calendar/CardToday';
import LinkBtn from '../main/LinkBtn';
import SelectLevel from './SelectLevel';
import { useState } from 'react';
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
  return (
    <div className="w-[calc(100%-10px)] mx-auto">
      <div className="mt-[10px]">
        <LinkBtn setViewSection={setViewSection} icon={'back'} />
      </div>
      <div className="bg-[#fff] w-full min-h-[400px] max-h-[400px] overflow-y-auto mx-auto rounded-[10px] relative shadow-lg mt-[4px] solid-border">
        <CardToday month={selectMonth} day={todayDate} />
        <WriteForm month={selectMonth} day={todayDate} setViewSection={setViewSection} />
      </div>
    </div>
  );
}
