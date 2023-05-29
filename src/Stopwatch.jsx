import React, { useEffect, useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const Stopwatch = () => {
    const [timer, setTimer] = useState(0);
    const [isPaused, setPaused] = useState(true);
    useEffect(() => {
        let interval;
        if (!isPaused) {
            interval = setInterval(() => setTimer(timer + 1), 10);
        }
        return () => clearInterval(interval);
    }, [isPaused, timer]);
    const milisecond = timer % 100;
    const second = Math.floor((timer % 6000) / 100);
    const minute = Math.floor((timer % 360000) / 6000);
    const hour = Math.floor(timer / 360000);

    const startStop = () => {
        setPaused(!isPaused);
    }

    const reset = () => {
        setTimer(0);
    }
    return (
        <>
            <div>
                <p>
                    {hour}:{minute.toString().padStart(2, "0")}:
                    {second.toString().padStart(2, "0")}:
                    {milisecond.toString().padStart(2, "0")}
                </p>
                <div>
                    <button className onClick={startStop}>
                        {isPaused ? <i className="bi bi-play-fill"></i> : <i className="bi bi-pause-fill"></i>}
                    </button>
                    <button onClick={reset}>
                    Reset
                    </button>
                </div>
            </div>
        </>);
}
export default Stopwatch