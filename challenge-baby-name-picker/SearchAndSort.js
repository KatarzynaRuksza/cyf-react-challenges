import React, { useState } from "react";
import "../styles/App.css";

const SearchAndSort = ({ names, setNames, allNames }) => {
  const [search, setSearch] = useState(allNames);
  const [sort, setSort] = useState({
    boys: false,
    girls: false,
    all: true,
  });

  return (
    <div className="filter_search-container">
      <input
        type="text"
        placeholder="Insert baby name you are looking for here..."
        onChange={(e) => {
          setNames(
            search.filter((item) =>
              item.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
        }}
        className="search-box"
      />
      <span
        className={
          sort.boys
            ? "btn boys_btn badge fa fa-mars chosen"
            : "btn boys_btn badge fa fa-mars"
        }
        onClick={() => {
          if (!sort.boys) {
            setSort({ boys: true, girls: false, all: false });
            setNames(names.filter((item) => item.sex === "m"));
            setSearch(names.filter((item) => item.sex === "m"));
          }
        }}
      >
        {" "}
        Boys{" "}
      </span>
      <span> | </span>
      <span
        className={
          sort.girls
            ? "btn girls_btn badge rounded-pill fa fa-venus chosen"
            : "btn girls_btn badge rounded-pill fa fa-venus"
        }
        onClick={() => {
          if (!sort.girls) {
            setSort({ boys: false, girls: true, all: false });
            setNames(names.filter((item) => item.sex === "f"));
            setSearch(names.filter((item) => item.sex === "f"));
          }
        }}
      >
        {" "}
        Girls{" "}
      </span>{" "}
      {"|"}
      <span
        className={
          sort.all
            ? "btn all_btn badge 		fa fa-mars-double chosen"
            : "btn all_btn badge 		fa fa-mars-double "
        }
        onClick={() => {
          if (!sort.all) {
            setSort({ boys: false, girls: false, all: true });
            setNames(names);
            setSearch(names);
          }
        }}
      >
        {" "}
        All{" "}
      </span>
    </div>
  );
};

export default SearchAndSort;
