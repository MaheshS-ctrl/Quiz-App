import { jest } from "@jest/globals";
import { createTimer } from "../src/utils/timer.js";

jest.useFakeTimers();


describe("createTimer", () => {
  test("calls onTick and onEnd correctly", () => {
    const onTick = jest.fn();
    const onEnd = jest.fn();

    const timer = createTimer(3, onTick, onEnd);
    timer.start();

    jest.advanceTimersByTime(1000);
    expect(onTick).toHaveBeenCalledWith(2);

    jest.advanceTimersByTime(1000);
    expect(onTick).toHaveBeenCalledWith(1);

    jest.advanceTimersByTime(1000);
    expect(onEnd).toHaveBeenCalledTimes(1);
  });

  test("stops timer when stop is called", () => {
    const onTick = jest.fn();
    const onEnd = jest.fn();

    const timer = createTimer(5, onTick, onEnd);
    timer.start();
    timer.stop();

    jest.advanceTimersByTime(5000);
    expect(onEnd).not.toHaveBeenCalled();
  });
});
