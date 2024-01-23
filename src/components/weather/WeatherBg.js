import Image from "next/image";

export default function WeatherBg({ weather }) {
  const getCurrentHour = () => {
    return new Date().getHours();
  };

  const getImagePath = () => {
    const currentHour = getCurrentHour();

    switch (true) {
      case currentHour >= 6 && currentHour < 17:
        return "/morning.png";
      case currentHour >= 17 && currentHour < 20:
        return "/sunset.png";
      default:
        return "/night.png";
    }
  };

  const imagePath = getImagePath();

  return (
    <div
      className={`absolute w-full h-full top-0 left-0 z-[1] ${weather} overflow-hidden`}
    >
      <Image
        src={imagePath}
        alt=""
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
