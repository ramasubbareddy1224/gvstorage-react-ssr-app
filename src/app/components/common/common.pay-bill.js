import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Redirect,Link} from 'react-router-dom';

class CommonPayBill extends Component{

    constructor(props)
    {
        super(props);   
        this.state = {
            isLocationClicked: false,
            locationCode: ''
        }
    }

    componentDidMount(){
       
    }

    clkSiteLocation(locationCode){
        let $ = require('jquery');
        document.getElementById('div-preloader').style.display = 'block';
        this.setState({isLocationClicked: true, locationCode: locationCode});

        setTimeout(() => {
            $('#myIframe').on('load', function(){
                document.getElementById('div-preloader').style.display = 'none';
            });
        }, 100);
      
    }
    backToLocations(){
        this.setState({isLocationClicked: false});
    }

  
    render(){
        const {allPinCodes_Sites} = this.props;

        const divLocations = !!allPinCodes_Sites && allPinCodes_Sites.length > 0 &&
        allPinCodes_Sites[1].locations.map((state,index)=>{
            return(
               
<div id="accordion" className="login-ac" key={index}>
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="login-head mb-0">
        <button className="btn btn-link w-100 text-left " data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>              
                {state.stateName}  &nbsp; <i className="fa" aria-hidden="true"></i>
        </button>
      </h5>
    </div>

    <div id={`collapse${index}`} className={`collapse ${index == 0 && 'show'}`} aria-labelledby="headingOne" data-parent="#accordion">
      <div className="login-ad-details">
      
        <div className="">
        <div className="pay-bill-list">
          <ul>{
              state.cities.map((city,cityIndex)=>{
                  return(
                    <div key={cityIndex}>
                        <ul>
                            {
                                city.locations.map((location, locationIndex)=>{
                                    return(
                                        <li key={locationIndex}>
                                          <span onClick={() =>this.clkSiteLocation(location.locationCode)}> <strong className="font-weight-bold cursor-pointer"> {city.city} </strong></span>
                                           <br/>
                                            {location.name}, {location.postalCode}
                                            <br/>
                                            {/* {location.address1} <br/> {location.stateCode},  {location.postalCode} */}

                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                  )
              })
          }
        
          </ul>
          
        </div>
        </div>
            
          </div>
          </div>
  </div>
  </div>

            )
        })
        return(
            <section id="about" className="rent-sec wow fadeInUp ">
            <div className="container-fluid">
            <div className="container-fluid-padding">
            
            <div className="storage-size w-100">
            {this.state.isLocationClicked &&
            <div className="">
            <div className="col-12 col-md-12 ">
            <input type="button" className="btn btn-gvstore btn-success border-0 green-gradient float-right" onClick={()=>this.backToLocations()}  value="Back to Locations"/> 
                </div>
                </div>
            }
                  <div className="row">
                 
                  <div className="col-12 col-md-12 ">
                        {/* <iframe className="iframe-pay-login" src="https://www.smdservers.net/SLWebSiteTemplate_V2/login.aspx?sCorpCode=CCTST&sLocationCode=DEMO4&1=1" /> */}
        {!this.state.isLocationClicked && divLocations
        }       

        { this.state.isLocationClicked &&
              <iframe className="iframe-pay-login" id="myIframe" src={`${Environment.IFRAME_URL}${this.state.locationCode}`} /> 
            }         

                  </div>
                  </div>
            </div>
            
            
              </div>
            </div>
          </section>
        )
    }
}

export default CommonPayBill;