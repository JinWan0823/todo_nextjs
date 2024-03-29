import { useState } from "react";
import SelectLevel from "./SelectLevel";

export default function WriteForm({ handleViewSection, createData }) {
  const [level, setLevel] = useState("easy");
  const [title, setTitle] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createData(title);
        handleViewSection();
      }}
      className="py-[20px] px-[10px] flex flex-col text-sm"
    >
      <div>
        <p className="font-bold text-[#3a7fea]">중요도</p>
        <SelectLevel level={level} setLevel={setLevel} />
      </div>
      <div className="mt-[10px]">
        <p className="font-bold text-[#3a7fea]">제목</p>
        <input
          type="text"
          placeholder="일정을 입력해주세요."
          className="w-full mt-[4px] point-border p-[8px] rounded-[4px] placeholder:text-[#dfdfdf] outline-0"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-[#3a7fea] text-[#fff] rounded-[4px] py-[10px] mt-[20px] font-bold"
      >
        저장하기
      </button>
    </form>
  );
}
