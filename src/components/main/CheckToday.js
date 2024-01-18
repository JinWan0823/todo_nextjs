export default function CheckToday({ goalCount }) {
  return (
    <div className="w-[calc(100%-10px)] p-3 bg-[#fff] mx-auto rounded-[14px] flex justify-between text-sm font-bold absolute top-[10px] left-[50%] translate-x-[-50%]">
      <p>오늘 목표까지 0% </p>
      <p>0/{goalCount > 0 ? goalCount : 0}</p>
    </div>
  );
}
