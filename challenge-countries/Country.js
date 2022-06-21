import React from "react";
import "./App.css";

const Country = (props) => {
  return (
    <div className="country-info">
      <img src={props.Flag} alt="flags" />
      <h5>{props.Name}</h5>
      <ul>
        <li key={3}>
          <b>Population:</b> {props.Population}
        </li>
        <li key={4}>
          <b>Region:</b> {props.Region}
        </li>
        <li key={5}>
          <b>Capital:</b> {props.Capital}
        </li>
      </ul>
    </div>
  );
};
export default Country;
