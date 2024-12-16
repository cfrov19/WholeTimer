import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      alert('Vaxt bitdi!');
      setIsRunning(false);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleIncrease = (amount) => {
    setTime((prevTime) => prevTime + amount);
  };

  return (
    <div>
      <h1>Taymer</h1>
      <p>{time}s</p>
      <button onClick={handleStartPause}>
        {isRunning ? 'Pauza' : 'Başla'}
      </button>
      <button onClick={handleReset}>Təkrar başlat</button>
      <div>
        <button onClick={() => handleIncrease(10)}>+10</button>
        <button onClick={() => handleIncrease(30)}>+30</button>
        <button onClick={() => handleIncrease(60)}>+60</button>
      </div>
    </div>
  );
}

export default Timer;
