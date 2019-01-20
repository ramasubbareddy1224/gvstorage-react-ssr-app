import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class SearchRelevantData extends Component{
    componentDidMount(){
       const script = document.createElement("script");

        script.src = "https://www.jqueryscript.net/demo/Flexible-Multi-item-Carousel-Plugin-Bootstrap-ResCarousel/js/resCarousel.js";
        script.async = true;

        document.body.appendChild(script);
    }
render(){
    const relevanceType = this.props.relevanceType;
    const {content} = this.props;

   
    const divContent = content.map((data, index)=> {
    return   <div className="item col-md-4" key={index}>
                          <div className="row pt-3">
                          <div className="col-5 col-sm-4 col-md-3">
                            <div className="fav-locations text-center city-level-img"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/citylevel/dallas-3.png"} className="img-fluid"  alt="..." />
                              <div className="location-overlay clearfix">
                                <div className="location-info">
                                  <h2 className="wow fadeInUp"> {index + 1 } </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-7 col-sm-8 col-md-9">
                            <p className="pt-0"> <strong>{data.name}</strong> </p>
                           {!!data.distance && <p className="small"> {data.distance}  Miles </p> }
                            {/* <br />
                              16905 Indian Chief Drive, Cedar Park, TX 78613 */}
                              
                          </div>
                        </div>
                      </div>
    });


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
          {!!divContent &&
          <div className="resCarousel" data-items="1,2,3,3" data-slide="1" data-animator="lazy" data-interval="4000" >
              <div className="resCarousel-inner" >
                      {divContent}
              </div>
              <button className='btn btn-default leftLst'><i className="fa fa-fw fa-angle-left"></i></button>
              <button className='btn btn-default rightLst'><i className="fa fa-fw fa-angle-right"></i></button>
          </div>
          }
      </div>
      
      
        </div>
      </div>
    )
}
}

export default SearchRelevantData;


