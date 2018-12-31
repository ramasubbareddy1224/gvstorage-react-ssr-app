import React, { Component } from 'react';

class SelfStorageBanner extends Component{
render(){
    return(
        <div>
        <section id="inner-banner" className="inner-banner-cls">
  <div id="inner-banner-image">
    <div className="item"> <img src="img/intro-carousel/innerpage-facility-page-banner.jpg" className="img-fluid w-100" /> </div>
  </div>
  <div className="inner-banner-content facility-page-banner-content wow zoomIn">
    <div className="breadcrumb-section">
      <div className="">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
            <li className="breadcrumb-item"><a className="text-white" href="#">Storage options</a></li>
            <li className="breadcrumb-item"><a className="text-white" href="#"> Texas </a></li>
            <li className="breadcrumb-item text-white active" aria-current="page"> Dallas </li>
          </ol>
        </nav>
      </div>
    </div>
    <div className="about-room-facility">
      <h5> Texas Storage Park Self Storage </h5>
      <div className="storage-room-block">
        <div className="storage-room-image"> <img src="img/facility/facility-banner-img.png" alt="" /> </div>
        <div className="storage-room-content">
          <p className="small"> <i className="fa fa-fa-map-marker"> </i> 10013 RR FM 620 N, Austin, TX 78726. <br />
            <i className="fa fa-phone"> </i> (512) 649-0442 <br />
          </p>
          <div className="landmark ">
            <p className="d-inline-block pr-5 small-text"> <strong>Near</strong> <br />
              St. Thomas catholic church </p>
            <p className="d-inline-block small-text"> <strong>Street Interactions</strong> <br />
              Griffi's canyon creek, Exteriors outside furniture </p>
          </div>
          <div className="storage-timings">
            <div className="d-inline-block pr-5 small-text office-hours"> <strong> Office Hours</strong> <br />
              Monday to Friday: 9:00am - 5:30pm  |  Saturday: 9:00am - 4pm  |  Sunday: Closed </div>
            <div className="d-inline-block small-text access-hours"> <strong>Access Hours</strong> <br />
              6:00am - 10:00pm, 365 days </div>
          </div>
          <div className="clearfix"> </div>
          <div className="wether-block">
            <div className="d-inline-block small-text office-hours">
              <p className="gv-bg wether-info d-inline-block"> <img src="img/facility/wether-icon1.png" alt="wether" /> </p>
              <p className="wether-info-content d-inline-block small"> It will be 35 in Texas Storage Park. <br/>
                Consider a climate controlled unit!</p>
            </div>
            <div className="d-inline-block small-text access-hours">
              <p className="gv-bg wether-info d-inline-block"> <img src="img/facility/wether-icon1.png" alt="wether" /> </p>
              <p className="wether-info-content d-inline-block small"> It will be 35 in Texas Storage Park. <br />
                Consider a climate controlled unit!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 <div className="clearfix"> </div>
<div className="facility-space"> </div>
<hr />
</div>
    )
}
}

export default SelfStorageBanner;