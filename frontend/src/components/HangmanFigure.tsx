import React from "react";
import { hangmanStages } from "../utils/hangmanStages";

interface HangmanFigureProps {
  remainingAttempts: number;
}

function HangmanFigure({ remainingAttempts }: HangmanFigureProps) {
  const currentHangmanStage = hangmanStages[6 - remainingAttempts];

  return (
    <pre style={{ color: "#fff", textAlign: "center", fontFamily: "'Courier New', monospace", fontSize: "12px" }}>
      {currentHangmanStage}
    </pre>
  );
}

export default HangmanFigure;