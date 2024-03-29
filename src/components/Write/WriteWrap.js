"use client";
import CardToday from "../Calendar/CardToday";
import LinkBtn from "../main/LinkBtn";
import WriteForm from "./WriteForm";
import { useRecoilState } from "recoil";
import { changeValueCount } from "@/states";

export default function WriteWrap({
  handleViewSection,
  todayDate,
  selectMonth,
  setSelectMonth,
  getData,
}) {
  const [change, setChange] = useRecoilState(changeValueCount);

  const createData = async (content) => {
    try {
      const data = await fetch(
        `https://uneven-pickle-verse.glitch.me/todolist`
      );
      const response = await data.json();

      const filteredData = response.find(
        (item) => item.month === selectMonth && item.date === todayDate
      );

      if (!filteredData) {
        // 데이터가 없는경우 post요청으로 생성
        const writeData = await fetch(
          "https://uneven-pickle-verse.glitch.me/todolist",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              year: 24,
              month: selectMonth,
              date: todayDate,
              content: [
                {
                  todo: content,
                  success: false,
                },
              ],
              success: false,
            }),
          }
        );
      } else {
        const updateData = [
          ...filteredData.content,
          { todo: content, success: false },
        ];
        const writeData = await fetch(
          `https://uneven-pickle-verse.glitch.me/todolist/${filteredData.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              year: filteredData.year,
              month: filteredData.month,
              date: filteredData.date,
              content: [...updateData],
              success: false,
            }),
          }
        );
      }

      await getData();
      setChange((prev) => !prev);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  return (
    <div className="w-[calc(100%-16px)] mx-auto">
      <div className="mt-[10px]">
        <LinkBtn handleViewSection={handleViewSection} icon={"back"} />
      </div>
      <div className="bg-[#fff] w-full min-h-[400px] max-h-[400px] overflow-y-auto mx-auto rounded-[4px] relative shadow-lg mt-[4px] solid-border">
        <CardToday month={selectMonth} day={todayDate} />
        <WriteForm
          selectMonth={selectMonth}
          day={todayDate}
          handleViewSection={handleViewSection}
          createData={createData}
          setSelectMonth={setSelectMonth}
        />
      </div>
    </div>
  );
}
