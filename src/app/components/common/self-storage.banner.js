import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class SelfStorageBanner extends Component{
render(){
  const { siteLocation } = this.props.allUnits; 
    return(
        <div>
        <section id="inner-banner" className="inner-banner-cls">
  <div id="inner-banner-image">
    <div className="item"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/intro-carousel/innerpage-facility-page-banner.jpg"} className="img-fluid w-100" /> </div>
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
      <h5> {!!siteLocation && siteLocation.name} </h5>
      <div className="storage-room-block">
        <div className="storage-room-image"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/facility-banner-img.png"} alt="" /> </div>
        <div className="storage-room-content">
          <p className="small"> <i className="fa fa-fa-map-marker"> </i> {!!siteLocation && siteLocation.address1}, {!!siteLocation && siteLocation.city}, {!!siteLocation && siteLocation.stateCode} {!!siteLocation && siteLocation.postalCode}. <br />
            <i className="fa fa-phone"> </i> {!!siteLocation && siteLocation.fax} <br />
          </p>
          <div className="landmark ">
            {/* <p className="d-inline-block pr-5 small-text"> <strong>Near</strong> <br />
              St. Thomas catholic church </p> */}
           { !!siteLocation && !!siteLocation.content && !!siteLocation.content.gvssitestreets.length > 0 &&
            <p className="d-inline-block small-text"> <strong>Street Interactions</strong> <br />
              {(siteLocation.content.gvssitestreets.map(x=>x.name)).join(', ')} </p>
           }
          </div>
          <div className="storage-timings">
            { !!siteLocation && !!siteLocation.content && !!siteLocation.content.accesshours &&
            <div className="d-inline-block pr-5 small-text office-hours"> <strong> Office Hours</strong> <br />
              {siteLocation.content.accesshours}</div>
            }
            {  !!siteLocation && !!siteLocation.content   && !!siteLocation.content.officehours &&
            <div className="d-inline-block small-text access-hours"> <strong>Access Hours</strong> <br />
             {siteLocation.content.officehours} </div>
            }
          </div>
          <div className="clearfix"> </div>
          <div className="wether-block">
          {  !!siteLocation && !!siteLocation.content   && !!siteLocation.content.weather &&
            <div className="d-inline-block small-text office-hours">
              <p className="orange-gradient wether-info d-inline-block"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/wether-icon1.png"} alt="wether" /> </p>
              <p className="wether-info-content d-inline-block small">  {siteLocation.content.weather}</p>
            </div>
          }
            &nbsp; &nbsp; &nbsp; &nbsp; 
            <div className="d-inline-block small-text access-hours">
              <p className="red-greadient wether-info d-inline-block"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/percent.png"} alt="wether" /> </p>
              <p className="wether-info-content d-inline-block small"> Resrve a Unit in 30 Secounds. <br />
              No Credit Card required</p>
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