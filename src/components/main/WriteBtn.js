import Link from "next/link";
import { SlPencil } from "react-icons/sl";

export default function WriteBtn() {
  return (
    <Link
      href={"/"}
      className="z-50 absolute bottom-2 left-auto w-[36px] h-[36px] rounded-[50%] bg-red-400 translate-x-[4px] flex items-center justify-center"
    >
      <SlPencil className="text-lg text-[#fff]" />
    </Link>
  );
}
