'use client';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';

export default function TodoList({ item, content, index, handleDeleteList }) {
  console.log(content);
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
        <button className="small-button bg-red-300 relative" onClick={() => handleDeleteList(index)}>
          <FaRegTrashAlt />
        </button>
      </div>
    </li>
  );
}
