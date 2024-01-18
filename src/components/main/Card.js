import { useEffect, useState } from "react";
import CardToday from "../Calendar/CardToday";
import TodoList from "../Calendar/TodoList";
import NoList from "./NoList";

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
  const handleDeleteList = async (idxNum) => {
    try {
      if (todoData.length <= 1) {
        const response = await fetch(
          `http://localhost:9999/todolist/${item.id}`,
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
          `http://localhost:9999/todolist/${item.id}`,
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
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  return (
    <li className="bg-[#fff] w-full overflow-hidden mx-auto rounded-[10px] relative shadow-lg mt-[4px] solid-border">
      <CardToday month={month} day={day} />
      <ul className="min-h-[400px] max-h-[400px] overflow-y-auto " id="list">
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
