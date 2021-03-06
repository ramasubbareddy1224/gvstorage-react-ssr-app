import React, { Component } from 'react';
import Select from 'react-select';
import {Environment} from '../../../configurations/environment';

import {Redirect} from 'react-router-dom';

import {AutoComplete} from '../typeahead/index';




export default class HomeBanner extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      selectedOption: null,
      isFindStorageClicked: false,
      searchDynamicUrl: '',
      selectedAutoCompleteValue: ''
    }
    //this.handleChange = this.handleChange.bind(this);
    //this.redirectToTarget = this.redirectToTarget.bind(this);
  }
 
  handleChange=(selectedOption)=> {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  handleLocationChange=(event)=> {
    this.setState({ selectedOption: event.target.value });
    console.log(`Option selected:`, event);
  }


  redirectToTarget=()=>{
    var autoCompleteValue = !!this.state.selectedAutoCompleteValue ? this.state.selectedAutoCompleteValue : 'All';
    this.setState({isFindStorageClicked: true, searchDynamicUrl: '/search/'+autoCompleteValue+''});
   //var stateWithCityValue = !!this.state.selectedOption.state ? (','+ this.state.selectedOption.state) : '';

    //window.location.href='/search?filterType='+this.state.selectedOption.type+'&value='+ this.state.selectedOption.value + stateWithCityValue +'';

    //window.location.href='/search/'+this.state.selectedOption.value+'';

  }

  handleAutocompleteValueChange=(val)=>{
    this.setState({selectedAutoCompleteValue: val});
  }

  componentDidMount(){

    // const script = document.createElement("script");

    //     script.src = "/lib/owlcarousel/owl.carousel.min.js";
    //     script.async = true;

    //     document.body.appendChild(script);

    // setTimeout(() => {
    //   $("#intro-carousel").owlCarousel({
    //     autoplay: true,
    //     dots: false,
    //     loop: true,
    //     animateOut: 'fadeOut',
    //     items: 1
    //   });
    // }, 5000);
    
  }


  componentDidMount(){


    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.src= "/js/main.js";
    head.appendChild(script);

    let $ = require('jquery');
    $("#input-autocomplete").on('keyup', (e)=> {
      if (e.keyCode == 13) {
        var autoCompleteValue =!!$("#input-autocomplete").val() ? $("#input-autocomplete").val() : 'All';
        this.setState({isFindStorageClicked: true, searchDynamicUrl: '/search/'+autoCompleteValue+''});
      }
  });
  }

render(){

  
  if (this.state.isFindStorageClicked) {
    this.setState({isFindStorageClicked: false});
    return <Redirect to={this.state.searchDynamicUrl} />
  }


  const { selectedOption } = this.state;
  const pageName = this.props.pageName;
  // const {allPinCodes} = this.props;
  // const {allSites} = this.props;
  const {allPinCodes_Sites} = this.props;
  const {siteCount} = this.props;
  const {siteName} = this.props;

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
        { this.props.pageName == 'home' && 
        <div className="banner-text">
         <h2>Need Storage Space? We've got room!</h2>
          <p> Find and rent personal and business storage solutions </p>
          </div>
        }
        { this.props.pageName == 'search' && 
        <div>
          <h2>{siteName} : {siteCount} Locations</h2>
          <p>Let us find you the perfect unit</p>
          </div>
        }
        {
          (this.props.pageName != 'home' && this.props.pageName != 'search') &&
          <div>
            {/* <h2>{pageName}</h2>
            <br /> */}
              <h2> We've got room!</h2>
          <p>Let us find you the perfect unit </p>
          </div>
        }
        
          <div className="find-storage">
               {/* <form  className="contactForm"> */}
               <label htmlFor="label" className="small text-left float-left desktop" style ={ {fontSize: "70%", paddingLeft: '15px'}}> Search Storage</label>
             <div className="col-md-12 banner-search">
              {/* <input type="text" className="form-control " placeholder="Zip, Address of City "  /> */}
              {/* <select value={selectedOption} onChange={this.handleLocationChange} >
              {options.map((e, key) => {
               return <option key={key} value={e.value}>{e.label}</option>;
    })}
              </select> */}

               <AutoComplete id="praveen" autoCompleteValues={options} onAutocompleteValueChange={this.handleAutocompleteValueChange}></AutoComplete>

              {/* <Select 
        value={selectedOption}
        onChange={this.handleChange}
        options={options }
        />  */}
        &nbsp; &nbsp; &nbsp;
              <span className="btn btn-gvstore btn-success border-0" id="basic-addon2" onClick={this.redirectToTarget}>Find Storage &nbsp; <i className="fa fa-arrow-right"> </i> </span>
             </div>
             {/* </form> */}
          </div>
        </div>

{pageName == 'home' ? (
  <div id="intro-carousel" className="owl-carousel" >
  <div className="item" style ={ { backgroundImage: "url('img/intro-carousel/1.jpg')" } }></div>
 <div className="item" style ={ { backgroundImage: "url('img/intro-carousel/2.jpg')" } }></div>
 <div className="item" style ={ { backgroundImage: "url('img/intro-carousel/3.jpg')" } }></div>
</div>
  // <div id="inner-banner-image">
  // <div className="item"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/intro-carousel/1.jpg"} className="img-fluid w-100" /> </div>
  // </div>
) : (
  <div id="inner-banner-image">
            <div className="item"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/intro-carousel/innerpage-citylevel-page.jpg"} className="img-fluid w-100" /> </div>
        </div>
)}

      </section>
    )
}
}

