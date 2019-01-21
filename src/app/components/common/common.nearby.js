import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Redirect,Link} from 'react-router-dom';

class CommonNearBy extends Component{

  constructor(props)
  {
    super(props);   
    this.state={
      isLocationCodeClicked: false,
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   return (Object.keys(nextProps.allPinCodes_Sites).length==0)   
  // }
 
  clkRedirectToSelfStorage = (locationCode) =>{
    this.setState({isLocationCodeClicked: true, searchDynamicUrl: '/self-storage/'+locationCode+''});
  }

render(){

  if (this.state.isLocationCodeClicked) {
    this.setState({isLocationCodeClicked: false, selectedLocation: {}});

    return <Redirect to={this.state.searchDynamicUrl} />
  }

    const {nearByLocations} = this.props;

    const divNearByLocations = nearByLocations.map((location,index)=>{
      return <div className="col-12 col-md-3" key={index}>
                <div className="storage-location-info ">
               <div className="storage-location-info-img">
                <img src="img/Services/deer-park-storage-near.png" className="img-fluid"  alt="..." />
               </div>
                <div className="area-info">
                <h5 className="cursor-pointer" onClick={() => {this.clkRedirectToSelfStorage(location.locationCode) }}> {location.city}</h5>
                <p> {location.address1}, <br /> {location.stateCode} {location.postalCode}</p>
                
                <p className="reviews"> 
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star-half-o"></i></span> 
                  <br />
                  150 reviews             
                </p>
                <div className="readmore pt-2">
                  <div className="btn btn-gvstore btn-success border-0 green-gradient" onClick={() => {this.clkRedirectToSelfStorage(location.locationCode) }}> View facility  </div>
                </div>
                </div>
              </div>
              
            </div>
    })

    return(
        <div className="container">
          <h2 className=" pt-5 pb-5 text-center"> Storage Facilities Near   
          <span className="nav-menu sf-js-enabled sf-arrows d-inline-block text-left storage-droupdown">
            <li className="menu-has-children text-left"><a href="#" className="sf-with-ul header-text gv-text-color">{nearByLocations[0].city}</a>
           
          </li>
          </span>
          </h2>
          
          <div className="row">
            
            {divNearByLocations}
            
          </div>
  
          <div className="clearfix"> </div> <br />
          
       <div className="view-more mt-5"> 
            <p className="text-center p-2"> View More Storage facilities in dallas </p>
        </div>
        
        </div>
        
    
    )
}
}

export default CommonNearBy;