import React from "react";
import { StyledStartButton } from "./Style";

export function StartButton({ callback }) {
  return <StyledStartButton onClick={callback}>Start Game</StyledStartButton>;
}
