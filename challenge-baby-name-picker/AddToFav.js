import React from "react";

const AddToFav = ({ favorites }) => {
  return (
    <div>
      <p>
        <h3> Favorites:</h3>
        {favorites.map((name) => {
          return (
            <span className="fav col-xs-2 m-2 badge rounded-pill fa fa-heart-o">
              {name}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default AddToFav;
