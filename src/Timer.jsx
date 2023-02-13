// Timer.jsx

import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "March, 10, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-row" role="timer">
            <div className="">
                <div className="flex-row flex">
                    <p id="day">{days < 10 ? "0" + days : days}</p>
                    <span>&nbsp;:&nbsp;</span>
                </div>
            </div>
            <div className="">
                <div className="flex-row flex">
                    <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
                    <span>&nbsp;:&nbsp;</span>
                </div>
            </div>
            <div className="">
                <div className="flex-row flex">
                    <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
                    <span>&nbsp;:&nbsp;</span>
                </div>
            </div>
            <div className="">
                <div className="flex-row flex">
                    <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
                </div>
            </div>
        </div>
    );
};

export default Timer;
