import { useEffect, useState } from "react";
import WeatherBg from "./WeatherBg";
import { FaMapMarkerAlt } from "react-icons/fa";
import WeatherInfo from "./WeatherInfo";

export default function WeatherWrap() {
  const api = process.env.NEXT_PUBLIC_OPEN_WEATHER_API;

  const [city, setCity] = useState({ lat: "37.57", lon: "126.98" });
  const [weatherInfo, setWeatherInfo] = useState();
  const [agreeLocation, setAgreeLocation] = useState(false);

  const getCityInfo = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCity({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        getWeather();
      },
      () => {
        setCity({
          lat: 37.57,
          lon: 126.98,
        });
        getWeather();
      }
    );
  };

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${api}`
      );
      const data = await response.json();
      setWeatherInfo(data);
      console.log(data);
    } catch (error) {
      console.error("Data Fetching Error : ", error);
    }
  };

  useEffect(() => {
    getCityInfo();
  }, [agreeLocation]);

  return (
    <div className="w-full  flex-center relative py-[12px] pt-[62px]">
      {weatherInfo && <WeatherBg weather={weatherInfo.weather[0].main} />}
      {weatherInfo && <WeatherInfo weatherInfo={weatherInfo} />}
      <button
        onClick={() => setAgreeLocation((prev) => !prev)}
        className="absolute bottom-[10px] right-[10px] text-[#fff]"
      >
        <FaMapMarkerAlt />
      </button>
    </div>
  );
}
