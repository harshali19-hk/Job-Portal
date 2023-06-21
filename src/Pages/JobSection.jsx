import React from "react";
import FilterSection from "./FilterSection";
import Navbar from "../Components/Navbar";
import JobsData from "./JobsData";

const JobSection = () => {
  return (
    <div>
      <Navbar></Navbar>
      <FilterSection></FilterSection>
      <JobsData></JobsData>
    </div>
  );
};

export default JobSection;
