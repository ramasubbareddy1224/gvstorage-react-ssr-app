import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Redirect} from 'react-router-dom';

class HomeLocations extends Component{

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
      }

render(){

    if (this.state.isLocationClicked) {
        this.setState({isLocationClicked: false});
        return <Redirect to={this.state.searchDynamicUrl} />
      }
    

    const { allPinCodes_Sites } = this.props;


    var divLocations = '';
    if(allPinCodes_Sites.length > 0){
    var divLocations = allPinCodes_Sites[1].locations.map((item,index)=> {
  
    return (
        <div className="col-6 col-md-2" key={index}>
        <div className="fav-locations text-center"  onClick={(event) =>{this.redirectToTarget(item.stateName,event)}}>
            <img src={Environment.STATIC_FILES_END_POINT_URL + "img/states/" + item.stateCode + ".png"} className="img-fluid"  alt="..." />
            <div className="location-overlay clearfix">
                <div className="location-info">
                <h2 className="wow fadeInUp"> {item.stateCode} </h2>
                </div>
            </div>
              <p> {item.stateName} </p>
          </div>
        </div>
    );
  });
    }

    return(
        <section id="about" className="wow fadeInDown">
        <div className="container-fluid">
        <div className="container-fluid-padding">
          <h2 className="text-center p-3 pb-5 ">Our Storage Locations</h2>
          <div className="row">
           {divLocations}
          </div>
          </div>
        </div>
      </section>
    )
}
}

export default HomeLocations;