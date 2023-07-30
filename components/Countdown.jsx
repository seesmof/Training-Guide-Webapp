import React, { useEffect, useState } from "react";

const Countdown = ({ seconds }) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60);
  const secondsRemaining = time % 60;

  return (
    <>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining}
    </>
  );
};

export default Countdown;
