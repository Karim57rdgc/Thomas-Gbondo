"use client";

import { useState, useEffect } from "react";

const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateClock();
    const timerId = setInterval(updateClock, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <footer className="p-2 border-t border-primary bg-background text-primary font-mono text-xs flex justify-between items-center">
      <span>thomas@portfolio:~$</span>
      <span>{currentTime}</span>
    </footer>
  );
};

export default StatusBar;