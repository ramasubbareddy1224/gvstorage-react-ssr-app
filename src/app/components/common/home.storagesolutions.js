import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class HomeStorageSolutions extends Component{
render(){
    return(
        <section id="services">
        <div className="container-fluid bg-storage pb-5">
          <div className="section-header">
            <h2 className="text-center text-white pt-5">Our Storage Solutions</h2>
          </div>
  
          <div className="row text-center">
          
          <div className="col-md-2"> </div>
          
            <div className="col-md-2">
              <div className="wow storage-solution zoomIn">
                <div className="storage-img-block">
                    <img src={Environment.STATIC_FILES_END_POINT_URL + "img/house-storage.png"} alt="home storage" />
                </div>
                <p className="title"> Personal Storage </p>
              </div>
            </div>
  
            <div className="col-md-2">
              <div className="wow storage-solution zoomIn">
                <div className="storage-img-block">
                    <img src={Environment.STATIC_FILES_END_POINT_URL + "img/bussiness-storage.png"} alt="home storage" />
                </div>
                <p className="title"> Business Storage </p>
              </div>
            </div>
  
            <div className="col-md-2">
              <div className="wow storage-solution zoomIn">
                <div className="storage-img-block">
                    <img src={Environment.STATIC_FILES_END_POINT_URL + "img/vechile-storage.png"} alt="home storage" />
                </div>
                <p className="title"> Vehicle Storage </p>
              </div>
            </div>
  
            <div className="col-md-2">
              <div className="wow storage-solution zoomIn">
                <div className="storage-img-block">
                    <img src={Environment.STATIC_FILES_END_POINT_URL + "img/gsv-storage.png"} alt="home storage" />
                </div>
                <p className="title"> GVS  Storage </p>
              </div>
            </div>
            
          <div className="col-md-2"> </div>
          </div>
  
        </div>
      </section>
    )
}
}

export default HomeStorageSolutions;

