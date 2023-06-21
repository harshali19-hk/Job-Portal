import '../Styles/hero.css'
import React from "react";
import heroImg from "../Assets/job-hunting.png";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
     
        <h1>
          Find the perfect <br /> job that you
          <span className="hero-heading"> deserve</span>
        </h1>
       <p className="para">Search keywords e.g. Product Manager</p>
        <table>
          <tbody>
            <tr>
              <td>
                <i
                  className=" icon1 fa-solid fa-briefcase"
                  style={{ color: "#7676df" }}
                ></i>{" "}
                <input
                  className="searchBar"
                  type="text"
                  placeholder="Job Title"
                />
              </td>
              <td>
                <i
                  className="icon2 fa-sharp fa-solid fa-location-dot"
                  style={{ color: "#7676df" }}
                ></i>
                <input
                  className="searchBar"
                  type="text"
                  placeholder="Enter Location"
                />
              </td>
              <td>
                <button type="button" className="search-btn btn btn-primary">
                  Search
                </button>
              </td>
             
            </tr>
          </tbody>
        </table>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="img" />
      </div>
      
    </div>
  );
};

export default HeroBanner;
