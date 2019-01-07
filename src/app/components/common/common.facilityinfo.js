import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Redirect} from 'react-router-dom';

class CommonFacilityInfo extends Component{

  constructor()
  {
    super();
  }
 


render(){

    return(
        <div className="col-12 col-md-4 ">
        <div className="facility-info">
            <div className="pt-3">
                <h5> Facility Information </h5>
            </div>
            
            <div className="facility-data">
            <div className="data-heading">
                <p> LOCATION  <span className=" pull-right gv-text-color"> Change Location </span></p>
            </div>
            <div className="data-info">
                <p> Texas Storage Park Self Storage </p>
            </div>
            </div>
            
            <div className="facility-data">
            <div className="data-heading">
                <p> UNIT SIZE  <span className=" pull-right gv-text-color"> Change unit </span></p>
            </div>
            <div className="data-info">
                <p> 8 X 10 - Medium </p>
            </div>
            </div>
            
            <div className="facility-data">
            <div className="data-heading">
                <p> Monthly Rent  </p>
            </div>
            <div className="data-info">
                <div className="rate-varision">
                        <p className="d-inline-block rate-info w-45 text-muted"> ONSITE <br />
                          <strong ><del> $54 </del></strong> </p>
                        <p className="d-inline-block rate-info w-45"> ONSITE  <br />
                          <strong className="gv-text-color"> $45 </strong> </p>
                      </div>
                <p className="small"> Covers up to $2,000 USD ($10.95 USD / monthly) </p>
            </div>
            </div>
            
            <div className="facility-data">
            <div className="data-heading">
                <p> MOVE-IN CHARGES </p>
            </div>
            <div className="data-info">
                <p className="small"> 1st month rent: $39.97 USD <br />
                Admin fee: $22.00 USD  <br />
                1st month protection: $7.42 USD </p>
            </div>
            
            <h2 className="gv-text-color"> $69.39 </h2>
            </div>
            
            </div>
            
        </div>
    )
}
}

export default CommonFacilityInfo;