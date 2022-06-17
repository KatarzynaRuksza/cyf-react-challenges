import React, { useState } from "react";
import AddToFav from "./AddToFav";
import babyNamesData from "../data/babyNamesData.json";
import SearchAndSort from "./SearchAndSort";

const Names = () => {
  const [names, setNames] = useState(babyNamesData);
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <SearchAndSort
        names={babyNamesData}
        setNames={setNames}
        allNames={names}
      />
      <AddToFav
        favorites={favorites}
        setFavorites={setFavorites}
        names={names}
        setNames={setNames}
      ></AddToFav>

      <div className="App-content container-fluid">
        <div className="row">
          {names
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((name, index) => {
              if (name.sex === "f" && !favorites.includes(name.name)) {
                return (
                  <span
                    className="female col-xs-2 m-2 badge rounded-pill 		fa fa-venus"
                    key={index}
                    onClick={() => {
                      if (!favorites.includes(name.name)) {
                        setFavorites([...favorites, name.name]);
                        setNames(names.filter((n) => n.name !== name.name));
                      }
                    }}
                  >
                    {name.name}
                  </span>
                );
              } else if (name.sex === "m" && !favorites.includes(name.name)) {
                return (
                  <span
                    className="male col-xs-2 m-2 badge 	fa fa-mars"
                    key={index}
                    onClick={() => {
                      if (!favorites.includes(name.name)) {
                        setFavorites([...favorites, name.name]);
                        setNames(names.filter((n) => n.name !== name.name));
                      }
                    }}
                  >
                    {name.name}
                  </span>
                );
              } else return null;
            })}
        </div>
      </div>
    </div>
  );
};

export default Names;
