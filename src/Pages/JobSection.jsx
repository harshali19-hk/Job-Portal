import React from "react";
import FilterSection from "./FilterSection";
import Navbar from "../Components/Navbar";
import JobsData from "../Pages/JobsData";

const JobSection = () => {
  return (
    <>
      <Navbar></Navbar>
      <FilterSection></FilterSection>
      <JobsData></JobsData>
    </>
  );
};

export default JobSection;
