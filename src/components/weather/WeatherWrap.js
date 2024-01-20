import { useEffect, useState } from 'react';

export default function WeatherWrap() {
  const api = process.env.NEXT_PUBLIC_OPEN_WEATHER_API;

  const [city, setCity] = useState({ lat: '37.57', lon: '126.98' });
  const [weatherInfo, setWeatherInfo] = useState();
  const [agreeLocation, setAgreeLocation] = useState(false);

  const getCityInfo = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCity({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      () => {
        setCity({
          lat: 37.57,
          lon: 126.98,
        });
      }
    );
  };

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${api}`
    );
    const data = await response.json();
    setWeatherInfo(data);
    console.log(weatherInfo);
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   await getCityInfo();
    //   getWeather();
    // };

    // fetchData();
    getCityInfo();
    getWeather();
  }, []);

  return (
    <div className="w-full h-[210px] bg-red-300 flex-center">
      {/* <p>{weatherInfo.name}</p> */}
      <button onClick={() => setAgreeLocation((prev) => !prev)}>위치제공동의</button>
    </div>
  );
}
