import React, { Component } from 'react';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import { getAllSitesByFilters } from '../../../modules/actioncreators/search.actioncreator';
import {Environment} from '../../../configurations/environment';
import {Redirect} from 'react-router-dom';
import EventsMapPage from '../../components/googlemap/events_map_page';

export default class SearchFilteredData extends Component{

  constructor(props){
    super(props);
    this.state={
      isLocationCodeClicked: false,
      mapPointers: [],
      tempCenterPoint: 0
    }
  }

  clkRedirectToSelfStorage = (locationCode) =>{
    this.setState({isLocationCodeClicked: true, searchDynamicUrl: '/self-storage/'+locationCode+''});
  }

  onSitesHover = (index)=>{
    this.setState({tempCenterPoint: index})
  }

render(){

  if (this.state.isLocationCodeClicked) {
    this.setState({isLocationCodeClicked: false});
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


    const filteredSites = allSites.siteLocations.filter(x=> (!this.props.allFilters.isVehicleStorageChecked || x.vehicleStorage == true) 
    && (!this.props.allFilters.isClimateControlledChecked || x.climateControlled == true) 
    && (!this.props.allFilters.isDriveUpAccessChecked || x.driveupAccess == true) 
    && (!this.props.allFilters.isWarehouseChecked || x.warehouseOROffice == true) );
 

    //temp =  [];
    //var a = this.props.allFilters;
    //var temp = Object.assign({}, allSites.siteLocations);

  var divSites = filteredSites.map((item,index) => {
    tempMapPointers.push({id: index+1, lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) });
    return (
      <div key={item.siteID}>
        <div className="row" onMouseOver={() => {this.onSitesHover(index) }}>
            <div className="col-5 col-sm-4 col-md-3">
              <div className="fav-locations text-center city-level-img"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/citylevel/dallas-2.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                  <div className="location-info">
                    <h2 className=""> {index+1} </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 col-sm-8 col-md-9">
              <h5 className="pt-2" onClick={() => {this.clkRedirectToSelfStorage(item.locationCode) }} > {item.city} </h5>
              <p> {item.address1} <br/>
                {item.city}, {item.stateCode} {item.postalCode}</p>
            </div>
          </div>
          <hr />
          <div className="clearfix"> </div>
      </div>
    );
  });

  if(tempMapPointers.length > 0)
  tempCenterPoint.push(tempMapPointers[0].latitude, tempMapPointers[0].longitude)
}


    return(
  <section id="about" className="about-sec individual-city wow fadeInUp">
    <div className="container">
      <div className="row">
        <div className="col-md-6 content city-pageviews pt-2">  
        {divSites}
          
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 about-img">
          <div className="city-page-map">
           <div id="map"> </div>
               {/* <SimpleMap></SimpleMap>  */}
              { tempMapPointers.length > 0 && <EventsMapPage mapPointers={tempMapPointers} centerIndex={this.state.tempCenterPoint}></EventsMapPage> }
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
}

