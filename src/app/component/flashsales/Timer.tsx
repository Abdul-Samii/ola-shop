'use client'
import React, { useEffect, useState } from "react"

const Timer = () => {

  const [countDown, setCountdown] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

  useEffect(() => {
    const countDownDate = new Date("Dec 1, 2023 10:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="bg-white md:bg-orange-500 rounded-sm w-8 h-8 flex justify-center items-center">{countDown.hours}</p>
      <p className="text-white md:text-orange-600 my-auto">:</p>
      <p className="bg-white md:bg-orange-500 rounded-sm w-8 h-8 flex justify-center items-center">{countDown.minutes}</p>
      <p className="text-white md:text-orange-600 my-auto">:</p>
      <p className="bg-white md:bg-orange-500 rounded-sm w-8 h-8 flex justify-center items-center">{countDown.seconds}</p>
    </>
  )
}
export default Timer;
