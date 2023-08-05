import "../Styles/jobs-data.css";
import React, { useState } from "react";
import { JobContext } from "../Context";
import { useContext } from "react";

const JobsData = () => {
  const { JobList, searchResults, searchButtonClicked } =
    useContext(JobContext);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleApplyClick = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };
  return (
    <>
      <div>
        {searchButtonClicked ? (
          searchResults.length > 0 ? (
            <div className="containers">
              {searchResults.map((job) => (
                <div
                  className="card"
                  style={{ width: "50rem", height: "14rem" }}
                  key={job.id}
                >
                  <div className="card-body">
                    <div className="content">
                      <h3 className="card-title">{job.jobRole}</h3>
                      <p>
                        <i
                          className="fa-solid fa-briefcase"
                          style={{ color: "#7676df" }}
                        ></i>{" "}
                        {job.companyName}
                      </p>
                      <p>
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ color: "#7676df" }}
                        ></i>{" "}
                        {job.location}
                      </p>
                      <p>{job.salary}/month</p>
                    </div>
                    <div className="span">
                      <span>{job.jobType}</span> | <span>{job.workType}</span>
                    </div>

                    <div className="buttons">
                      <a href="#" className="card-link">
                        <button
                          onClick={() => handleApplyClick(job.id)}
                          disabled={appliedJobs.includes(job.id)}
                          type="button"
                          className="btn btn-success"
                        >
                          {appliedJobs.includes(job.id) ? "Applied" : "Apply"}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p
              style={{
                fontSize: "1.5rem",
                margin: "25rem 0 0 22rem",
                backgroundColor: "red",
                width: "40vw",
                textAlign: "center",
                color: "#ffff",
              }}
            >
              No matching job postings found.
            </p>
          )
        ) : (
          <div className="containers">
            {JobList.map((item) => (
              <div
                className="card"
                style={{ width: "50rem", height: "12rem" }}
                key={item.id}
              >
                <div className="card-body">
                  <div className="content">
                    <h3 className="card-title">{item.jobRole}</h3>
                    <p>
                      <i
                        className="fa-solid fa-briefcase"
                        style={{ color: "#7676df" }}
                      ></i>{" "}
                      {item.companyName}
                    </p>
                    <p>
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ color: "#7676df" }}
                      ></i>{" "}
                      {item.location}
                    </p>
                    <p>{item.salary}/month</p>
                  </div>
                  <div className="span">
                    <span>{item.jobType}</span> | <span>{item.workType}</span>
                  </div>

                  <div className="buttons">
                    <a href="#" className="card-link">
                      <button
                        onClick={() => handleApplyClick(item.id)}
                        disabled={appliedJobs.includes(item.id)}
                        type="button"
                        className="btn btn-success"
                      >
                        {appliedJobs.includes(item.id) ? "Applied" : "Apply"}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default JobsData;
