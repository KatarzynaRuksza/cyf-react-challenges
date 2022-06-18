import "../styles/App.css";
import React, { useState } from "react";
import WorldWideTable from "./WorldWideTable";
import CountryHighScore from "./CountryHighScore";
import scores from "../data/scores";

function App() {
  const [ascending, setAscending] = useState(false);

  const changeOrder = () => {
    setAscending(!ascending);
  };

  return (
    <div className="App">
      <WorldWideTable scores={scores} />
      <h1>HIGH SCORES PER COUNTRY</h1>
      <button onClick={changeOrder}>
        <i class="fa fa-long-arrow-up"></i> ORDER{" "}
        <i class="fa fa-long-arrow-down"></i>
      </button>
      {scores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((country, index) => {
          return (
            <CountryHighScore
              countryName={country.name}
              countryScores={country.scores}
              order={ascending}
              key={index}
            />
          );
        })}
    </div>
  );
}

export default App;
