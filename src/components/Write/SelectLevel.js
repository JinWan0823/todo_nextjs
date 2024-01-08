'use client';
import { useState } from 'react';

export default function SelectLevel({ level, setLevel }) {
  const opt = [
    { importance: 'Easy', color: 'green' },
    { importance: 'Normal', color: 'yellow' },
    { importance: 'Important', color: 'red' },
  ];
  const [showOption, setShowOption] = useState(false);

  const handleToggleOption = () => {
    setShowOption((prev) => !prev);
  };

  return (
    <>
      <div
        className="mt-[4px] relative w-[120px] p-[8px] rounded-[4px] bg-[#fff] cursor-pointer point-border select-box text-sm"
        onClick={handleToggleOption}
      >
        <label className={`cursor-pointer importance ${level}`}>{level}</label>
        <ul
          className={`z-50 bg-[#fff] max-h-[150px] overflow-y-auto  absolute top-[30px] left-0 w-full ${
            showOption ? '' : 'hidden'
          } point-border`}
        >
          {opt.map((level, index) => (
            <li
              key={index}
              value={level.importance}
              className={`importance ${level.importance} p-[8px] `}
              onClick={(e) => {
                setLevel(e.target.innerHTML);
                console.log(e);
              }}
            >
              {level.importance}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
