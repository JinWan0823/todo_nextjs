import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineRefresh } from "react-icons/md";

export default function BtnWrap({handleRefreshCalendar}) {
  return (
    <div className="flex  items-center text-[#666]">
      <div className="w-[30px] h-[30px] rounded-[6px] shadow-lg bg-[#9f9f9f] text-[#fff] flex-center cursor-pointer mr-[4px]" 
        onClick={()=>handleRefreshCalendar()}
      >
        <MdOutlineRefresh />
      </div>
      <div className="w-[30px] h-[30px] rounded-[6px] shadow-lg bg-[#9f9f9f] text-[#fff] flex-center cursor-pointer">
        <FaRegCalendarAlt />
      </div>
    </div>
  );
}
