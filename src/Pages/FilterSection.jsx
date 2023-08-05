import "../Styles/filter.css";
import React from "react";
import { JobContext } from "../Context";
import { useContext } from "react";

const FilterSection = () => {
  const {
    JobList,
    jobRole,
    setJobRole,
    location,
    setLocation,
    experience,
    setExperience,
    setSearchResults,
    setSearchButtonClicked,
  } = useContext(JobContext);

  const handleSearch = () => {
    console.log("search is triggerd");
    const filteredJobs = JobList.filter(
      (job) =>
        job.jobRole.toLowerCase().includes(jobRole.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        (experience === "" || job.experience === experience)
    );

    setSearchResults(filteredJobs);
    setSearchButtonClicked(true);
    /* console.log(searchResults); */
  };

  return (
    <div className="filter-section">
      <div className="filter-container">
        <input
          type="text"
          placeholder="Job title"
          onChange={(e) => setJobRole(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />

        <select
          className="dropdowns"
          onChange={(e) => setExperience(e.target.value)}
        >
          <option value="">Experience</option>
          <option value="Fresher/Entry level">Fresher</option>
          <option value="1-3 years">1-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5+ years">5+ years</option>
        </select>

        <button
          type="button"
          className="filter-search-btn btn btn-primary"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="filter-icon">
        <i
          id="filter"
          className="fa-solid fa-filter"
          style={{ color: "#7676df" }}
        ></i>
      </div>
    </div>
  );
};

export default FilterSection;
