import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Link} from 'react-router-dom';

class HomeStorageSolutions extends Component{
render(){
    return(
        <section id="services">
        <div className="container-fluid bg-storage pb-5 pt-4">
          <div className="section-header">
            <h2 className="text-center text-white pt-5 pb-3">Our Storage Solutions</h2>
          </div>
  
          <div className="row text-center pb-5">
          
          <div className="storage-sol-padding"> </div>
          
            <div className="col-6 col-md-3 col-lg-2">
              <div className="wow storage-solution zoomIn">
              <Link to="/personal-storage">
                <div className="storage-img-block">
                    <img src={Environment.STATIC_FILES_END_POINT_URL + "img/house-storage.png"} alt="personal storage" />
                </div>
                <p className="title"> Personal Storage </p>
                </Link>
              </div>
            </div>
  
            <div className="col-6 col-md-3 col-lg-2">
              <div className="wow storage-solution zoomIn">
              <Link to="/business-storage">
                <div className="storage-img-block">
                    <img src={Environment.STATIC_FILES_END_POINT_URL + "img/bussiness-storage.png"} alt="business storage" />
                </div>
                <p className="title"> Business Storage </p>
                </Link>
              </div>
            </div>
  
            <div className="col-6 col-md-3 col-lg-2">
              <div className="wow storage-solution zoomIn">
              <Link to="/vehicle-storage">
                <div className="storage-img-block">
                    <img src={Environment.STATIC_FILES_END_POINT_URL + "img/vechile-storage.png"} alt="vehicle storage" />
                </div>
                <p className="title"> Vehicle Storage </p>
                </Link>
              </div>
            </div>
  
            <div className="col-6 col-md-3 col-lg-2">
              <div className="wow storage-solution zoomIn">
              <Link to="/gvs-services">
                <div className="storage-img-block">
                    <img src={Environment.STATIC_FILES_END_POINT_URL + "img/gsv-storage.png"} alt="gvs storage" />
                </div>
                <p className="title"> GVS  Storage </p>
                </Link>
              </div>
            </div>
            
            <div className="storage-sol-padding"> </div>

          </div>

        </div>
      </section>
    )
}
}

export default HomeStorageSolutions;

