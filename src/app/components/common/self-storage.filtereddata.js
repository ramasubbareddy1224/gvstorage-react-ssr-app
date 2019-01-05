import React, { Component } from 'react';
import InputRange from 'react-input-range';
import {Environment} from '../../../configurations/environment';
import { timeout } from 'q';


var filteredUnits = {};
class SelfStorageFilteredData extends Component{
  
  constructor(props) {
    super(props);
 
    this.state = {
      value: { min: 0, max: 50 },
      originalUnits: {},
      allUnits: {}
    };
  }

  onDimensionRangeChange(){
   // alert(this.state.value);
    // var tempUnits = this.props.allUnits.units.map((item,index)=>{
    //   return item.unitWidth > 0 && item.unitLength <50
    // });
    // filteredUnits = tempUnits;
  }


render(){

   
const {allUnits} = this.props;

  var divUnits = '';
  if(!!allUnits.units){

    
    //temp =  [];
    //var a = this.props.allFilters;
    //var temp = Object.assign({}, allSites.siteLocations);
    //filteredUnits = this.props.allUnits;

    filteredUnits = this.props.allUnits.units.filter((item)=> {
      return ( (item.unitLength * item.unitWidth) >= this.state.value.min && (item.unitLength * item.unitWidth) <= this.state.value.max );
    });

  var divUnits = filteredUnits.map((item,index) => {
    return (
      <tr key={index}>
                            <td><div className="unit-size"> <strong>{item.unitWidth}X{item.unitLength}</strong> </div></td>
                            <td><h5> {item.unitTypeName} </h5>
                              <p>{item.floor} <br />
                                {item.indoor} </p></td>
                            <td><div className="gv-text-color"> <strong> {item.specialOffer} </strong> </div></td>
                            <td><div className="rate-varision">
                                <p className="d-inline-block rate-info"> WEB RATE <br />
                                  <strong ><del> ${item.webRate} </del></strong> </p>
                                <p className="d-inline-block rate-info"> ONSITE RATE <br />
                                  <strong className="gv-text-color"> ${item.onsiteRate} </strong> </p>
                              </div></td>
                            <td className="text-right"><div className="btn btn-gvstore btn-success border-0 green-gradient"> Rent Now </div>
                              <div className="gv-text-color"> <strong>Reserve for free</strong> </div></td>
                          </tr>
    );
  });
}

    return(
        <section className="facility-filter-tabs wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className=" col-12 facility-tabs">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item"> <a className="nav-link active" id="home-tab" data-toggle="tab" href="#storage" role="tab" aria-controls="home" aria-selected="true"> Storage units </a> </li>
                <li className="nav-item"> <a className="nav-link" id="profile-tab" data-toggle="tab" href="#features" role="tab" aria-controls="profile" aria-selected="false"> Features </a> </li>
                <li className="nav-item"> <a className="nav-link" id="contact-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="contact" aria-selected="false"> Reviews </a> </li>
                <li className="nav-item"> <a className="nav-link" id="contact-tab" data-toggle="tab" href="#fitsInside" role="tab" aria-controls="contact" aria-selected="false"> What Fits Inside </a> </li>
                
                <li className="nav-item pull-right storage-filters"> <a href="#" className="nav-link"> <i className="fa fa-sliders" aria-hidden="true"></i>  Storage Filters </a> </li>
              </ul>
              
             <div className="storage-filters-block">
                     <div className="col-12 pt-3">
                    <h5> How much storage do you need?  </h5>
                    <div className="filter-megerments pt-2 pb-2">
                    <br />
                    <InputRange
        maxValue={250}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })}
        onChangeComplete={() => { this.onDimensionRangeChange()}}
        />
                    <br />
                    </div>
                    <div className="selected-filters small">
                        <div className="form-check">
                         <label className="customcheck"> Vehicle Storage/Boat RV
                          <input type="checkbox"  />
                          <span className="checkmark"></span>
                        </label>
                        </div>
    
                        <div className="form-check">
                         <label className="customcheck"> Drive-Up Access
                          <input type="checkbox" checked="checked" />
                          <span className="checkmark"></span>
                        </label>
                        </div>
                        
                        <div className="space-tool">
                            <div className="view-space-tool">
                            <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/direction-icon.png"} /> View space estimator tool
                            </div>
                        </div>
    
                    </div>
                    
                  </div> 
             </div>
             
             
             <div className="applied-filters">
                 <div className="checked-filter">
                    <p className="small">  Mid-Size Bedroom - Full House  &nbsp; &nbsp; <i className="fa fa-times-circle" aria-hidden="true"></i></p>
                </div>
                <div className="checked-filter">
                    <p className="small">  Mid-Size Bedroom - Full House &nbsp; &nbsp; <i className="fa fa-times-circle" aria-hidden="true"></i></p>
                </div>
                <div className="checked-filter red">
                    <p className="small "> Clear FIlters  </p>
                </div>
             </div>
              
              <div className="tab-content filter-tab-content" id="myTabContent">
                <div className="tab-pane fade show active"  role="tabpanel" aria-labelledby="home-tab">
                  <div className="facility-grid">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col"> Unit Size </th>
                            <th scope="col"> Features </th>
                            <th scope="col"> Offers </th>
                            <th scope="col" className="text-center"> Rates </th>
                            <th scope="col" className="text-right"> Get your units </th>
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                          {divUnits}
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="features" role="tabpanel" aria-labelledby="profile-tab"> Features </div>
                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="contact-tab"> Reviews </div>
                <div className="tab-pane fade" id="fitsInside" role="tabpanel" aria-labelledby="contact-tab"> What Fits Inside </div>
              </div>
            </div>
          </div>
          <div className="clearfix"> </div>
          <div className="help-no">
            <p className="text-center"> Other unit sizes may be available. Call <strong>(512) 649-0442</strong> for more information. </p>
          </div>
        </div>
      </section>
    )
}
}

export default SelfStorageFilteredData;