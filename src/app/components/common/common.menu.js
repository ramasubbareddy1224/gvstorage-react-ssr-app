import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Redirect,Link} from 'react-router-dom';

class CommonMenu extends Component{

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

  if (this.state.isLocationClicked) {
    this.setState({isLocationClicked: false});
    return <Redirect to={this.state.searchDynamicUrl} />
  }

  const { allPinCodes_Sites } = this.props;


  var divLocations = '';
  if(Object.keys(allPinCodes_Sites).length > 0){
  var divLocations = allPinCodes_Sites[1].locations.map((parentMenu,parentindex) => {

  return (
    <li key={"parent_menu_"+parentindex}  onClick={(event) => {this.redirectToTarget(event,parentMenu.stateName)}} >
     {/* <Link to={"/search/"+item.stateName}>{item.stateName}</Link>    */}
     <a>{parentMenu.stateName}</a>
     <ul>
    {
      parentMenu.cities.map((city, cityIndex) => {
        return(
              <li  key={"child_bc_"+parentindex+"_"+cityIndex} onClick={(event) => {this.redirectToTarget(event, city.city) }}>
              {/* <Link to={"/search/"+city.city}>{city.city}</Link>  */}
              <a>{city.city}</a>
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
      <div id="header-menu">
    <header id="header">
    <div className="container">

      <div id="logo" className="pull-left">
        <h1><Link to="/" className="navbar-brand text-brand"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/great-value-store-logo.png"} alt="logo" /> </Link></h1>
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
  </div>
    )
}
}

export default CommonMenu;