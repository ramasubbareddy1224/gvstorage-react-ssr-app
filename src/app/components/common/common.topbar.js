import React, { Component } from 'react';
import {Redirect,Link} from 'react-router-dom';
import {Environment} from '../../../configurations/environment';

class CommonTopBar extends Component{
render(){
    return(
      <section id="topbar" className="d-none d-lg-block">
    <div className="container-fluid clearfix">
    <div className="container-fluid-padding">
      <div className="contact-info float-left">
        <i className="fa fa-phone"></i> Toll free number <strong className="tf-num">{Environment.TOLL_FREE_NUMBER}</strong>
      </div>
      <div className="social-links float-right">
      <div> Existing customers  &nbsp; <Link to="/pay-bill"><span className="btn btn-sm btn-gvstore-sm "> <strong>Login</strong> </span></Link>  </div>
      </div>
      </div>
    </div>
  </section>
    )
}
}

export default CommonTopBar;