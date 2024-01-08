"use client";

import { useState } from "react";

export default function SelectMenu({ setSelectMonth, selectMonth }) {
  const opt = [1,2,3,4,5,6,7,8,9,10,11,12];
  const [showOption, setShowOption] = useState(false);

  const handleToggleOption = () => {
    setShowOption((prev) => !prev);
  };

  return (
    <>
      <div className="relative w-[80px] p-[8px] rounded-[4px] bg-[#fff] shadow-lg cursor-pointer point-border select-box text-sm" onClick={handleToggleOption}>
        <label className="cursor-pointer">{selectMonth}월</label>
        <ul className={`z-50 bg-[#fff] max-h-[150px] overflow-y-auto  absolute top-[30px] left-0 w-full ${showOption ? '' : 'hidden'} point-border`}>
          {opt.map((month)=>(
             <li key={month} value={month} className="p-[8px]" onClick={(e)=>setSelectMonth(e.target.value)}>{month}월</li>
          ))}
        </ul>
      </div>
    </>
  );
}