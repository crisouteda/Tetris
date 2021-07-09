import React, { useState, useEffect } from "react";
import { StyledTetris } from "./Style";

import { checkCollision, createStage } from "../../helpers";
// components
import { Stage, Display, StartButton } from "../../components";

// custom hooks
import {
  usePlayer,
  useStage,
  useInterval,
  useGameStatus,
  useBestScore,
} from "../../hooks";

// constants
const gameOverAudio = new Audio(
  "https://audio-tecris.s3.eu-west-1.amazonaws.com/gameOver.mp3"
);
const levelUpAudio = new Audio(
  "https://audio-tecris.s3.eu-west-1.amazonaws.com/levelUp.mp3"
);
const bestScoreAudio = new Audio(
  "https://audio-tecris.s3.eu-west-1.amazonaws.com/bestScore.mp3"
);

const wellDoneAudio = new Audio(
  "https://audio-tecris.s3.eu-west-1.amazonaws.com/wellDone.mp3"
);

export function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [newBestScore, setNewBestScore] = useState(false);
  const [audio, setAudio] = useState(new Audio());
  const [playing, setPlaying] = useState(false);
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);
  const [bestScore, setBestScore, saveBestScore] = useBestScore();

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    if (rowsCleared >= 4) {
      console.log(rowsCleared);
      setAudio(wellDoneAudio);
    }
  }, [rowsCleared]);

  useEffect(() => {
    setAudio(bestScoreAudio);
  }, [newBestScore]);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    console.log("test");
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setPlaying(true);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    if (score > bestScore) {
      setBestScore(score);
      setNewBestScore(true);
    }
    // Increate level whrn player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setAudio(levelUpAudio);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game Over
      if (player.pos.y < 1) {
        saveBestScore();
        setGameOver(true);
        setDropTime(null);
        setAudio(gameOverAudio);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetris
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <Stage stage={stage} />
      <aside>
        {gameOver ? (
          <Display gameOver={gameOver} text="Game Over" />
        ) : (
          <div>
            <Display text={`Score: ${score}`} />
            <Display text={`Rows: ${rows}`} />
            <Display text={`Level: ${level}`} />
          </div>
        )}
        <Display
          text={`Best Score: ${bestScore}`}
          newBestScore={newBestScore}
        />
        <StartButton callback={startGame} />
      </aside>
    </StyledTetris>
  );
}
