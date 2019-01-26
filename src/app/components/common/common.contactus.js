import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CommonContactUs extends Component{
render(){
    return(
        <section id="call-to-action" className="wow fadeInUp">
<div className="container-fluid bg-contact-strip pt-5 pb-5">
  <div className="row pt-3 pb-3">
    <div className="col-md-12 text-center">
      <h3 className="cta-title">For information about availability, <br/>
pricing or to reserve a storage unit,</h3>
    </div>
    </div>
    
    <div className="row">
    <div className="col-md-12  text-center">
      <Link className="btn btn-gvstore btn-success border-0 green-gradient" to="/contact-us"> Contact Us </Link>
    </div>
    </div>
  </div>
</section>
    )
}
}

export default CommonContactUs;