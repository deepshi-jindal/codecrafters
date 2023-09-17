import React, { useState, useEffect } from 'react';
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const interval = setInterval(() => {
      const countDownDate = new Date('Sep 18, 2023 00:00:00').getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(d < 10 ? '0' + d : d.toString());
      setHours(h < 10 ? '0' + h : h.toString());
      setMinutes(m < 10 ? '0' + m : m.toString());
      setSeconds(s < 10 ? '0' + s : s.toString());

      if (distance < 0) {
        clearInterval(interval);
        setDays('00');
        setHours('00');
        setMinutes('00');
        setSeconds('00');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hot-deals">
      <div className="section-wrap">
        <div className="hot-deals-title">
          <h1>Big Offers Coming Soon...</h1>
        </div>

        <div className="countdown-wrap">
          <div className="timer">
            <div className="timer-bg"></div>
            <div className="counter">
              <h1 id="day">{days}</h1>
              <p>Days</p>
            </div>
          </div>

          <div className="timer">
            <div className="timer-bg"></div>
            <div className="counter">
              <h1 id="hour">{hours}</h1>
              <p>Hours</p>
            </div>
          </div>

          <div className="timer">
            <div className="timer-bg"></div>
            <div className="counter">
              <h1 id="minute">{minutes}</h1>
              <p>Minutes</p>
            </div>
          </div>

          <div className="timer">
            <div className="timer-bg"></div>
            <div className="counter">
              <h1 id="second">{seconds}</h1>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;