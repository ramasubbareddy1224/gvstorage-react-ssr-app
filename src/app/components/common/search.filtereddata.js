import React, { Component } from 'react';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import { getAllSitesByFilters } from '../../../modules/actioncreators/search.actioncreator';
import {Environment} from '../../../configurations/environment';

const frontload = async props => {
 // await props.getAllSitesByFilters();
};

class SearchFilteredData extends Component{

  componentDidMount(){
    const values = queryString.parse(window.location.search);

    this.props.getAllSitesByFilters(values.value);

   
    // if(values.filterType == 'postalCode'){
    //   Promise.all([this.props.getAllSitesByFilters(values.filterType, values.value)]).then(function(values) {
    //     });
    // }
    // else if(values.filterType == 'state'){
    //   Promise.all([this.props.getAllSitesByFilters(values.filterType, values.value)]).then(function(values) {
    //   });
    // }
    // else if(values.filterType == 'city'){
    //   Promise.all([this.props.getAllSitesByFilters(values.filterType, values.value.split(',')[0], values.value.split(',')[1])]).then(function(values) {
    //   });
    // }
  }



render(){
  console.log(this.props.allFilters);

  const {allSites} = this.props;
  var items = [
    { name: 'Matthew', link: 'https://bible.com/1/mat.1' },
    { name: 'Mark', link: 'https://bible.com/1/mrk.1' },
    { name: 'Luke', link: 'https://bible.com/1/luk.1' },
    { name: 'John', link: 'https://bible.com/1/jhn.1' }
  ];


  var listItems = items.map(function(item) {
    return (
      <div key={item.name}>
        <a className='button' href={item.link}>{item.name}</a>
      </div>
    );
  });

  var divSites = '';
  if(!!allSites.siteLocations){

 

    //temp =  [];
    //var a = this.props.allFilters;
    //var temp = Object.assign({}, allSites.siteLocations);

  var divSites = allSites.siteLocations.map(function(item,index) {
    return (
      <div key={item.siteID}>
        <div className="row">
            <div className="col-5 col-sm-4 col-md-3">
              <div className="fav-locations text-center city-level-img"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/citylevel/dallas-2.png"} className="img-fluid"  alt="..." />
                <div className="location-overlay clearfix">
                  <div className="location-info">
                    <h2 className="wow fadeInUp"> {index+1} </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 col-sm-8 col-md-9">
              <h5 className="pt-2"> {item.city} </h5>
              <p> {item.address1} <br/>
                {item.city}, {item.region} {item.postalCode}</p>
            </div>
          </div>
          <hr />
          <div className="clearfix"> </div>
      </div>
    );
  });
}


    return(
  <section id="about" className="about-sec individual-city wow fadeInUp">
    <div className="container">
      <div className="row">
        <div className="col-md-6 content city-pageviews pt-2">  
        {divSites}
          
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 about-img">
          <div className="city-page-map">
           <div id="map"> </div>
               {/* <SimpleMap></SimpleMap>  */}
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
}



const mapStateToProps = state => ({
  // allPinCodes: state.pinCodeData.data,
   allSites: state.searchPageData.sites,
   allFilters: state.commonData.filterInfo
   //allSites: state.homePageData.sites,
 });
 
 const mapDispatchToProps = dispatch =>
   bindActionCreators({ 
    getAllSitesByFilters
     //, getSites 
   }, dispatch);
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(
   frontloadConnect(frontload, {
     onMount: true,
     onUpdate: false
   })(SearchFilteredData)
 );
 


