import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Select from 'react-select';
import { BrowserRouter, Route } from 'react-router-dom'

import {
  getPinCodes, getSites, getPinCodes_Sites
  } from '../../../modules/actioncreators/home.actioncreator';




  const frontload = async props => {
  // Promise.all([props.getPinCodes_Sites(), props.getSites()]).then(function(values) {
  //   debugger;
  // });
  await props.getPinCodes_Sites();
};

class HomeBanner extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      selectedOption: null
    }
    //this.handleChange = this.handleChange.bind(this);
    //this.redirectToTarget = this.redirectToTarget.bind(this);
  }
 
  handleChange=(selectedOption)=> {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  redirectToTarget=()=>{

    //var stateWithCityValue = !!this.state.selectedOption.state ? (','+ this.state.selectedOption.state) : '';

    //window.location.href='/search?filterType='+this.state.selectedOption.type+'&value='+ this.state.selectedOption.value + stateWithCityValue +'';

    window.location.href='/search?value='+this.state.selectedOption.value+'';
  }

render(){
  const { selectedOption } = this.state;
  const pageName = this.props.pageName;
  // const {allPinCodes} = this.props;
  // const {allSites} = this.props;
  const {allPinCodes_Sites} = this.props;

  const options = [];

 if(Object.keys(allPinCodes_Sites).length > 0){
   allPinCodes_Sites[0].postalCodes.forEach(function(val,index) { 
      options.push({value: val, label: val, type: 'postalCode'});
  });  
  allPinCodes_Sites[1].locations.forEach(function(state,index) { 
    options.push({value: state.stateName, label: state.stateName, type: 'state'});

    if(Object.keys(state.cities).length > 0){
      state.cities.forEach(function(city,index) { 
         options.push({value: city.city, label: city.city, type: 'city', state: state.stateName});
     }); 

    }
  });  
 }


    return(
      <section id={pageName == 'home' ? 'intro' :'inner-banner'}>
    
        <div className={pageName == 'home' ?  'intro-content wow zoomIn':'inner-banner-content wow zoomIn' }>
          <h2>We've got room {this.props.pageName}</h2>
          <p> Personal and business storage solutions </p>
          <div className="find-storage">
               <form action="" method="post" role="form" className="contactForm">
             <label htmlFor="label" className="small text-left float-left" style ={ {fontSize: "70%", paddingLeft: '15px'}}> Search Using</label>
             <div className="col-md-12 banner-search">
              {/* <input type="text" className="form-control " placeholder="Zip, Address of City "  /> */}
              <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options }
        /> &nbsp; &nbsp; &nbsp;
              <span className="btn btn-gvstore btn-success border-0" id="basic-addon2" onClick={this.redirectToTarget}>Find Storage &nbsp; <i className="fa fa-arrow-right"> </i> </span>
             </div>
             </form>
          </div>
        </div>

{pageName == 'home' ? (
  <div id="intro-carousel" className="owl-carousel" >
           <div className="item" style ={ { backgroundImage: "url('img/intro-carousel/1.jpg')" } }></div>
          <div className="item" style ={ { backgroundImage: "url('img/intro-carousel/2.jpg')" } }></div>
          <div className="item" style ={ { backgroundImage: "url('img/intro-carousel/3.jpg')" } }></div>
        </div>
) : (
  <div id="inner-banner-image">
            <div className="item"> <img src="img/intro-carousel/innerpage-citylevel-page.jpg" className="img-fluid w-100" /> </div>
        </div>
)}

      </section>
    )
}
}


const mapStateToProps = state => ({
 // allPinCodes: state.pinCodeData.data,
  allPinCodes_Sites: state.homePageData.pinCodes_Sites,
  //allSites: state.homePageData.sites,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ 
    getPinCodes_Sites
    //, getSites 
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(HomeBanner)
);