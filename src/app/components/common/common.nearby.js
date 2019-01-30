import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Redirect,Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';
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
 
  clkRedirectToSelfStorage = (location) =>{
    this.setState({isLocationCodeClicked: true, searchDynamicUrl: `/self-storage/${location.address1}-${location.stateName}-${location.stateCode}-${location.city}-${location.postalCode}/${location.locationCode}`});
  }

render(){

  if (this.state.isLocationCodeClicked) {
    this.setState({isLocationCodeClicked: false, selectedLocation: {}});

    return <Redirect to={this.state.searchDynamicUrl} />
  }

    const {nearByLocations} = this.props;

    const divNearByLocations = nearByLocations.map((location,index)=>{

      if (!location.reviewsCount) {
        var reviewsCount = Math.floor(Math.random() * ( 350 - 270 + 1) + 270); 
        var startRating = (Math.random() * ( 5 - 4.5 + 1) + 4.5);    
        location.reviewsCount = reviewsCount;
        location.startRating = startRating;
      }

      return <div className="col-12 col-sm-6 col-md-6 col-lg-3" key={index}>
                <div className="storage-location-info ">
               <div className="storage-location-info-img storage-location-info-img-1 ">
                <img src="img/Services/deer-park-storage-near.png" className="img-fluid"  alt="..." />
               </div>
                <div className="area-info pl-3">
                <h5 className="cursor-pointer mb-0" onClick={() => {this.clkRedirectToSelfStorage( location ) }}> {location.city}</h5>
                <p className="mb-0"> {location.address1}, <br /> {location.stateCode} {location.postalCode}</p>
                
                <p className="reviews mb-0"> 
                <StarRatings
                  rating={location.startRating}
                  starRatedColor="#ffc107"         
                  numberOfStars={5}
                  starDimension="20px"                  
                  name='rating'
                  starSpacing="0px"
                />
                 {/*  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star-half-o"></i></span>  */}
                  <br />
                  { location.reviewsCount } reviews             
                </p>
                <div className="readmore pt-2">
                  <div className="btn btn-gvstore btn-success border-0 green-gradient" onClick={() => {this.clkRedirectToSelfStorage(location) }}> View facility  </div>
                </div>
                </div>
              </div>
              
            </div>
    })

    return(
        <div className="container-fluid">
        <div className="container-fluid-padding">
          <h2 className=" pt-5 pb-5 text-center"> Storage Facilities Near    &nbsp;
          <span className="nav-menu d-inline-block text-left storage-droupdown">
    
            <li className="menu-has-children text-left"><Link to={`/search/${nearByLocations[0].city}`} className="header-text gv-text-color text-underline">{nearByLocations[0].city}</Link>
          </li>
          </span>
          </h2>
          
          <div className="row">
            
            {divNearByLocations}
            
          </div>
  
          <div className="clearfix"> </div> <br />
          
       <div className="view-more mt-5"> 
            <p className="text-center p-2"> View More Storage facilities in  <Link to={`/search/${nearByLocations[0].city}`}>{nearByLocations[0].city} </Link> </p>
        </div>
        </div>
        </div>
        
    
    )
}
}

export default CommonNearBy;