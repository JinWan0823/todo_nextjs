import Image from "next/image";
import { WiDayCloudy } from "react-icons/wi";
import Clock from "./Clock";

export default function WeatherInfo({ weatherInfo }) {
  const returnTemp = (degree) => {
    return (degree - 273.15).toFixed(0);
  };

  const date = new Date();

  return (
    <div className="z-[10] glass w-[calc(100%-16px)] p-[10px] font-bold text-[#fff] flex justify-between items-stretch">
      <div className="left">
        <div className="flex items-center">
          <WiDayCloudy className="text-[30px] mr-[4px]" />
          <p>{weatherInfo.weather[0].main}</p>
        </div>
        <p className="temp text-[40px] relative inline-block mt-[14px]">
          {returnTemp(weatherInfo.main.temp)}
        </p>
      </div>
      <div className="right">
        <Clock />
        <div className="pl-[6px]">
          <p className="mt-[10px] mb-[4px]">
            {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
          </p>
          <p>{weatherInfo.name}</p>
        </div>
      </div>
    </div>
  );
}
