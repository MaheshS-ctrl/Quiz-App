export const calculateScore = (currentScore, isCorrect) => {
  return isCorrect ? currentScore + 1 : currentScore;
};
