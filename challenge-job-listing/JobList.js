import React from "react";
import Job from "./Job";

const JobList = (props) => {
  return props.jobData.map((item) => {
    return (
      <Job
        filters={props.filters}
        setFilters={props.setFilters}
        key={item.id}
        item={item}
      />
    );
  });
};

export default JobList;
