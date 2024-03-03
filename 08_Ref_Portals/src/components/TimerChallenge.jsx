import { useState, useRef } from "react";
import ResultModel from "./ResultModel.jsx";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    const targetTimeInMS = targetTime * 1000;

    const [remainingTime, setRemainingTime] = useState(targetTimeInMS);
    const isTimerActive = remainingTime > 0 && remainingTime < targetTimeInMS;
    if (remainingTime <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setRemainingTime(targetTimeInMS);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModel ref={dialog} result="lost"
                targetTime={targetTime} remainingTime={remainingTime}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={isTimerActive ? handleStop : handleStart}>
                        {isTimerActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={isTimerActive ? 'active' : undefined}>
                    {isTimerActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}