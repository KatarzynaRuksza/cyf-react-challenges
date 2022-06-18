import React from "react";

const Filters = (props) => {
  const onClickClear = () => {
    props.setFilters([]);
  };

  const onClickDelete = (index) => {
    props.setFilters((prevState) =>
      prevState.filter((item, index1) => index !== index1)
    );
  };

  return props.filters.length > 0 ? (
    <div className="filters">
      <div className="filter">
        {props.filters.map((item, index) => {
          return (
            <div key={index} className="filters-container">
              <p className="filters-p"> {item}</p>

              <button
                onClick={onClickDelete.bind(null, index)}
                className="filters-button"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <div className="clear-button">
        <button onClick={onClickClear} className="clear">
          Clear
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Filters;
