import "../Styles/filter.css";
import React from "react";

const FilterSection = () => {
 


  return (
    <div className="filter-section">
      <div className="filter-container">
        <input type="text" placeholder="Job title"  />

        <input type="text" placeholder="Location"  />

        <select className="dropdowns">
          <option value="">Experience</option>
          <option value="Fresher/Entry level">Fresher/Entry level</option>
          <option value="1-3 years">1-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5+ years">5+ years</option>
        </select>

        <select className="dropdowns">
          <option value="">Job type</option>
          <option value="Remote">Remote</option>
          <option value="In-Office">In-Office</option>
          <option value="Full-Time">Hybrid</option>
        </select>

        <select className="dropdowns">
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
          <option value="Freelance/Contract">Freelance/Contract</option>
        </select>

        <button type="button" className="filter-search-btn btn btn-primary">
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
