import React from "react";
import { SnakeDot, StyledGameArea } from "./Style";

export function Snake() {
  return (
    <StyledGameArea>
      <SnakeDot style={{ top: 0, left: 0 }}></SnakeDot>
      <SnakeDot style={{ top: 0, left: "2%" }}></SnakeDot>
      <SnakeDot style={{ top: 0, left: "2%" }}></SnakeDot>
    </StyledGameArea>
  );
}
