import { useState, useEffect } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <div>
      <h1>Saniyəölçən</h1>
      <p>{time}s</p>
      <button onClick={toggleTimer}>
        {isRunning ? 'Dayandır' : 'Başla'}
      </button>
    </div>
  );
}

export default Stopwatch;
