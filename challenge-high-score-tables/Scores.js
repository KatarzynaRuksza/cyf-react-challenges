import React from "react";

const Scores = (props) => {
  return (
    <li className="list">
      <span className="name">{props.name}</span>
      <span className="score">{props.score}</span>
    </li>
  );
};

export default Scores;
