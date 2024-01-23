import { SlPencil } from "react-icons/sl";
import { IoReturnUpBack } from "react-icons/io5";

export default function WriteBtn({ icon, handleViewSection }) {
  return (
    <button
      className="w-[30px] h-[30px] rounded-[6px] shadow-lg bg-[#3a7fea] text-[#fff] flex-center cursor-pointer mr-[4px] text-md"
      onClick={() => {
        handleViewSection();
      }}
    >
      {icon === "back" ? <IoReturnUpBack /> : <SlPencil />}
    </button>
  );
}
