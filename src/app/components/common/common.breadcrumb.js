import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import {ACTIONTYPES} from '../../../configurations/actiontypes';
import {setFilterInfo} from '../../../modules/actioncreators/common.actioncreator';
import {Redirect} from 'react-router-dom';



const frontload = async props => {
   };

class CommonBreadCrumb extends Component{
    constructor(props){
        super(props);
        this.state = {         
          filterInfo:{isClimateControlledChecked:false,isVehicleStorageChecked:false,isDriveUpAccessChecked:false,isWarehouseChecked:false},
          isLocationClicked: false,
          searchDynamicUrl: ''
        }
    }

    onChangeCheckbox = (event) => {
      let checkboxname=event.target.name;
      let checkedstate = event.target.checked;
      let filterInfo=this.state.filterInfo;
      filterInfo[checkboxname]=checkedstate;
      this.setState({filterInfo});      
      //console.log('fiterinfo',this.state.filterInfo);
          this.props.setFilterInfo(this.state.filterInfo);       

    }    

    redirectToTarget=(event,locationName)=>{
      event.stopPropagation();
      this.setState({isLocationClicked: true, searchDynamicUrl: '/search/'+locationName+''});
    }
   
render(){

  if (this.state.isLocationClicked) {
    this.setState({isLocationClicked: false});
    return <Redirect to={this.state.searchDynamicUrl} />
  }

  const { allSites } = this.props;
  const {allPinCodes_Sites } = this.props;


  const divBreadcrumbLocations =  allPinCodes_Sites.length > 0 && 
  allPinCodes_Sites[1].locations.map((state,index)=> {
    return (
            <li class=""  key={index} onClick={(event) => {this.redirectToTarget(event, state.stateName) }}>
            <a class="">{state.stateName}</a>
             
            <ul>
                {
                  state.cities.map((city,newIndex)=>{
                    return (
                      <li class="" key={newIndex} onClick={(event) => {this.redirectToTarget(event, city.city) }}><a>{city.city}</a></li>
                    )
                  })
                }
               
              </ul>

           </li>
    )
  }) 
  
    return(
       
<section className="breadcrumb-section">
  <div className="container">
  <div className="city-breadcrumb border-bottom">
    <nav aria-label="breadcrumb" className=" d-inline-block">
      <ul className="nav-menu breadcrumb  border-0">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item"><a >Locations</a></li>
       

    { !!allSites.siteLocations && 
    <li className="breadcrumb-item" onClick={() => {this.redirectToTarget(allSites.siteLocations[0].stateName) }}><a> {allSites.siteLocations[0].stateName} </a></li> 
  }

       { !!allSites.siteLocations &&
      <li class="breadcrumb-item menu-has-children"><a class="sf-with-ul-breadcrumb"> {allSites.siteLocations[0].city} </a>
        <ul class="ul-locations">
           {divBreadcrumbLocations}
        </ul>
      </li>
       }
   
      </ul>
    </nav>
    
    <div className="city-page-filters small"> 
    
    	 <div className="form-check">
   		 <label className="customcheck"> Climate Controlled
          <input type="checkbox" name="isClimateControlledChecked" onChange={(event) => {this.onChangeCheckbox(event)}}   checked={this.state.filterInfo.isClimateControlledChecked} />
          <span className="checkmark"></span>
        </label>
        </div>
         <div className="form-check">
        <label className="customcheck"> Vehicle Storage
          <input type="checkbox" name="isVehicleStorageChecked" onChange={(event) => {this.onChangeCheckbox(event)}}   checked={this.state.filterInfo.isVehicleStorageChecked} />
          <span className="checkmark"></span>
        </label>
        </div>
        
         <div className="form-check">
        <label className="customcheck"> Drive-UP Access
          <input type="checkbox" name="isDriveUpAccessChecked" onChange={(event) => {this.onChangeCheckbox(event)}}   checked={this.state.filterInfo.isDriveUpAccessChecked} />
          <span className="checkmark"></span>
        </label>
        </div>
        
         <div className="form-check">
        <label className="customcheck">  Warehouse/Office
          <input type="checkbox" name="isWarehouseChecked" onChange={(event) => {this.onChangeCheckbox(event)}}   checked={this.state.filterInfo.isWarehouseChecked} />
          <span className="checkmark"></span>
        </label>
        </div>
    </div>
    </div>
  </div>
</section>
    )
}
}

const mapStateToProps = state => ({
 
   });

//    const mapDispatchToProps = dispatch => ({
//     setFilter: data => {
//     dispatch({ type: ACTIONTYPES.SHARED.GET_FILTER_INFO, payload: {isClimateChecked: data} });
//     },
//    });
   
   const mapDispatchToProps = dispatch =>
     bindActionCreators({ 
        setFilterInfo
     }, dispatch);
   
   export default connect(
     mapStateToProps,
     mapDispatchToProps
   )(
     frontloadConnect(frontload, {
       onMount: true,
       onUpdate: false
     })(CommonBreadCrumb)
   );
   
  
  
  
