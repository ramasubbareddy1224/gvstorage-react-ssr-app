import React, { Component } from 'react';
import {Redirect,Link} from 'react-router-dom';

class CommonTopBar extends Component{
render(){
    return(
      <section id="topbar" className="d-none d-lg-block">
    <div className="container-fluid clearfix">
    <div className="container-fluid-padding">
      <div className="contact-info float-left">
        <i className="fa fa-phone"></i> Toll free number <strong className="tf-num">877-537-8673</strong>
      </div>
      <div className="social-links float-right">
      <div> Existing customers  &nbsp; <span className="btn btn-sm btn-gvstore-sm "> <strong><Link to="/pay-bill">Login</Link></strong> </span>        </div>
      </div>
      </div>
    </div>
  </section>
    )
}
}

export default CommonTopBar;