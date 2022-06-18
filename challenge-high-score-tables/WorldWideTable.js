import React from "react";
import Scores from "./Scores";

const WorldWideTable = (props) => {
  let worldHighScore = [];

  props.scores.forEach((country) => {
    country.scores.forEach((player) => {
      worldHighScore.push(player);
    });
  });

  return (
    <div className="world-wide">
      <h1>WORLD WIDE BEST SCORES</h1>
      <ul>
        {worldHighScore
          .sort((a, b) => b.s - a.s)
          .map((player, index) => {
            return <Scores name={player.n} score={player.s} key={index} />;
          })}
      </ul>
    </div>
  );
};

export default WorldWideTable;
