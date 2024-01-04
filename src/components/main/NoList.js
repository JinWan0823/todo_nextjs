import { CgSmileNone } from "react-icons/cg";

export default function NoList() {
  return (
    <li className="text-[#ddd] flex items-center justify-center flex-col center-absolute">
      <CgSmileNone className="text-lg" />
      <p className="text-md font-bold mt-[10px]">할 일을 추가해보세요.</p>
    </li>
  );
}
