import { useEffect, useState } from "react";
import CardToday from "../Calendar/CardToday";
import TodoList from "../Calendar/TodoList";
import NoList from "./NoList";
import { useRecoilState } from "recoil";
import { changeValueCount } from "@/states";

export default function Card({
  item,
  month,
  day,
  countGoalList,
  setCountGoalList,
}) {
  useEffect(() => {
    if (item.content) {
      const cardData = item.content;
      setTodoData(cardData);
    }
  }, [item.content]);

  const [todoData, setTodoData] = useState();
  const [change, setChange] = useRecoilState(changeValueCount);

  const handleDeleteList = async (idxNum) => {
    try {
      if (todoData.length <= 1) {
        const response = await fetch(
          `https://uneven-pickle-verse.glitch.me/todolist/${item.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setTodoData();
      } else {
        const updatedTodoData = [...todoData];
        updatedTodoData.splice(idxNum, 1);
        setTodoData(updatedTodoData);

        const response = await fetch(
          `https://uneven-pickle-verse.glitch.me/todolist/${item.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: item.id,
              year: item.year,
              month: item.month,
              date: item.date,
              content: updatedTodoData,
              success: item.success,
            }),
          }
        );
      }
      setChange((prev) => !prev);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  return (
    <li className="bg-[#fff] mb-[4px] w-full overflow-hidden mx-auto rounded-[4px] relative shadow-card mt-[4px]">
      <CardToday month={month} day={day} />
      <ul
        className="min-h-[400px] max-h-[400px] overflow-y-auto border border-[#dfdfdf] "
        id="list"
      >
        {todoData && item.id ? (
          todoData.map((content, index) => (
            <TodoList
              key={index}
              content={content}
              index={index}
              handleDeleteList={handleDeleteList}
              setCountGoalList={setCountGoalList}
              countGoalList={countGoalList}
              month={month}
              day={day}
            ></TodoList>
          ))
        ) : (
          <NoList />
        )}
      </ul>
    </li>
  );
}
