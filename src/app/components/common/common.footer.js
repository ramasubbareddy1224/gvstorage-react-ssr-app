import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Redirect, Link} from 'react-router-dom';


class CommonFooter extends Component{

  constructor()
  {
    super();
   
    this.state={
      isLocationClicked: false
    }
  }
 
  redirectToTarget=(filterName,event)=>{
    event.stopPropagation();
    this.setState({isLocationClicked: true, searchDynamicUrl: '/search/'+filterName+''});
    //!!window && window.scrollTo(0,0);
  }


render(){

  if (this.state.isLocationClicked) {
    this.setState({isLocationClicked: false});
    return <Redirect to={this.state.searchDynamicUrl} />
  }

  const { allPinCodes_Sites } = this.props;


  var divLocations = '';
  if(allPinCodes_Sites.length > 0){
  var divLocations = allPinCodes_Sites[1].locations.map((item,index)  =>{

  return (
    <div className="section-md-t3" key={index}  onClick={(event) =>{this.redirectToTarget(item.stateName,event)}}>
          
    <div className="widget-a">
      <div className="w-header-a">
        <h6 className="w-title-a text-brand">{item.stateName} ({item.cities.length})</h6>
      </div>
      <div className="w-body-a">
        <div className="w-body-a">
          <ul className="list-unstyled">
             {
               
                item.cities.map((city,cityIndex) => {
                  return(
                 <li key={cityIndex} onClick={(event) =>{this.redirectToTarget(city.city,event)}}>  {city.city}, {item.stateCode} ({city.count})</li>
                  )
                })
             }
             
          </ul>
        </div>
      </div>
    
    
    </div>
  </div>
  );
});
  }

    return(
        <div>
        <section className="section-footer wow fadeInUp">
        <div className="container-fluid footer-bg-color pb-3">
        <div className="container-fluid-padding">
        <div className="pt-2 pb-3">
              <h5 className='text-white pt-5 pb-2' >Locations</h5>
            </div>
            <div className="row">
          <div className="col-md-12 coloum-sprit">
            {divLocations}
          </div>
          </div>
          <hr  style={{borderColor: '#5c5c5c'}} />
          </div>
        </div>
        
        <div className="container-fluid footer-bg-color pb-1">
        <div className="container-fluid-padding">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand text-uppercase"><Link to="/storage-options">Storage Options</Link></h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Car storage</h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Boat storage</h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">RV storage</h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"><Link to="/business-storage">Business storage</Link> </h6>
                </div>
                
                <div className="w-body-a">
                  <div className="w-body-a">
                    <ul className="list-unstyled">
                        <li>  Medical Storage </li>
                        <li>      Construction storage </li>
                        <li>     Real Estate Storage </li>
                        <li>     Retail Storage </li>
                        <li>     Legal Storage </li>
                        <li>     Archive Storage </li>
                        <li>     Office Storage</li>
                    </ul>
                  </div>
                </div>
                
                
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                      <h6 className="w-title-a text-brand text-uppercase"> Storage Tools </h6>
                    </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"><Link to="/size-guide"> Size Guide </Link></h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"><Link to="/space-calculator"> Space Calculator </Link></h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"><Link to="/tips">Self Storage Tips</Link></h6>
                </div>
              
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand text-uppercase">Great Value Storage </h6>
                </div>
                
                    
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Company Info </h6>
                </div>
    
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"><Link to="/about-us"> About Us </Link></h6>
                </div>
    
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"><Link to="/contact-us"> Contact Us </Link> </h6>
                </div>
    
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Careers </h6>
                </div>
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Blog </h6>
                </div>
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Review Us </h6>
                </div>
    
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand text-uppercase"> Payment </h6>
                </div>
               
               <div className="w-header-a">
                  <div className="btn btn-gvstore btn-footer w-100"> Pay Bill Now </div>
                </div>
                
              </div>
            </div>
            
          </div>
          
          <div className="row">
          
           <div className="col-sm-12 col-md-3">
              <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Warehouse storage and   Office space</h6>
              </div>
          </div>
          
          <div className="col-sm-12 col-md-3">
          </div>
          
          <div className="col-sm-12 col-md-3">
          </div>
    
          <div className="col-sm-12 col-md-3">
          <div className="footer-img">
          <img src={Environment.STATIC_FILES_END_POINT_URL + "img/gv-store-block.png"} alt="logo" />
          </div>
          </div>
    
          </div>
          
          <hr  style={{borderColor: '#5c5c5c'}}/>
          </div>
        </div>
      </section>
     
      <footer>
        <div className="container-fluid footer-bg-color ">
        <div className="container-fluid-padding">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-footer">
                <p className="copyright text-white small p-2 social-icons">
                   © 2018. All rights reserved.  <span className="color-a float-right"> Privacy Policy  &nbsp; &nbsp; Terms of service.  &nbsp; 
                   <i className="fa fa-facebook-official" aria-hidden="true"></i>
                   <i className="fa fa-twitter-square" aria-hidden="true"></i>
                   <i className="fa fa-youtube-play" aria-hidden="true"></i>
                   <i className="fa fa-pinterest-square" aria-hidden="true"></i>
                   </span> 
                </p>
              </div>
              
            </div>
          </div>
          </div>
        </div>
      </footer>
      </div>
    )
}
}

export default CommonFooter;