import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Redirect,Link} from 'react-router-dom';

class CommonNearBy extends Component{

  constructor(props)
  {
    super(props);   
    this.state={
      isLocationClicked: false
    }
    this.redirectToTarget=this.redirectToTarget.bind(this);
  }

  // shouldComponentUpdate(nextProps) {
  //   return (Object.keys(nextProps.allPinCodes_Sites).length==0)   
  // }
 
  redirectToTarget=(event,filterName)=>{
    // onClick={(event) =>{this.redirectToTarget(city.city,event)}}
    event.stopPropagation();
    this.setState({isLocationClicked: true, searchDynamicUrl: '/search/'+filterName+''});
  }

render(){


    return(
        <div className="container">
          <h2 className=" pt-5 pb-5 text-center"> Storage Facilities Near   
          <span className="nav-menu sf-js-enabled sf-arrows d-inline-block text-left storage-droupdown">
            <li className="menu-has-children text-left"><a href="#" className="sf-with-ul header-text gv-text-color">Locations</a>
           
          </li>
          </span>
          </h2>
          
          <div className="row">
            <div className="col-12 col-md-3">
                <div className="storage-location-info ">
                <div className="storage-location-info-img">
                  <img src="img/Services/texas-storage-near.png" className="img-fluid"  alt="..." />
                </div>
                <div className="area-info">
                <h5> Texas City </h5>
                <p> 1910 25th Ave N <br />
                    Texas City, TX 77590	</p>
                <p className="reviews"> 
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star-o"></i></span> 
                  <br />
                  150 reviews             
                </p>
                <div className="readmore pt-2">
                  <div className="btn btn-gvstore btn-success border-0 green-gradient"> View facility  </div>
                </div>
                </div>
              </div>
              
            </div>
           
            <div className="col-12 col-md-3">
                <div className="storage-location-info ">
               <div className="storage-location-info-img">
                <img src="img/Services/Southwest-storage-near.png" className="img-fluid"  alt="..." />
              </div>
                <div className="area-info">
                <h5> Southwest Houston </h5>
                <p> 6250 Westward Ln <br />
                Houston, TX 77081	</p>
                <p className="reviews"> 
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star-o"></i></span> 
                  <br />
                  15 reviews             
                </p>
                <div className="readmore pt-2">
                  <div className="btn btn-gvstore btn-success border-0 green-gradient"> View facility  </div>
                </div>
                </div>
              </div>
              
            </div>
            
            <div className="col-12 col-md-3">
                <div className="storage-location-info ">
              <div className="brand-border storage-location-info-img">
                <img src="img/Services/Fort-Worth-storage-near.png" className="img-fluid"  alt="..." />
               </div>
                <div className="area-info">
                <h5> Fort Worth </h5>
                <p> 4901 South Fwy <br />Fort Worth, TX 76115	</p>
                <p className="reviews"> 
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star-o"></i></span> 
                  <br />
                  12 reviews             
                </p>
                <div className="readmore pt-2">
                  <div className="btn btn-gvstore btn-success border-0 green-gradient"> View facility  </div>
                </div>
                </div>
              </div>
              
            </div>
            
            <div className="col-12 col-md-3">
                <div className="storage-location-info ">
               <div className="storage-location-info-img">
                <img src="img/Services/deer-park-storage-near.png" className="img-fluid"  alt="..." />
               </div>
                <div className="area-info">
                <h5> Deer Park </h5>
                <p> 4806 Marie Lane <br />Deer Park, TX 77536	</p>
                <p className="reviews"> 
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star-o"></i></span> 
                  <br />
                  123 reviews             
                </p>
                <div className="readmore pt-2">
                  <div className="btn btn-gvstore btn-success border-0 green-gradient"> View facility  </div>
                </div>
                </div>
              </div>
              
            </div>
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