import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function DatePicker({
  setOpenPicker,
  todayDate,
  selectMonth,
  setSelectMonth,
  setTodayDate,
}) {
  const nowDate = new Date();
  const [pickerMonth, setPickerMonth] = useState(selectMonth);

  const handlePrevMonth = () => {
    if (pickerMonth === 1) return;

    setPickerMonth((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    if (pickerMonth === 12) return;

    setPickerMonth((prev) => prev + 1);
  };

  const handleDateClick = (date) => {
    setSelectMonth(pickerMonth);
    setTodayDate(date);
    setOpenPicker(false);
  };

  const renderCalendarBody = () => {
    const pickerDate = new Date();
    pickerDate.setUTCFullYear(2024, pickerMonth - 1, 1);
    const currentMonth = pickerDate.getMonth();
    const firstDay = pickerDate.getDay();
    const lastDate = new Date(
      pickerDate.getFullYear(),
      currentMonth + 1,
      0
    ).getDate();

    const calendarItems = [];

    for (let i = 0; i < firstDay; i++) {
      calendarItems.push(<div key={`prev_${i}`} className="prev_date"></div>);
    }

    for (let i = 1; i <= lastDate; i++) {
      const isToday = nowDate.getMonth() + 1 && i === nowDate.getDate();
      const isSunday = (firstDay + i - 1) % 7 === 0;

      calendarItems.push(
        <div
          key={i}
          className={`date ${isToday ? "today" : ""} ${
            isSunday ? "sunday" : ""
          }`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }

    const limitDay = firstDay + lastDate;
    const nextDay = Math.ceil(limitDay / 7) * 7;
    for (let i = 1; i <= nextDay - limitDay; i++) {
      calendarItems.push(
        <div key={`next_${i}`} className="next_month_date"></div>
      );
    }

    return calendarItems;
  };

  useEffect(() => {
    renderCalendarBody();
  }, [pickerMonth]);
  return (
    <div className="w-full h-full center-absolute flex-center bg-[#000000ab] z-50">
      <div className="w-[calc(100%-16px)] bg-[#fff] rounded-[8px] overflow-hidden">
        <div className="bg-[#7366dd] p-[8px] text-[#fff] text-center font-bold flex justify-between items-center">
          <button onClick={() => handlePrevMonth()}>
            <FaChevronLeft />
          </button>
          <span>{pickerMonth}월</span>
          <button onClick={() => handleNextMonth()}>
            <FaChevronRight />
          </button>
        </div>
        <div className="calendar p-[2px]">
          <div className="calendar_head mt-[10px] grid grid-cols-7 text-center text-[#bbbabc]">
            <div>SUN</div>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
          </div>
          <div
            id="calendar"
            className="calendar_body grid grid-cols-7 text-center"
          >
            {renderCalendarBody()}
          </div>
        </div>

        <button
          onClick={() => {
            setOpenPicker((prev) => !prev);
          }}
          className="block text-center bg-[#7366dd] w-[calc(100%-20px)] mx-auto mb-[10px] font-bold text-[#fff] p-[8px]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
