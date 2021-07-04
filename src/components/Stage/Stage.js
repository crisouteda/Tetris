import React from "react";
import { StyledStage } from "./Style";
import { Cell } from "../Cell";

export function Stage({ stage }) {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row) =>
        row.map((cell, i) => <Cell key={i} type={cell[0]} />)
      )}
    </StyledStage>
  );
}
