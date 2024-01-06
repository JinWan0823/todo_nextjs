import Link from "next/link";
import { SlPencil } from "react-icons/sl";

export default function WriteBtn() {
  return (
    <Link
      href={"/"}
      className="w-[30px] h-[30px] rounded-[6px] shadow-lg bg-red-400 text-[#fff] flex-center cursor-pointer mr-[4px]"
    >
      <SlPencil className="text-md text-[#fff]" />
    </Link>
  );
}
