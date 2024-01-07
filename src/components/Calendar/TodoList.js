"use client";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export default function TodoList({ content, index, item }) {
  const handleDeleteList = async () => {
    try {
      const updatedContent = [...item.content]; // Create a copy of the content array

      if(updatedContent.length === 1) {
        const response = await fetch(`http://localhost:9999/todolist/${item.id}`,{
          method:"DELETE",
          headers : {
            "Content-Type" : "application/json",
          }
        })

        console.log(response);
      } else {
        updatedContent.splice(index, 1);

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
              content: updatedContent,
              success: item.success,
            }),
          }
        );
        console.log(response);
      }
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
        <h3 className="text-sm">{content}</h3>
      </div>
      <div className="w-[64px] flex text-[#fff]">
        <button className="small-button mr-[4px] bg-green-300">
          <FaCheck />
        </button>
        <button
          className="small-button bg-red-300 relative"
          onClick={() => handleDeleteList()}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </li>
  );
}
