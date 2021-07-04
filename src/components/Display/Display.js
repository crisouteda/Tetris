import React from "react";
import { StyledDisplay } from "./Style";
export function Display({ gameOver, newBestScore, text }) {
  return (
    <StyledDisplay gameOver={gameOver} newBestScore={newBestScore}>
      {text}
    </StyledDisplay>
  );
}
