import React, { Component } from 'react';

class CommonMenu extends Component{
render(){
    return(
    <header id="header">
    <div className="container">

      <div id="logo" className="pull-left">
        <h1><a className="navbar-brand text-brand" href=""> <img src="img/great-value-store-logo.png" alt="logo" /> </a></h1>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-has-children"><a href="#">Locations</a>
           <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
            </li>
          <li className="menu-has-children"><a href="#">Storage Options</a>
           <ul>
              <li><a href="#">Drop Down 1</a></li>
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