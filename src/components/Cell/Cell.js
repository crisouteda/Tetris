import React from "react";
import { StyledCell } from "./Style";
import { TETROMINOS } from "../../helpers";

export function Cell({ type }) {
  return <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>;
}
