import React, { createContext, useState } from "react";
import { JobList } from "./JobList";

const JobContext = createContext();

const ContextProvider = ({ children }) => {
  const [jobRole, setJobRole] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  return (
    <div>
      <JobContext.Provider
        value={{
          JobList,
          jobRole,
          setJobRole,
          location,
          setLocation,
          experience,
          setExperience,
          searchResults,
          setSearchResults,
          searchButtonClicked,
          setSearchButtonClicked,
        }}
      >
        {children}
      </JobContext.Provider>
    </div>
  );
};

export default ContextProvider;
export { JobContext };
