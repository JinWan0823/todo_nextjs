"use client";
import { changeValueCount } from "@/states";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useRecoilState } from "recoil";

export default function TodoList({
  content,
  index,
  handleDeleteList,
  month,
  day,
}) {
  const [complete, setComplete] = useState(content.success);
  const [change, setChange] = useRecoilState(changeValueCount);

  const handleTodoSuccess = async () => {
    try {
      const response = await fetch(
        `http://localhost:9999/todolist?month=${month}&date=${day}`
      );
      const dataArray = await response.json();
      const data = Array.isArray(dataArray) ? dataArray[0] : dataArray;

      const updateSuccess = await data.content.map((item, i) => {
        if (i === index) {
          return { ...item, success: !complete };
        }
        return item;
      });

      const updateData = {
        ...data,
        content: updateSuccess,
      };

      const updateResponse = await fetch(
        `http://localhost:9999/todolist/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        }
      );

      setComplete((prev) => !prev);
      setChange((prev) => !prev);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  return (
    <li
      className="w-full py-[16px] px-[8px] border-[#dfdfdf] border-solid border-b-[1px] flex items-center justify-between"
      id={`Todolist` + index}
    >
      <div className="w-[calc(100%-70px)]">
        <h3 className="text-sm">{content.todo}</h3>
      </div>
      <div className="w-[64px] flex text-[#fff]">
        <button
          className={`small-button mr-[4px] ${
            complete ? "bg-[#3a7fea]" : "bg-gray-300"
          }`}
          onClick={() => handleTodoSuccess()}
        >
          <FaCheck />
        </button>
        <button
          className="small-button bg-red-400 relative"
          onClick={() => handleDeleteList(index)}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </li>
  );
}
