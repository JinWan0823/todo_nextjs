import { useEffect, useState } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <p className="text-[40px]">{currentTime}</p>;
}
