import { useState } from "react";

export const useBestScore = () => {
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("bestScore") || 0
  );

  const saveBestScore = () => {
    localStorage.setItem("bestScore", bestScore);
  };

  return [bestScore, setBestScore, saveBestScore];
};
