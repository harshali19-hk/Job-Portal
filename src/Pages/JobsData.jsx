import "../Styles/jobs-data.css";
import React from "react";
import { useSelector } from "react-redux";

const JobsData = () => {
  const data = useSelector((state) => state.jobs.jobsData);

  return (
    <> 
      <div className="containers">
        {data.map((item) => (
         
          <div
            className="card"
            style={{ width: "50rem", height: "14rem" }}
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
                  <button type="button" className="btn btn-light">
                    View
                  </button>
                </a>
                <a href="#" className="card-link">
                  <button type="button" className="btn btn-success">
                    Apply
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default JobsData;
