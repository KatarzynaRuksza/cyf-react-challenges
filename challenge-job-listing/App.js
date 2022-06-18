import "./App.css";
import React, { useState, useEffect } from "react";
import data from "./data.json";
import JobList from "./JobList";
import Header from "./Header";
import Filters from "./Filters";

function App() {
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
    let filter = filters.map((searchWord) => {
      return data.filter(
        (item) =>
          item.languages.includes(searchWord) ||
          item.role.includes(searchWord) ||
          item.level.includes(searchWord)
      );
    });
    filter.map((item) => setFilteredData(item));
  }, [filters]);

  return (
    <div className="App">
      <Header />
      <Filters setFilters={setFilters} filters={filters} />
      <JobList
        filters={filters}
        setFilters={setFilters}
        jobData={filteredData.length > 0 ? filteredData : data}
      />
    </div>
  );
}

export default App;
