import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class HomeLocations extends Component{
render(){


    const { allPinCodes_Sites } = this.props;


    var divLocations = '';
    if(Object.keys(allPinCodes_Sites).length > 0){
    var divLocations = allPinCodes_Sites[1].locations.map(function(item,index) {
  
    return (
        <div className="col-6 col-md-2" key={index}>
        <div className="fav-locations text-center">
            <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Missouri.png"} className="img-fluid"  alt="..." />
            <div className="location-overlay clearfix">
                <div className="location-info">
                <h2 className="wow fadeInUp"> {item.stateCode} </h2>
                </div>
            </div>
              <p> {item.stateName} </p>
          </div>
        </div>
    );
  });
    }

    return(
        <section id="about" className="wow fadeInDown">
    
        <div className="container">
          <h2 className="text-center p-3 ">Our Locations</h2>
          <div className="row">
           {divLocations}
          </div>
        </div>
      </section>
    )
}
}

export default HomeLocations;