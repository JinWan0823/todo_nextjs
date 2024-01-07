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
      <div className="relative w-[80px] p-[8px] rounded-[12px] bg-[#fff] shadow-lg cursor-pointer select-box text-sm" onClick={handleToggleOption}>
        <label>{selectMonth}월</label>
        <ul className={`z-50 bg-[#fff] max-h-[150px] overflow-y-auto rounded-[12px] absolute top-[30px] left-0 w-full overflow-hidden max-h-screen ${showOption ? '' : 'hidden'}`}>
          {opt.map((month)=>(
             <li key={month} value={month} className="p-[8px]" onClick={(e)=>setSelectMonth(e.target.value)}>{month}</li>
          ))}
        </ul>
      </div>
    </>
  );
}