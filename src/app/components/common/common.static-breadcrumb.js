import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class CommonStaticBreadCrumb extends Component{
   
render(){

    const {pageName} = this.props;
    const {routeName} = this.props;

    return(
       
<section className="breadcrumb-section">
  <div className="container">
  <div className="city-breadcrumb border-bottom">
    <nav aria-label="breadcrumb" className=" d-inline-block">
      <ul className="nav-menu breadcrumb  border-0">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
     {!!routeName &&    <li className="breadcrumb-item"><Link to="">{routeName}</Link></li>}
        <li className="breadcrumb-item"><Link to="">{pageName}</Link></li>
   
      </ul>
    </nav>
    
    </div>
  </div>
</section>
    )
}
}

export default CommonStaticBreadCrumb;