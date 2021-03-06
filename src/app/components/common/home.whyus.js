import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class HomeWhyUs extends Component{
render(){
    return(
        <section id="clients" className="wow fadeInUp p-3 pb-5">
        <div className="container-fluid">
          <div className="text-center pb-3">
            <h2>Why Choose Great Value Storage</h2>
          </div>
           
          <div className="row why-section text-center pb-5">
          <div className="col-md-1"> </div>
            <div className="col-md-3">
                <div className="why-us-img wow fadeInLeft">
              <div className="storage-location-info-img">
                  <img src={Environment.STATIC_FILES_END_POINT_URL + "img/we-connect.png"} alt="we connect" />
              </div>
              </div>
              <h5> We Connect </h5>
              <p> Whether you need storage for one month or two years, we believe your storage experience should be about connecting with people on a personal level. </p>
            </div>
          
            <div className=" col-md-3 coloum-space">
                <div className="why-us-img wow fadeInUp">
              <div className="storage-location-info-img">
                  <img src={Environment.STATIC_FILES_END_POINT_URL + "img/we-customise.png"} alt="we connect" />
              </div>
              </div>
              <h5> We Customise </h5>
              <p>At Great Value Storage youll be greeted wit ha smiles, war, wecome and a stronge expect who's here to understand your indivudual needs. </p>
            </div>
            
            <div className="col-md-3">
                <div className="why-us-img wow fadeInRight">
              <div className="storage-location-info-img">
                  <img src={Environment.STATIC_FILES_END_POINT_URL + "img/we-create.png"} alt="we connect" />
              </div>
              </div>
              <h5> We Create Value </h5>
              <p> From strong to moving and beyond you can be sure well provide you with grat prices, the amenities you expect and additional resources to make you stay stress free. </p>
            </div>
          </div>        
          <div className="clearfix"> </div>
          {/* <div className="readmore text-center">
              <div className="btn btn-gvstore btn-success border-0 green-gradient"> Read More  </div>
          </div> */}
  
        </div>
      </section>
    )
}
}

export default HomeWhyUs;