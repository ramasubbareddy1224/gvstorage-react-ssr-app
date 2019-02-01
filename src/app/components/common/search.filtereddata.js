import React, { Component } from 'react';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import { getAllSitesByFilters } from '../../../modules/actioncreators/search.actioncreator';
import {Environment} from '../../../configurations/environment';
import {Redirect} from 'react-router-dom';
import EventsMapPage from '../../components/googlemap/events_map_page';
import StarRatings from 'react-star-ratings';

export default class SearchFilteredData extends Component{

  constructor(props){
    super(props);
    this.state={
      isLocationCodeClicked: false,
      mapPointers: [],
      tempCenterPoint: 0,
      selectedLocation: {}
    }
  }

  clkRedirectToSelfStorage = (location) =>{
    this.setState({isLocationCodeClicked: true, searchDynamicUrl: `/self-storage/${location.address1}-${location.stateName}-${location.stateCode}-${location.city}-${location.postalCode}/${location.locationCode}`});
  }

  onSitesHover = (index, item)=>{
    this.setState({tempCenterPoint: index, selectedLocation: item})
  }
  

render(){

  if (this.state.isLocationCodeClicked) {
    this.setState({isLocationCodeClicked: false, selectedLocation: {}});

    return <Redirect to={this.state.searchDynamicUrl} />
  }

  console.log(this.props.allFilters);
  var tempMapPointers =[];
  var tempCenterPoint = [];

  const {allSites} = this.props;


  var items = [
    { name: 'Matthew', link: 'https://bible.com/1/mat.1' },
    { name: 'Mark', link: 'https://bible.com/1/mrk.1' },
    { name: 'Luke', link: 'https://bible.com/1/luk.1' },
    { name: 'John', link: 'https://bible.com/1/jhn.1' }
  ];


  var listItems = items.map(function(item) {
    return (
      <div key={item.name}>
        <a className='button' href={item.link}>{item.name}</a>
      </div>
    );
  });

  var divSites = '';
  if(!!allSites.siteLocations){


    // const filteredSites = allSites.siteLocations.filter(x=> (!this.props.allFilters.isVehicleStorageChecked || x.vehicleStorage == true) 
    // && (!this.props.allFilters.isClimateControlledChecked || x.climateControlled == true) 
    // && (!this.props.allFilters.isDriveUpAccessChecked || x.driveupAccess == true) 
    // && (!this.props.allFilters.isWarehouseChecked || x.warehouseOROffice == true) );

    const filteredSites = allSites.siteLocations.filter(x=> 
      (!this.props.allFilters.isVehicleStorageChecked || x.content.vehicle == true) 
    && (!this.props.allFilters.isClimateControlledChecked || x.content.climate == true) 
    && (!this.props.allFilters.isDriveUpAccessChecked || x.content.driveup == true) 
    && (!this.props.allFilters.isWarehouseChecked || x.content.warehouse_office == true) );


    if(filteredSites.length > 0 && Object.keys(this.state.selectedLocation).length == 0) {
      this.setState({selectedLocation: filteredSites[0]})
    }

    //temp =  [];
    //var a = this.props.allFilters;
    //var temp = Object.assign({}, allSites.siteLocations);

  var divSites = filteredSites.map((item,index) => {
    tempMapPointers.push({id: index+1, lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) });
    if (!item.reviewsCount) {
      var reviewsCount = Math.floor(Math.random() * ( 350 - 270 + 1) + 270); 
      var startRating = (Math.random() * ( 5 - 4.5 + 1) + 4.5);    
      item.reviewsCount = reviewsCount;
      item.startRating = startRating;
    }
    var miles = 0;    
    
      !!this.props.content && this.props.content.map((city,cityIndex) => {    
      if(item.locationCode == city.name)
        {
          miles = city.distance;          
        }
    });  

    return (
      <div key={item.siteID}>
        <div className="row" onMouseOver={() => {this.onSitesHover(index, item) }}>
            <div className="col-5 col-sm-4 col-md-4">
              <div className="fav-locations text-center city-level-img"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/citylevel/dallas-2.png"} id={index+1} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                  <div className="location-info" onClick={() => {this.clkRedirectToSelfStorage(item) }}>
                    <h2 className=""> {index+1} </h2>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-7 col-sm-8 col-md-8 search-left-panel">
              <h6 className="mb-0" onClick={() => {this.clkRedirectToSelfStorage(item) }}> Great Value Storage {item.city} {item.stateCode} </h6> {/*{!!item.content ? item.content.name : item.name} */}
              { this.props.pageName == "self-storage" && <p className="mb-0 small miles"> {miles} Miles<br /> </p> }
              <p className="mb-0 small"> {item.address1} <br />
              {item.city}, {item.stateCode} {item.postalCode} </p>
                <p className="reviews "> 
                <StarRatings
                  rating={item.startRating}
                  starRatedColor="#ffc107"         
                  numberOfStars={5}
                  starDimension="20px"                  
                  name='rating'
                  starSpacing="0px"
                />
                {/* <span><i className="text-warning fa fa-star small"></i></span>
                <span><i className="text-warning fa fa-star"></i></span>
                <span><i className="text-warning fa fa-star"></i></span>
                <span><i className="text-warning fa fa-star"></i></span>
                <span><i className="text-warning fa fa-star-half-o"></i></span>  */}
                <br />
                <span className="font-weight-bold text-underline"> {item.reviewsCount} reviews  </span>
              </p>
              <a className="btn btn-gvstore btn-success border-0 green-gradient" style={{minWidth:'100px', color: '#fff'}} onClick={() => {this.clkRedirectToSelfStorage(item) }}> View Facility </a>
            </div>
          </div>
          <hr />
          <div className="clearfix"> </div>
      </div>
    );
  });

  if(tempMapPointers.length > 0){
  tempCenterPoint.push(tempMapPointers[0].latitude, tempMapPointers[0].longitude);
  
  }
}
var h = '80vh';
/* if(!!tempMapPointers && tempMapPointers.length ==1){
  h = '30vh';
}
else if(!!tempMapPointers && tempMapPointers.length == 2){
  h = '50vh';
}
setTimeout(function() {
  if(!!document.getElementById("mapHeight")){
  document.getElementById("mapHeight").style.height = h;
  }
}, 200); */

    return(
  <section id="about" className="about-sec individual-city wow fadeInUp pt-1">
    <div className="container-fluid">
    <div className="container-fluid-padding">
      <div className="row w-100 city-view-block">
        <div className="col-12 col-sm-12 col-md-6 content city-pageviews pt-2">  
        {divSites}
          
        </div>
        <div className="col-12 col-sm-12 col-md-6 about-img city-map">
          <div className="city-page-map">
           <div id="map"> </div>
               {/* <SimpleMap></SimpleMap>  */}
              { tempMapPointers.length > 0 && <EventsMapPage mapPointers={tempMapPointers} centerIndex={this.state.tempCenterPoint} selectedLocation={this.state.selectedLocation}></EventsMapPage> }
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
    )
}
}

