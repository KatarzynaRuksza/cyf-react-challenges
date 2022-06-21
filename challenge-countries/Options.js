import React from "react";
import "./App.css";

const Options = (props) => {
  const onChangeHandler = (event) => {
    if (event.target.value === "All") {
      props.onSelecting(props.data);
    } else {
      props.onSelecting(
        props.data.filter((country) => country.region === event.target.value)
      );
    }
  };

  return (
    <select onChange={onChangeHandler}>
      <option value="All">All</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Polar">Polar</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
export default Options;
