import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import React, {PropTypes, Component} from 'react/addons';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle, greatPlaceStyleHover} from './my_great_place_with_controllable_hover_styles.js';

export default class MyGreatPlaceWithControllableHover extends Component {
  // static propTypes = {
  //   // use hover from controllable
  //   hover: PropTypes.bool,
  //   text: PropTypes.string
  // };

  static defaultProps = {};

  //shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  

  render() {
   // const {selectedLocation} = this.props.selectedLocation;
    const style = this.props.hover ? greatPlaceStyleHover : greatPlaceStyle;


    return (
      //  <div className="hint hint--html hint--info hint--top" style={style}>
      //     <div>{this.props.text}</div>
      //     <div style={{width: 80}} className="hint__content">
      //       {this.props.hoverDetails.lat} {this.props.hoverDetails.lng}
      //     </div>
      //  </div>
      <div className={"hint hint--html hint--info hint--top " + (this.props.hover ? 'map-pointer-hover' : 'map-pointer-default')}  style={style}>
      <div className="props-count">{this.props.text}</div>
      <div style={{width: 80}}  className={this.props.hover ? 'map-hover' : 'map-default'}>
           {/* {this.props.hoverDetails.lat} {this.props.hoverDetails.lng} */}
           {
             
              !!this.props.selectedLocation &&
              <div>
              <p className="gv-text-color mb-1">{this.props.selectedLocation.city}</p>
           
              <span> {this.props.selectedLocation.address1}, {this.props.selectedLocation.stateCode} {this.props.selectedLocation.postalCode}</span>
              </div>
            }
            
         </div>
         
         
      </div>
    );
  }
}
MyGreatPlaceWithControllableHover.propTypes={
  hover: PropTypes.bool,
  text: PropTypes.string,
  hoverDetails:PropTypes.object
}