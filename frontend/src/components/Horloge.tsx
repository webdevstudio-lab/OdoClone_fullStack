import { Calendar, Clock10 } from "lucide-react";
import React, { useState, useEffect } from "react";

const Horloge: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const aujourdHui: Date = new Date();

  // Extraire les éléments de la date
  const jour: number = aujourdHui.getDate();
  const mois: number = aujourdHui.getMonth() + 1; // Les mois sont basés sur 0 (0 = janvier)
  const annee: number = aujourdHui.getFullYear();

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Pad with leading zeros if necessary
    const padZero = (num: number) => (num < 10 ? `0${num}` : num);

    return `${padZero(hours)}:${padZero(minutes)}`;
  };

  return (
    <>
      <div className="clock-container">
        <div className="clock font-bold space-x-2 flex-row flex">
          <div className="flex flex-row items-center">
            <Calendar className="mr-2 h-4 w-4" />{" "}
            <p>
              {jour}/{mois}/{annee}
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Clock10 className="mr-2 h-4 w-4" /> <p>{formatTime(time)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Horloge;
