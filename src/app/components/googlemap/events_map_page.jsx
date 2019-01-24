import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Environment} from '../../../configurations/environment';
/*
 * GoogleMap hover example
 */
// import React, {PropTypes, Component} from 'react/addons';
// import shouldPureComponentUpdate from 'react-pure-render/function';
 import controllable from 'react-controllables';

import GoogleMap from 'google-map-react';
import MyGreatPlaceWithControllableHover from './my_great_place_with_controllable_hover.jsx';

import {K_SIZE} from './my_great_place_with_controllable_hover_styles.js';

//@controllable(['center', 'zoom', 'hoverKey', 'clickKey'])
 class EventsMapPage extends Component {
  
  // static propTypes = {
  //   center: PropTypes.array, // @controllable
  //   zoom: PropTypes.number, // @controllable
  //   hoverKey: PropTypes.string, // @controllable
  //   clickKey: PropTypes.string, // @controllable
  //   onCenterChange: PropTypes.func, // @controllable generated fn
  //   onZoomChange: PropTypes.func, // @controllable generated fn
  //   onHoverKeyChange: PropTypes.func, // @controllable generated fn

  //   greatPlaces: PropTypes.array
  // };

  static defaultProps = {
    center: [0,0],
    zoom: 9,
    greatPlaces: [
      {id: 'A', lat: 59.955413, lng: 30.337844},
      {id: 'B', lat: 59.724, lng: 30.080}
    ]
  };

  state = {
    mapPointers: [],
    isEventFired: false,
    centerIndex: -1
  };

  //shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  _onBoundsChange = (center, zoom /* , bounds, marginBounds */) => {
    this.props.onCenterChange(center);
    this.props.onZoomChange(zoom);
  }

  _onChildClick = (key, childProps) => {
    this.setState((prevState) => ({
      isEventFired: true
    }));
    this.props.onCenterChange([childProps.lat, childProps.lng]);
  }

  _onChildMouseEnter = (key /*, childProps */) => {
    this.props.onHoverKeyChange(key);
  }

  _onChildMouseLeave = (/* key, childProps */) => {
   this.props.onHoverKeyChange(null);
  }

  shouldComponentUpdate(){
    if(this.state.mapPointers.length > 0 && (this.state.mapPointers.length ==  this.props.mapPointers.length) && (!this.state.isEventFired) &&  (this.state.centerIndex == this.props.centerIndex))
      return false;
    else
    {
      this.setState((prevState) => ({
        isEventFired: false,
        centerIndex: this.props.centerIndex,
        mapPointers: this.props.mapPointers
      }));
      return true;
    }
  }



  render() {
    if(this.props.mapPointers.length > 0)
  
    //this.setState({});
    { !!this.props.mapPointers[this.props.centerIndex] &&
    this.props.onCenterChange([this.props.mapPointers[this.props.centerIndex].lat, this.props.mapPointers[this.props.centerIndex].lng]);
    }
    console.log(this.state.mapPointers);

    const places = this.props.mapPointers
      .map(place => {
        const {id, ...coords} = place;
        return (
          <MyGreatPlaceWithControllableHover
            key={id}
            {...coords}
            text={id.toString()}
            hoverDetails={place}
            hover={(this.props.centerIndex +1) === id} 
            selectedLocation={this.props.selectedLocation}/>
        );
      });

    return (
      <div>
        <div style={{ height: '75vh', width: '100%' }}>
       <GoogleMap
        bootstrapURLKeys={{ key: Environment.GOOGLE_MAP_KEY }}
        center={this.props.center}
        zoom={this.props.zoom}
        hoverDistance={K_SIZE / 2}
        onBoundsChange={this._onBoundsChange}
        onChildClick={this._onChildClick}
        onChildMouseEnter={this._onChildMouseEnter}
        onChildMouseLeave={this._onChildMouseLeave}
        >
        {places}
      </GoogleMap>
      </div>


      </div>
    );
  }
}
EventsMapPage.propTypes ={
  center: PropTypes.array, // @controllable
    zoom: PropTypes.number, // @controllable
    hoverKey: PropTypes.string, // @controllable
    clickKey: PropTypes.string, // @controllable
    onCenterChange: PropTypes.func, // @controllable generated fn
    onZoomChange: PropTypes.func, // @controllable generated fn
    onHoverKeyChange: PropTypes.func, // @controllable generated fn

    greatPlaces: PropTypes.array
}
 EventsMapPage = controllable(EventsMapPage,['center', 'zoom', 'hoverKey', 'clickKey'])
export default EventsMapPage;