import React, { Component } from 'react';

class CommonTopBar extends Component{
render(){
    return(
      <section id="topbar" className="d-none d-lg-block">
    <div className="container-fluid clearfix">
      <div className="contact-info float-left">
        <i className="fa fa-phone"></i> Toll free number <strong className="tf-num">+1 5589 55488 55</strong>
      </div>
      <div className="social-links float-right">
      <div> Existing customers  &nbsp; <span className="btn btn-sm btn-gvstore-sm "> <strong>Login</strong> </span>        </div>
      </div>
    </div>
  </section>
    )
}
}

export default CommonTopBar;