import React, { createContext, useState, useContext } from 'react';

const StopwatchContext = createContext();

export const StopwatchProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <StopwatchContext.Provider value={{ time, setTime, isRunning, setIsRunning }}>
      {children}
    </StopwatchContext.Provider>
  );
};

export const useStopwatch = () => useContext(StopwatchContext);
