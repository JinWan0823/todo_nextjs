import Image from "next/image";
import {
  TiWeatherSunny,
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherWindy,
  TiWeatherNight,
} from "react-icons/ti";
import Clock from "./Clock";

export default function WeatherInfo({ weatherInfo }) {
  const returnTemp = (degree) => {
    return (degree - 273.15).toFixed(0);
  };

  const date = new Date();
  const getCurrentHour = () => {
    return date.getHours();
  };

  const weatherIcon = () => {
    const currentHour = getCurrentHour();
    const weather = weatherInfo.weather[0].main;

    switch (true) {
      case weather === "Clear" && currentHour > 20:
        return <TiWeatherNight className="text-[26px] mr-[2px]" />;
      case weather === "Clear":
        return <TiWeatherSunny className="text-[26px] mr-[2px]" />;
      case weather === "Wind":
        return <TiWeatherWindy className="text-[26px] mr-[2px]" />;
      case weather === "Clouds":
        return <TiWeatherCloudy className="text-[26px] mr-[2px]" />;
      case weather === "Rain":
        return <TiWeatherDownpour className="text-[26px] mr-[2px]" />;
      default:
        return <TiWeatherSnow className="text-[26px] mr-[2px]" />;
    }
  };

  const renderIcon = weatherIcon();

  return (
    <div className="z-[10] glass w-[calc(100%-16px)] p-[10px] font-bold text-[#fff] flex justify-between items-stretch">
      <div className="left">
        <div className="flex items-center">
          {renderIcon}
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
