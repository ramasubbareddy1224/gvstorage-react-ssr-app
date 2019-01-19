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
  if(allPinCodes_Sites.length > 0){
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
              <li><Link to="/why-choose-us">Why Choose Us</Link></li>
              <li><Link to="/personal-storage">Personal Storage</Link></li>
              <li><Link to="/business-storage">Business Storage</Link></li>
              <li><Link to="/vehicle-storage">Vehicle Storage</Link></li>
              <li><Link to="/gvs-services">GVS Services</Link></li>
            </ul>
            </li>
          <li className="menu-has-children"> <a href="#">Storage Tools</a>
           <ul>
              <li><Link to="/size-guide">Size Guide</Link></li>
              <li><Link to="/space-calculator">Space Calculator</Link></li>
              <li><Link to="/tips">Tips</Link></li>
              <li><Link to="/packing-supplies">Packing Supplies</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
            </li>
          <li className="menu-has-children"><a href="#">Company</a>
           <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/">Reviews Us</Link></li>
            </ul>
            </li>
          <li><Link to="/contact-us">Contact Us</Link></li>
         
          <li><Link to="/faqs">FAQs</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  </div>
    )
}
}

export default CommonMenu;