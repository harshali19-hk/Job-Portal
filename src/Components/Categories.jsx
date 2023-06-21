import React from "react";
import '../Styles/categories.css'



const Categories = () => {

  return (
    <div className="category-container">
      <h2 className="category-heading">
      Explore by category
      </h2>
    <div className="card-container">
      

      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
       
         <div className="icons">
         <i className="icon fa-solid fa-computer" style={{color: "#7676df"}}></i>
         </div>
          <h5>IT/Software</h5>
          <p>4210 Jobs</p>
        </div>
      </div>
      
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
       <div className="icons">
       <i className="icon fa-solid fa-lightbulb" style={{color: "#7676df"}}></i>
       </div>
          <h5>Marketing/Sales</h5>
          <p>2690 Jobs</p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
       <div className="icons">
       <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" fill="#7676e9" width="2em"><path className="svg1 uim-tertiary" d="M17.6875,21.74414a2.01908,2.01908,0,0,1-1.24121-.42676L12.416,18.19531,9.71387,21.17773a1.00011,1.00011,0,0,1-1.69825-.38281l-2.0205-6.68164-3.625-1.26074A2.042,2.042,0,0,1,2.2666,9.03516L20.18652,1.7998A2.04245,2.04245,0,0,1,22.958,4.09473l-3.2627,16.0166a2.05413,2.05413,0,0,1-2.00781,1.63281Z"/><path className="svg1 uim-primary" d="M8.97266,21.50586a.99968.99968,0,0,1-.957-.71l-2.168-7.15918A.9989.9989,0,0,1,6.34277,12.46L16.91016,6.958A.99975.99975,0,0,1,18.0791,8.55176l-7.083,7.083L9.95215,20.707a.99926.99926,0,0,1-.9336.79785C9.00293,21.50586,8.9873,21.50586,8.97266,21.50586Z"/></svg>
       </div>
        
          <h5>Finance</h5>
          <p>1458 Jobs</p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
       <div className="icons">
       <i className="icon fa-solid fa-user" style={{color: "#7676df"}}></i>
       </div>
       
          <h5>Human Resource</h5>
          <p>3411 Jobs</p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
       <div className="icons">
       <i className="icon fa-solid fa-landmark" style={{color: "#7676df"}}></i>
       </div>
          <h5>Engineering</h5>
          <p>3900 Jobs</p>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
       <div className="icons">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7676e9"  width="2em"><rect width="20" height="15" x="2" y="3" className="uim-tertiary" rx="3"/><path className="uim-primary" d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"/></svg>
       </div>

          <h5>Freelance</h5>
          <p>2043 Jobs </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Categories;
