import { changeValueCount } from "@/states";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function CheckToday() {
  const [countList, setCountList] = useState({ goal: 0, total: 0 });
  const [percent, setPercent] = useState(0);
  const date = new Date();
  const today = date.getDate();
  const month = date.getMonth() + 1;

  const refresh = useRecoilValue(changeValueCount);

  const getTodayList = async () => {
    try {
      const data = await fetch(
        `http://localhost:9999/todolist?month=${month}&date=${today}`
      );
      const response = await data.json();

      if (response[0]) {
        const list = response[0].content;
        const filterSuccess = list.filter((v) => v.success);
        const count = {
          goal: filterSuccess.length,
          total: list.length,
        };

        const percent =
          count.goal === 0 ? 0 : Math.round((count.goal / count.total) * 100);

        setCountList(count);
        setPercent(percent);
      } else {
        setCountList({ goal: 0, total: 0 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodayList();
  }, [refresh]);

  return (
    <div className="w-[calc(100%-16px)] p-3  z-[50] mx-auto  flex justify-between text-sm font-bold absolute top-[20px] left-[50%] translate-x-[-50%] glass text-[#fff]">
      <p>오늘의 진행률 {percent}% </p>
      <p>
        {countList.goal}/{countList.total}
      </p>
    </div>
  );
}
