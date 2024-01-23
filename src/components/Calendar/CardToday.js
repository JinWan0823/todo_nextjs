export default function CardToday({ month, day }) {
  return (
    <div className="bg-[#7366dd] text-[#fff] py-[8px] px-[20px] text-center font-bold">
      <span>
        {month}.{day}
      </span>
    </div>
  );
}
