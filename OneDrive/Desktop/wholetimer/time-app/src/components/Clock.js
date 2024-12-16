import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Saat</h1>
      <p>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</p>
    </div>
  );
}

export default Clock;
