import React, { Component } from 'react';
import InputRange from 'react-input-range';
import {Environment} from '../../../configurations/environment';
import { timeout } from 'q';
import {Link} from 'react-router-dom';


var filteredUnits = {};
class SelfStorageFilteredData extends Component{
  
  constructor(props) {
    super(props);
 
    this.state = {
      value: { min: 0, max: 300 },
      originalUnits: {},
      allUnits: {},
      storageFilters: [
        {Name: 'Walk-In Closet', min:-1, max: 51 },
        {Name: 'Mid-Size Bedroom', min: 50, max:101},
        {Name: 'Family Room', min: 100, max:151},
        {Name: '3 Bed Rooms', min: 150, max:201},
        {Name: 'Full House', min: 200, max:251},
        {Name: 'Large House', min: 250, max:301}],
        filteredUnitTypes: []
    };
  }

  onDimensionRangeChange(){
   // console.log(!!this.props.allUnits.units && this.props.allUnits.units.map(({unitTypeName}) => unitTypeName).filter((value, index, self) => self.indexOf(value) === index))

    // if(!!this.props.allUnits.units){
    //   var allCheckboxFilterValues = 
    //   this.props.allUnits.units.map(({unitTypeName}) => unitTypeName).filter((value, index, self) => self.indexOf(value) === index);

    //   var maxFilter = this.state.storageFilters.filter(x=> x.min < this.state.value.max && x.max > this.state.value.max)[0].Name;
    //   var minFilter = this.state.storageFilters.filter(x=> x.min < this.state.value.min && x.max > this.state.value.min)[0].Name;

    //   var tempFilterData = this.state.filteredUnitTypes;
    //   var tempObj = minFilter + ' - ' + maxFilter;
    //   tempFilterData.push(tempObj);
    //   this.setState({filteredUnitTypes:tempFilterData});
    // }

    /*    
    var maxFilter = this.state.storageFilters.filter(x=> x.min < this.state.value.max && x.max > this.state.value.max)[0].Name;
    var minFilter = this.state.storageFilters.filter(x=> x.min < this.state.value.min && x.max > this.state.value.min)[0].Name;

    var tempFilterData = this.state.filteredUnitTypes;
    var originalFilterData = this.state.filteredUnitTypes;

    tempFilterData.forEach(x => {
      console.log(x);
      this.state.storageFilters.forEach(y => 
        {
          if( x.indexOf(y.Name) > -1){
              originalFilterData = originalFilterData.filter(z=> z != x)
          }
        }
      );
    });
    console.log(originalFilterData)

    var tempObj = minFilter + ' - ' + maxFilter;
    tempFilterData.push(tempObj);

    */
   // this.setState({filteredUnitTypes:tempFilterData});


      var maxFilter = this.state.storageFilters.filter(x=> x.min < this.state.value.max && x.max > this.state.value.max)[0].Name;
      var minFilter = this.state.storageFilters.filter(x=> x.min < this.state.value.min && x.max > this.state.value.min)[0].Name;

      var tempFilterData = this.state.filteredUnitTypes;

      tempFilterData = tempFilterData.filter(x=> x.isCheckbox);

      var tempVal = minFilter + ' - ' + maxFilter;
      tempFilterData.push({unitTypeName: tempVal, isCheckbox: false});
      this.setState({filteredUnitTypes:tempFilterData});


  }

  onChangeFilter=(event, unitTypeName)=>{
      var tempFilterData = this.state.filteredUnitTypes;
     
      if(event.target.checked){
        tempFilterData.push({unitTypeName: unitTypeName, isCheckbox: true});
      }
      else{
        tempFilterData = tempFilterData.filter(x=> x.unitTypeName != unitTypeName)
      }
      this.setState({filteredUnitTypes:tempFilterData});

  }

  removeFilterClick=(val)=>{
    if(!!val){
    var tempFilterData = this.state.filteredUnitTypes;
    
    if(!!document.getElementsByName(val)[0]){
      (document.getElementsByName(val)[0].checked = false);
    }
    else{
     var rangeValues = { min: 0, max: 300 };
        this.setState({value: rangeValues});
    }; 
    tempFilterData = tempFilterData.filter(x=> x.unitTypeName != val)
    this.setState({filteredUnitTypes:tempFilterData})
    }
    else {
      var tempFilterData = this.state.filteredUnitTypes;

      // document.getElementsByName(val)[0].checked = false;
     tempFilterData.forEach(x=>   
      {
        if(!!document.getElementsByName(x.unitTypeName)[0]){
          document.getElementsByName(x.unitTypeName)[0].checked = false;
        }
        else{
          var rangeValues = { min: 0, max: 300 };
          this.setState({value: rangeValues});
        }
      }
    );
     this.setState({filteredUnitTypes: []});
    }
  }

   scrollTabClick(value){
    let $=require('jquery');
    $('html, body').animate({ scrollTop: $(`#selfstorage${value}`).offset().top }, 'slow');
    
     //'feature'
   }


render(){

   
const {allUnits} = this.props;
const {pathParams} = this.props;

//console.log('sa ' + this.state.filteredUnitTypes);

  var divUnits = '';
  if(!!allUnits.units){
    //temp =  [];
    //var a = this.props.allFilters;
    //var temp = Object.assign({}, allSites.siteLocations);
    //filteredUnits = this.props.allUnits;
    if(this.state.value.max < 300){
      filteredUnits = this.props.allUnits.units.filter((item)=> {
        return ( (item.unitLength * item.unitWidth) >= this.state.value.min && (item.unitLength * item.unitWidth) <= this.state.value.max );
      });
    }
    else{
      filteredUnits = this.props.allUnits.units.filter((item)=> {
        return ( (item.unitLength * item.unitWidth) >= this.state.value.min);
      });

    }

    if(this.state.filteredUnitTypes.length > 0){
      if(this.state.filteredUnitTypes.filter(utn=>utn.isCheckbox).map(utn=>utn.unitTypeName).length > 0){
      filteredUnits = filteredUnits.filter(x=> this.state.filteredUnitTypes.filter(utn=>utn.isCheckbox).map(utn=>utn.unitTypeName).indexOf(x.unitTypeName) > -1)
    }
    }

  var divUnits = filteredUnits.map((item,index) => {
    return (
      <tr key={index}>
                            <td><div className="unit-size"> <strong>{item.unitWidth}X{item.unitLength}</strong> </div>
                            {
                              item.openUnits == 1 &&
<p className="small text-danger pt-2 pl-3 m-0"><b>{item.openUnits} Unit left</b></p> 
                            }
                            
                            </td>
                            <td><h5> {item.unitTypeName} </h5>
                              <p className="mb-0">
                              {item.floor} </p>
                               <p  className="mb-0"> {item.indoor}  </p>
                               <p  className="mb-0"> {item.entryLocation}
                                </p>
                            </td>
                            <td><div className="gv-text-color"> <strong> {item.specialOffer} </strong> </div></td>
                            <td style={{width:"33%"}}><div className="rate-varision">
                                { !!item.onsiteRate &&
                                <p className="d-inline-block rate-info" style={{color: '#c6c6c6'}}> 
                                <span className="fotnt-weight-normal"> WALKIN RATE </span><br />
                                  <strong ><del> ${item.onsiteRate} </del></strong> </p>
                                  }
                                <p className="d-inline-block rate-info"> <span className="fotnt-weight-normal"> ONLINE RATE </span><br />
                                  <strong className="gv-text-color"> ${item.webRate} </strong> </p>
                              </div></td>
                            <td className="text-center">
                            <Link to={`/rent/self-storage/${pathParams.metaParam}/${pathParams.locationCode}/${item.firstAvailableUnitID}`}>
                            <div className="btn btn-gvstore btn-success border-0 green-gradient">
                             Rent Now 
                            </div></Link>
                            <Link to={`/reserve/self-storage/${pathParams.metaParam}/${pathParams.locationCode}/${item.firstAvailableUnitID}`}>
                              <div className="gv-text-color"> <strong> Reserve for free </strong> </div>
                              </Link> 
                              </td>
                          </tr>
    );
  });
  var mobileDivUnits = filteredUnits.map((item, index) => {
    return (
      <div className="unit-facility-data">
        <div className="row m-unit">
          <div className="col-5"> Unit Size </div>
          <div className="col-7"> <div className="unit-size"> <strong>{item.unitWidth}X{item.unitLength}</strong> </div>
            {
              item.openUnits == 1 &&
              <p className="small text-danger pt-2 pl-3 m-0"><b>{item.openUnits} Unit left</b></p>
            } </div>
        </div>

        <div className="row m-features">
          <div className="col-5"> Features </div>
          <div className="col-7"> <h5> {item.unitTypeName} </h5>
          {!!item.floor &&  <p className="mb-0">
              {item.floor} </p>} 
          {!!item.indoor && <p className="mb-0"> <span> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/gv-billit-points.png"} alt="" />  </span>
            {item.indoor} </p>}  
          {!!item.entryLocation &&  <p className="mb-0"> <span> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/gv-billit-points.png"} alt=""/> </span> {item.entryLocation}
            </p>}
            </div>
        </div>

        <div className="row m-offers">
          <div className="col-5"> Offers </div>
          <div className="col-7"> 
          <div className="gv-text-color"> <strong> {item.specialOffer} </strong> 
          </div> </div>
        </div>

        <div className="row m-rate">
          <div className="col-5"> Rates </div>
          <div className="col-7"> <div className="rate-varision">
            {!!item.onsiteRate &&
              <p className="d-inline-block rate-info" style={{ color: '#c6c6c6' }}>
                <span className="fotnt-weight-normal"> WALKIN RATE </span><br />
                <strong ><del> ${item.onsiteRate} </del></strong> </p>
            }
            <p className="d-inline-block rate-info"> <span className="fotnt-weight-normal"> ONLINE RATE </span><br />
              <strong className="gv-text-color"> ${item.webRate} </strong> </p>
          </div> </div>
        </div>

        <div className="row m-getunit">
          <div className="col-5"> Get your units </div>
          <div className="col-7"> <div className="btn btn-gvstore btn-success border-0 green-gradient">
            <Link to={`/rent/self-storage/${pathParams.metaParam}/${pathParams.locationCode}/${item.firstAvailableUnitID}`}> Rent Now </Link>
          </div>
            <div className="gv-text-color"> <strong><Link to={`/reserve/self-storage/${pathParams.metaParam}/${pathParams.locationCode}/${item.firstAvailableUnitID}`}> Reserve for free </Link> </strong> </div> </div>
        </div>
        <hr/>
      </div>
    );
  });

    
    var divFilters = !!allUnits.units && allUnits.units.map(({unitTypeName}) => unitTypeName).filter((value, index, self) => self.indexOf(value) === index).map((unitTypeName)=>  {
      return(
      <div className="form-check" key={unitTypeName}>
      <label className="customcheck"> {unitTypeName}
      <input type="checkbox" name={unitTypeName}  onChange={(event) => {this.onChangeFilter(event, unitTypeName)}}  />
      <span className="checkmark"></span>
    </label>
    </div>
    )
    });
}

const divAppliedFilters =  this.state.filteredUnitTypes.map((val,index)=> {
  return(
    <div className="checked-filter" key={index}>
    <p className="small">  {val.unitTypeName}  &nbsp; &nbsp; 
      <i className="fa fa-times-circle" aria-hidden="true" onClick={()=> {this.removeFilterClick(val.unitTypeName)}} ></i>
    </p>
    </div>
  )
})




    return(
        <section className="facility-filter-tabs pt-5 wow fadeInUp">
        <div className="container-fluid">
        <div className="container-fluid-padding">
          <div className="row">
            <div className=" col-12 facility-tabs">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item"> <a className="nav-link active" id="home-tab" data-toggle="tab" href="#storage" role="tab" aria-controls="home" aria-selected="true"> Storage units </a> </li>
                <li className="nav-item cursor-pointer" onClick={()=>this.scrollTabClick('features')}> <a className="nav-link" id="profile-tab"  role="tab" aria-controls="profile" aria-selected="false"> Features </a> </li>
                {/* <li className="nav-item"> <a className="nav-link" id="contact-tab" role="tab" aria-controls="contact" aria-selected="false"> Reviews </a> </li> */}
                <li className="nav-item cursor-pointer" onClick={()=> this.scrollTabClick('whatfits')}> <a className="nav-link" id="contact-tab" role="tab" aria-controls="contact" aria-selected="false"> What Fits Inside </a> </li>
                
                <li className="nav-item pull-right storage-filters"> <a href="#" className="nav-link"> <i className="fa fa-sliders" aria-hidden="true"></i>  Storage Filters </a> </li>
              </ul>
              
             <div className="storage-filters-block">
                     <div className="col-12 pt-3">
                    <h5> How much storage do you need?  </h5>
                    <div className="filter-megerments pt-2 pb-2">
                    <br />
                    <InputRange
        maxValue={300}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })}
        onChangeComplete={() => { this.onDimensionRangeChange()}}
        />
        
        <div className="filter-blocks">
                    	<div className="filter-blockitems"> </div>
                        <div className="row">
                        	<div className="col-md-2">
                            <div className=" block-item-list">
                             <span className="range-line"> </span>
                             Walk-In Closet </div>
                             </div>
                             
                            <div className="col-md-2"> 
                            <div className=" block-item-list">
                            <span className="range-line"> </span>
                            Mid-Size Bedroom </div>
                            </div>
                            
                            <div className="col-md-2"> 
                            <div className=" block-item-list">
                            <span className="range-line"> </span>
                            Family Room </div>
                            </div>
                            
                            <div className="col-md-2"> 
                            <div className=" block-item-list">
                            <span className="range-line"> </span>
                            3 Bed Rooms </div>
                            </div>
                            
                            <div className="col-md-2"> 
                            <div className=" block-item-list">
                            <span className="range-line"> </span>
                            Full House </div>
                            </div>
                            <div className="col-md-2"> 
                            <div className=" block-item-list">
                            Large House </div>
                        </div>
                        </div>
                    </div>

                    <br />
                    </div>
                    <div className="selected-filters small">
                       
                        {divFilters}

                        
                        <div className="space-tool">
                            <div className="view-space-tool">
                            <img src={Environment.STATIC_FILES_END_POINT_URL + "img/facility/direction-icon.png"} /> View space estimator tool
                            </div>
                        </div>
    
                    </div>
                    
                  </div> 
             </div>
             
             
             <div className="applied-filters">
                {divAppliedFilters}
                {
                  !!this.state.filteredUnitTypes.length > 0 && 
                  <div className="checked-filter red" onClick={()=> {this.removeFilterClick()}}>
                      <p className="small "> Clear FIlters  </p>
                  </div>
                }

             </div>
              
              <div className="tab-content filter-tab-content" id="myTabContent">
                <div className="tab-pane fade show active "  role="tabpanel" aria-labelledby="home-tab">
                  <div className="facility-grid">
                    <div className="table-responsive desktop">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col"> Unit Size </th>
                            <th scope="col"> Features </th>
                            <th scope="col"> Offers </th>
                            <th scope="col" className="text-center"> Rates </th>
                            <th scope="col" className="text-center"> Get your units </th>
                           {/*  <th> </th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {divUnits}
                          {divUnits == '' ? <h6  className="text-center pt-3"><strong> No units available. Contact your Storage Facility Toll free number 877-537-8123 </strong></h6>: divUnits}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mobile mobile-view">
                        {mobileDivUnits}
                      </div>

                </div>
                <div className="tab-pane fade" id="features" role="tabpanel" aria-labelledby="profile-tab"> Features </div>
                <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="contact-tab"> Reviews </div>
                <div className="tab-pane fade" id="fitsInside" role="tabpanel" aria-labelledby="contact-tab"> What Fits Inside </div>
              </div>
            </div>
          </div>
          <div className="clearfix"> </div>
          {!!allUnits && !!allUnits.siteLocation &&
          <div className="help-no">
            <p className="text-center"> Other unit sizes may be available. Call <strong className="font-weight-bold">{allUnits.siteLocation.phone}</strong> for more information. </p>
          </div>
          }
          </div>
        </div>
      </section>
    )
}
}

export default SelfStorageFilteredData;