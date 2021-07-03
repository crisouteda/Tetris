import React from "react";

// components

import { Stage, Display, StartButton } from "../../components";

export function Tetris() {
    return (
        <div>
            <Stage/>
            <aside>
                <div>
                    <Display text = "score" />
                    <Display text = "Rows" />
                    <Display text = "Level" />
                </div>
                <StartButton/>
            </aside>
        </div>
    )
}