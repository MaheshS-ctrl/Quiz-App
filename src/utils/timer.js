export const createTimer = (duration, onTick, onEnd) => {
  let timeLeft = duration;
  let timerId = null;

  const start = () => {
    timerId = setInterval(() => {
      timeLeft--;
      onTick(timeLeft);

      if (timeLeft === 0) {
        stop();
        onEnd();
      }
    }, 1000);
  };

  const stop = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  return {
    start,
    stop
  };
};
