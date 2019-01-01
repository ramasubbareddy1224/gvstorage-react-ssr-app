import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class SearchRelevantData extends Component{
    
render(){
    const relevanceType = this.props.relevanceType;
    return(
        <div className="container pb-5">

{(function() {
        switch(relevanceType) {
          case 'neighbourhood':
            return  <h2 className="p-3 "> Dallas neighbourhoods we serve</h2>;
          case 'nearbylakes':
            return  <h2 className="p-3 "> Nearby lakes with boat storage</h2>;
          case 'nearbyuniversities':
            return  <h2 className="p-3 ">  Nearby universities with self storage </h2>;
          default:
            return null;
        }
      })()}


       
        <div className="row"> 
        
        
        <div className="col-xs-12 col-sm-12 col-lg-12  pt-3">
          
          <div className="resCarousel" data-items="1,2,3,3" data-slide="1" data-animator="lazy" data-interval="4000" >
              <div className="resCarousel-inner" >
                  
                      
                      <div className="item col-md-4">
                          <div className="row pt-3">
                          <div className="col-5 col-sm-4 col-md-3">
                            <div className="fav-locations text-center city-level-img"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/citylevel/dallas-3.png"} className="img-fluid"  alt="..." />
                              <div className="location-overlay clearfix">
                                <div className="location-info">
                                  <h2 className="wow fadeInUp"> 01 </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-7 col-sm-8 col-md-9">
                            <p className="pt-0"> <strong>Cedar Park</strong> </p>
                            <p className="small"> 5.9 Miles <br />
                              16905 Indian Chief Drive, Cedar Park, TX 78613 </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="item col-md-4 pt-3">
                          <div className="row">
                          <div className="col-5 col-sm-4 col-md-3">
                            <div className="fav-locations text-center city-level-img"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/citylevel/dallas-3.png"} className="img-fluid"  alt="..." />
                              <div className="location-overlay clearfix">
                                <div className="location-info">
                                  <h2 className="wow fadeInUp"> 02 </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-7 col-sm-8 col-md-9">
                            <p className="pt-0"> <strong>Leander</strong> </p>
                            <p className="small"> 7.4 Miles <br />
                              2407 S. 183, Leander, TX 78641 </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="item col-md-4 pt-3">
                          <div className="row">
                          <div className="col-5 col-sm-4 col-md-3">
                            <div className="fav-locations text-center city-level-img"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/citylevel/dallas-3.png"} className="img-fluid"  alt="..." />
                              <div className="location-overlay clearfix">
                                <div className="location-info">
                                  <h2 className="wow fadeInUp"> 03 </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-7 col-sm-8 col-md-9">
                            <p className="pt-0"><strong> Cedar Park </strong></p>
                            <p className="small"> 11.2 Miles <br />
                              18050 Ronald Reagan Blvd, Leander, TX 78641</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="item col-md-4 pt-3">
                          <div className="row">
                          <div className="col-5 col-sm-4 col-md-3">
                            <div className="fav-locations text-center city-level-img"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/citylevel/dallas-3.png"} className="img-fluid"  alt="..." />
                              <div className="location-overlay clearfix">
                                <div className="location-info">
                                  <h2 className="wow fadeInUp"> 04 </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-7 col-sm-8 col-md-9">
                            <p className="pt-0"> <strong>Leander</strong> </p>
                            <p className="small"> 7.4 Miles <br />
                              2407 S. 183, Leander, TX 78641 </p>
                          </div>
                        </div>
                      </div> 
              </div>
              <button className='btn btn-default leftLst'><i className="fa fa-fw fa-angle-left"></i></button>
              <button className='btn btn-default rightLst'><i className="fa fa-fw fa-angle-right"></i></button>
          </div>
      </div>
      
      
        </div>
      </div>
    )
}
}

export default SearchRelevantData;


