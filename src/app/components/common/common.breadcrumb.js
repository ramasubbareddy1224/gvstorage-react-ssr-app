import React, { Component } from 'react';

class CommonBreadCrumb extends Component{
   
render(){
   

    

    return(
       
<section className="breadcrumb-section">
  <div className="container">
  <div className="city-breadcrumb border-bottom">
    <nav aria-label="breadcrumb" className=" d-inline-block">
      <ol className="breadcrumb  border-0">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Storage options</a></li>
        <li className="breadcrumb-item"><a href="#"> Texas </a></li>
        <li className="breadcrumb-item active" aria-current="page"> Dallas </li>
      </ol>
    </nav>
    
    <div className="city-page-filters small"> 
    
    	 <div className="form-check">
   		 <label className="customcheck"> Climate Controlled
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        </div>
        
         <div className="form-check">
        <label className="customcheck"> Vechicle Storage
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        </div>
        
         <div className="form-check">
        <label className="customcheck"> Drive-UP Access
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        </div>
        
         <div className="form-check">
        <label className="customcheck">  Warehouse/Office
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        </div>
    </div>
    </div>
  </div>
</section>
    )
}
}

export default CommonBreadCrumb;
