export default function CardToday({ month, day }) {
  return (
    <div className="bg-red-200 text-[#fff] py-[8px] px-[20px] text-center font-bold">
      <span>
        {month}.{day}
      </span>
    </div>
  );
}
