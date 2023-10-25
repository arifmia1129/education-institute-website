/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CountDown = ({ monthDay }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-${monthDay}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null; // Returning null if no content to render
    }

    return (
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="border p-2 md:p-5 my-5 rounded-lg">
      <div>
        <h1 className="font-bold text-center text-xl text-red-500">
          আবেদনের সময়সীমা
        </h1>
        <h1 className="font-bold text-center text-4xl text-primary">
          {timerComponents.length ? (
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max place-items-center place-content-center">
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.days }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.hours }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.minutes }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": timeLeft.seconds }}></span>
                </span>
                sec
              </div>
            </div>
          ) : (
            <span>সময় শেষ</span>
          )}
        </h1>
      </div>
    </div>
  );
};

export default CountDown;
