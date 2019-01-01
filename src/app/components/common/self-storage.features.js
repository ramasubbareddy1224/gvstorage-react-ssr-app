import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class SelfStorageFeatures extends Component{
render(){
    return(
        <section id="services" className="wow zoomIn" >
    <div className="container bg-storage pb-5">
      <div className="section-header">
        <h2 className="text-center pt-5"> Features </h2>
      </div>
      <div className="row text-center">
        <div className="col-md-1"> </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/car-icon.png"} alt="home storage" /> </div>
            <p className="title">RV, Car, Boat <br />
              Parking </p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/covered-parking.png"} alt="home storage" /> </div>
            <p className="title"> Covered <br /> Parking </p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/lock.png"} alt="home storage" /> </div>
            <p className="title"> Fenced & <br />
              Gated </p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/onsite-manager.png"} alt="home storage" /> </div>
            <p className="title"> Onsite <br />
              Manager </p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/security.png"} alt="home storage" /> </div>
            <p className="title"> Security <br />
              Camera </p>
          </div>
        </div>
        <div className="col-md-1"> </div>
      </div>
      <div className="row pt-3 text-center">
        <div className="col-md-1"> </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/delivery-truck.png"} alt="home storage" /> </div>
            <p className="title">Delivery <br />
              Acceptance </p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/steering.png"} alt="home storage" /> </div>
            <p className="title"> Drive up Access </p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/pay-online.png"} alt="home storage" /> </div>
            <p className="title"> Pay <br />
              Online </p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/box.png"} alt="home storage" /> </div>
            <p className="title"> Moving <br />
              Supplies </p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/calender.png"} alt="home storage" /> </div>
            <p className="title"> Month to Month <br />
              Lease</p>
          </div>
        </div>
        <div className="col-md-1"> </div>
      </div>
      <div className="row pt-3 text-center">
        <div className="col-md-1"> </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/lamp.png"} alt="home storage" /> </div>
            <p className="title"> Well Lit <br />
              Property </p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-2">
          <div className="wow storage-solution zoomIn">
            <div className=""> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/shield.png"} alt="home storage" /> </div>
            <p className="title"> Protection Plan <br />
              Available </p>
          </div>
        </div>
        <div className="col-md-1"> </div>
      </div>
    </div>
  </section>
    )
}
}

export default SelfStorageFeatures;