import { useState, useEffect } from 'react';

interface TimerProps {
  onSaveTime: (time: number) => void;
}

export default function Timer({ onSaveTime }: TimerProps) {
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId: number;

    if (isCountingDown) {
      intervalId = window.setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setIsCountingDown(false);
            setIsRunning(true);
            return 5;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isCountingDown]);

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startTimer = () => {
    setIsCountingDown(true);
    setTime(0);
  };

  const stopTimer = () => {
    setIsRunning(false);
    onSaveTime(time);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-white rounded-lg shadow-md">
      <div className="text-4xl font-mono font-bold">
        {isCountingDown ? (
          <span className="text-red-500">{countdown}</span>
        ) : (
          <span className="text-blue-600">{formatTime(time)}</span>
        )}
      </div>
      <div className="space-x-4">
        {!isCountingDown && !isRunning && (
          <button
            onClick={startTimer}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Start
          </button>
        )}
        {isRunning && (
          <button
            onClick={stopTimer}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
}