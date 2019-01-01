import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class HomeLocations extends Component{
render(){
    return(
        <section id="about" className="wow fadeInDown">
    
        <div className="container">
          <h2 className="text-center p-3 ">Our Locations</h2>
          <div className="row">
            <div className="col-6 col-md-2">
                <div className="fav-locations text-center">
                <img src={Environment.STATIC_FILES_END_POINT_URL + "img/texas.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                    <div className="location-info">
                    <h2 className="wow fadeInUp"> TX </h2>
                    </div>
                </div>
                <p> Texas </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
            <div className="fav-locations text-center">
                <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Tennessee.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                    <div className="location-info">
                    <h2 className="wow fadeInUp"> TN </h2>
                    </div>
                </div>
                  <p> Tennessee </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
            <div className="fav-locations text-center">
                <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Ohio.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                    <div className="location-info">
                    <h2 className="wow fadeInUp"> OH </h2>
                    </div>
                </div>
                  <p> Ohio </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
            <div className="fav-locations text-center">
                <img src={Environment.STATIC_FILES_END_POINT_URL + "img/New-York.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                    <div className="location-info">
                    <h2 className="wow fadeInUp"> NY </h2>
                    </div>
                </div>
                  <p> New York </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
            <div className="fav-locations text-center">
                <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Nevada.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                    <div className="location-info">
                    <h2 className="wow fadeInUp"> NV </h2>
                    </div>
                </div>
                  <p> Nevada </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
            <div className="fav-locations text-center">
                <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Missouri.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                    <div className="location-info">
                    <h2 className="wow fadeInUp"> MO </h2>
                    </div>
                </div>
                  <p> Missouri </p>
              </div>
            </div>
            
          </div>
          <div className="clearfix"> </div> 
          <div className="row">
            <div className="col-md-1"> </div>
            <div className="col-6 col-md-2">
            <div className="fav-locations text-center">
                <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Mississippi.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                    <div className="location-info">
                    <h2 className="wow fadeInUp"> MI </h2>
                    </div>
                </div>
                  <p> Mississippi </p>
              </div>
            </div>
            <div className="col-6  col-md-2">
            <div className="fav-locations text-center">
                <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Indiana.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                    <div className="location-info">
                    <h2 className="wow fadeInUp"> IN </h2>
                    </div>
                </div>
                  <p> Indiana </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
            <div className="fav-locations text-center">
                <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Illinois.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                    <div className="location-info">
                    <h2 className="wow fadeInUp"> IL </h2>
                    </div>
                </div>
                  <p> Illinois </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
            <div className="fav-locations text-center">
                <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Colorado.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                    <div className="location-info">
                    <h2 className="wow fadeInUp"> CO </h2>
                    </div>
                </div>
                  <p> Colorado </p>
              </div>
            </div>
            <div className="col-6 col-md-2">
            <div className="fav-locations text-center">
                <img src={Environment.STATIC_FILES_END_POINT_URL + "img/California.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                    <div className="location-info">
                    <h2 className="wow fadeInUp"> CA </h2>
                    </div>
                </div>
                  <p> California </p>
              </div>
            </div>
          <div className="col-md-1"> </div>
          </div>
  
        </div>
      </section>
    )
}
}

export default HomeLocations;