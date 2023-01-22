import React, { useEffect, useState } from "react";

export const Clock = ({ timeZone, nameClock, removeClock, id }) => {
  const [time, setTime] = useState({});

  const rotate = () => {
    const date = new Date();
    let clock;
    const minutesDeg = date.getMinutes() * 6;
    const secondsDeg = date.getSeconds() * 6;
    const hourDeg = (date.getUTCHours() + timeZone * 1) * 15;
    console.log(id);
    return (clock = {
      minutesDeg: minutesDeg,
      secondsDeg: secondsDeg,
      hourDeg: hourDeg,
    });
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(rotate());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [nameClock]);

  const timeClock = {
    hour: { transform: `rotate(${time.hourDeg}deg)` },
    minutes: { transform: `rotate(${time.minutesDeg}deg)` },
    seconds: { transform: `rotate(${time.secondsDeg}deg)` },
  };

  return (
    <div className="clock-wrapper">
      <div className="clock">
        <div className="clock-title">{nameClock}</div>
        <div className="wrap">
          <span className="hour" style={timeClock.hour}></span>
          <span className="minute" style={timeClock.minutes}></span>
          <span className="second" style={timeClock.seconds}></span>
        </div>
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
      <span class="close" onClick={() => removeClock(id)}></span>
    </div>
  );
};

export default Clock;
