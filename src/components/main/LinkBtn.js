import { SlPencil } from 'react-icons/sl';
import { IoReturnUpBack } from 'react-icons/io5';

export default function WriteBtn({ icon, setViewSection }) {
  return (
    <button
      className="w-[30px] h-[30px] rounded-[6px] shadow-lg bg-red-400 text-[#fff] flex-center cursor-pointer mr-[4px] text-md"
      onClick={() => {
        setViewSection((prev) => !prev);
      }}
    >
      {icon === 'back' ? <IoReturnUpBack /> : <SlPencil />}
    </button>
  );
}
