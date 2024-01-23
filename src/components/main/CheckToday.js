export default function CheckToday({ goalCount }) {
  return (
    <div className="w-[calc(100%-16px)] p-3  z-[50] mx-auto  flex justify-between text-sm font-bold absolute top-[20px] left-[50%] translate-x-[-50%] glass text-[#fff]">
      <p>오늘 목표까지 0% </p>
      <p>0/{goalCount > 0 ? goalCount : 0}</p>
    </div>
  );
}
