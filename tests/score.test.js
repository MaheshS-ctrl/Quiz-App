import { calculateScore } from "../src/utils/score.js";

describe("calculateScore", () => {
  test("increments score when answer is correct", () => {
    expect(calculateScore(0, true)).toBe(1);
    expect(calculateScore(5, true)).toBe(6);
  });

  test("does not increment score when answer is incorrect", () => {
    expect(calculateScore(0, false)).toBe(0);
    expect(calculateScore(3, false)).toBe(3);
  });
});
