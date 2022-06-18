import React from "react";
import Scores from "./Scores";

const CountryHighScore = (props) => {
  return (
    <div className="country">
      <h2>HIGH SCORES: {props.countryName}</h2>
      <ul className="list_country">
        {props.countryScores
          .sort(props.order ? (a, b) => a.s - b.s : (a, b) => b.s - a.s)
          .map((player, index) => {
            return <Scores name={player.n} score={player.s} key={index} />;
          })}
      </ul>
    </div>
  );
};

export default CountryHighScore;
