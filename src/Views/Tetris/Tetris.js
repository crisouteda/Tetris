import React from "react";

// components
import { createStage } from "../../helpers";
import { Stage, Display, StartButton } from "../../components";

export function Tetris() {
  console.log("en tetris", createStage());
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
}
