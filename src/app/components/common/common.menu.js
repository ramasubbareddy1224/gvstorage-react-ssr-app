import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Redirect,Link} from 'react-router-dom';

class CommonMenu extends Component{

  constructor()
  {
    super();
   
    this.state={
      isLocationClicked: false
    }
  }

  shouldComponentUpdate(nextProps) {
    return (Object.keys(nextProps.allPinCodes_Sites).length==0)   
  }
 
  redirectToTarget=(filterName,event)=>{
    // onClick={(event) =>{this.redirectToTarget(city.city,event)}}
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
  if(Object.keys(allPinCodes_Sites).length > 0){
  var divLocations = allPinCodes_Sites[1].locations.map((item,index) => {

  return (
    <li key={index} >
     <Link to={"/search/"+item.stateName}>{item.stateName}</Link>   
     <ul>
    {
      item.cities.map((city, cityIndex) => {
        return(
              <li  key={cityIndex}>
              <Link to={"/search/"+city.city}>{city.city}</Link> 
              </li>
        )
      })
    }
    </ul>
    </li>
  );
});
  }

    return(
    <header id="header">
    <div className="container">

      <div id="logo" className="pull-left">
        <h1><a className="navbar-brand text-brand" href="/"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/great-value-store-logo.png"} alt="logo" /> </a></h1>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-has-children"><a href="#">Locations</a>
            <ul>
              {divLocations}
            </ul>
          </li>
          <li className="menu-has-children"><a href="#">Storage Options</a>
           <ul>
              <li><a href="#">Drop Down 1</a>
              <ul>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
            </li>
          <li className="menu-has-children"> <a href="#">Storage Tools</a>
           <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
            </li>
          <li className="menu-has-children"><a href="#">Company</a>
           <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
            </li>
          <li><a href="#">Contact Us</a></li>
         
          <li><a href="##">FAQs</a></li>
        </ul>
      </nav>
    </div>
  </header>
    )
}
}

export default CommonMenu;