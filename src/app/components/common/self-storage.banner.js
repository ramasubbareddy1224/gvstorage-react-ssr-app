import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Link} from 'react-router-dom';

class SelfStorageBanner extends Component{
render(){
  const  siteLocation  = this.props.allUnits.siteLocation || {}; 
  const {pathParams} = this.props;

    return(
<div className="facility-page-bg-block">
 <section id="inner-banner" className="inner-banner-cls">

 <div id="inner-banner-image" className="unit-banner-img">
    <div className="item"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/intro-carousel/innerpage-facility-page-banner.jpg"} className="img-fluid w-100" /> </div>
  </div>
  

 <div className="inner-banner-content facility-page-banner-content unit-content-sec">
    <div className="breadcrumb-section">
      <div className="">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
            <li className="breadcrumb-item"><a className="text-white" href="#">Storage options</a></li>
            
            <li className="breadcrumb-item"><Link className="text-white" to={`/search/${siteLocation.stateName}`} > {siteLocation.stateName} </Link></li>
            <li className="breadcrumb-item"><Link className="text-white"  to={`/search/${siteLocation.city}`}> {siteLocation.city} </Link></li>
           {!!siteLocation.content && <li className="breadcrumb-item"><a className="text-white" > {siteLocation.content.name} </a></li>
           }
            {/* <li className="breadcrumb-item text-white active" aria-current="page"> Dallas </li> */}
          </ol>
        </nav>
      </div>
    </div>
    <div className="container-fluid">
    <div className="about-room-facility">
      <h4 className="desktop-unit"> <span > {!!siteLocation && !!siteLocation.content && siteLocation.content.name} </span>  
      <span className="gv-text-color text-underline pull-right font-weight-bold font-big pr-1 align-top"> <i class="fa fa-map-marker"> </i> </span></h4> 
     
      <div className="storage-room-block row">
      <span className="mobile-unit gv-text-color text-underline text-center pl-50 font-weight-bold font-big pr-1 align-top"> <i class="fa fa-map-marker"> </i></span>
      <div className="col-12 col-sm-5 col-md-3">
        <div className="storage-room-image"> 
        
          <div className="storage-img-l">  
          <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/facility-banner-img.png"} alt="" className="img-fluid  width-90" /> 
          </div>
             </div>
      </div>

      <div className="col-md-9">
      <h4 className="d-inline-block"> <span className="mobile-unit "> {!!siteLocation && !!siteLocation.content && siteLocation.content.name} </span> </h4>
        <div className="storage-room-content ">
        <div className="row">
          <div className="col-12 col-sm-7 col-md-8 col-lg-6">
            <p className=""> <i className="fa fa-map-marker"> </i> {!!siteLocation && siteLocation.address1}, {!!siteLocation && siteLocation.city}, {!!siteLocation && siteLocation.stateCode} {!!siteLocation && siteLocation.postalCode}. &nbsp; <br />
            <i className="fa fa-phone"> </i> {!!siteLocation && siteLocation.phone}
            </p> 
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-6">
            <a class="btn btn-gvstore btn-success btn-sm border-0 bg-light align-top text-success font-normal " href={"https://www.google.com/maps/dir/Your Location/"+siteLocation.latitude+","+siteLocation.longitude} target="_blank"> Get Direction </a>  <br />
          </div>
        </div>
          
          <div className="landmark ">
            {/* <p className="d-inline-block pr-5 small-text"> <strong>Near</strong> <br />
              St. Thomas catholic church </p> */}
           { !!siteLocation && !!siteLocation.content && !!siteLocation.content.gvssitestreets.length > 0 &&
            <p className="d-inline-block small-text"> Street Interactions <br />
              {(siteLocation.content.gvssitestreets.map(x=>x.name)).join(', ')} </p>
           }
          </div>
        </div>
       
    

       <div className="col=md-12">
        <div className="storage-room-content storage-wether-info">
          <div className="storage-timings row">
          <div className="col-md-7">
            { !!siteLocation && !!siteLocation.content && !!siteLocation.content. officehours &&
            <div className="d-inline-block pr-5 small-text office-hours"> <strong className="font-weight-bold"> Office Hours</strong> <br />
              {siteLocation.content.officehours}</div>
            }
            </div>
            <div className="col-md-5">
            {  !!siteLocation && !!siteLocation.content   && !!siteLocation.content.accesshours &&
            <div className="d-inline-block small-text access-hours"> <strong className="font-weight-bold">Access Hours</strong> <br />
             {siteLocation.content.accesshours} </div>
            }
            </div>
          </div>
          <div className="clearfix"> </div>
         
          <div className="wether-block">
          {  !!siteLocation && !!siteLocation.content   && !!siteLocation.content.weather &&
            <div className="d-inline-block small-text office-hours">
              <p className="orange-gradient wether-info d-inline-block"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/wether-icon1.png"} alt="wether" /> </p>
              <p className="wether-info-content d-inline-block small">  {siteLocation.content.weather}</p>
            </div>
          }
           

            
            <div className="d-inline-block small-text access-hours">
              <p className="red-greadient wether-info d-inline-block"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/percent.png"} alt="wether" /> </p>
              <p className="wether-info-content d-inline-block small"> Reserve a Unit in 30 Seconds. <br />
              No Credit Card required</p>
            </div>
     </div>
        </div>
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