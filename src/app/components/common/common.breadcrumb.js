import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import {ACTIONTYPES} from '../../../configurations/actiontypes';
import {setFilterInfo} from '../../../modules/actioncreators/common.actioncreator';



const frontload = async props => {
   };

class CommonBreadCrumb extends Component{
    constructor(props){
        super(props);
        this.state = {
          isClimateControlledChecked : false,
          isVehicleStorageChecked: false,
          isDriveUpAccessChecked: false,
          isWarehouseChecked: false
        }
    }

    onChangeClimateControlled = () => {
        
        this.setState((prevState) => ({
          isClimateControlledChecked: !prevState.isClimateControlledChecked
          }));
          console.log( this.state.isClimateControlledChecked)
          this.props.setFilterInfo( 
            {'isClimateControlledChecked': this.state.isClimateControlledChecked,
            'isVehicleStorageChecked': this.state.isVehicleStorageChecked,
            'isDriveUpAccessChecked': this.state.isDriveUpAccessChecked,
            'isWarehouseChecked': this.state.isWarehouseChecked}
           );
        
        //this.props.setFilter(!this.state.isClimateChecked);
   // this.props.store.dispatch({ type: ACTIONTYPES.SHARED.GET_FILTER_INFO, payload: {isClimateChecked: !this.state.isClimateChecked} });

    }

    onChangeVehicleStorage = () => {
      this.setState((prevState) => ({
        isVehicleStorageChecked: !prevState.isVehicleStorageChecked
        }));
        this.props.setFilterInfo( 
          {'isClimateControlledChecked': this.state.isClimateControlledChecked,
          'isVehicleStorageChecked': this.state.isVehicleStorageChecked,
          'isDriveUpAccessChecked': this.state.isDriveUpAccessChecked,
          'isWarehouseChecked': this.state.isWarehouseChecked}
         );
    }
    onChangeDriveUpAccess = () => {
      this.setState((prevState) => ({
        isDriveUpAccessChecked: !prevState.isDriveUpAccessChecked
        }));
        this.props.setFilterInfo( 
          {'isClimateControlledChecked': this.state.isClimateControlledChecked,
          'isVehicleStorageChecked': this.state.isVehicleStorageChecked,
          'isDriveUpAccessChecked': this.state.isDriveUpAccessChecked,
          'isWarehouseChecked': this.state.isWarehouseChecked}
         );
    }
    onChangeWarehouse = () => {
      this.setState((prevState) => ({
        isWarehouseChecked: !prevState.isWarehouseChecked
        }));
        this.props.setFilterInfo( 
          {'isClimateControlledChecked': this.state.isClimateControlledChecked,
          'isVehicleStorageChecked': this.state.isVehicleStorageChecked,
          'isDriveUpAccessChecked': this.state.isDriveUpAccessChecked,
          'isWarehouseChecked': this.state.isWarehouseChecked}
         );
    }
   
render(){
    return(
       
<section className="breadcrumb-section">
  <div className="container">
  <div className="city-breadcrumb border-bottom">
    <nav aria-label="breadcrumb" className=" d-inline-block">
      <ol className="breadcrumb  border-0">
        <li className="breadcrumb-item"><a href="">Home</a></li>
        <li className="breadcrumb-item"><a >Locations</a></li>
        {/* <li className="breadcrumb-item"><a href="#"> Texas </a></li> */}
        <li className="breadcrumb-item active" aria-current="page"> {this.props.filterName} </li>
      </ol>
    </nav>
    
    {/* <div className="city-page-filters small"> 
    
    	 <div className="form-check">
   		 <label className="customcheck"> Climate Controlled
          <input type="checkbox" onClick={() => {this.onChangeClimateControlled()}}   defaultChecked={this.state.isClimateControlledChecked} />
          <span className="checkmark"></span>
        </label>
        </div>
         <div className="form-check">
        <label className="customcheck"> Vehicle Storage
          <input type="checkbox" onClick={() => {this.onChangeVehicleStorage()}}   defaultChecked={this.state.isVehicleStorageChecked} />
          <span className="checkmark"></span>
        </label>
        </div>
        
         <div className="form-check">
        <label className="customcheck"> Drive-UP Access
          <input type="checkbox" onClick={() => {this.onChangeDriveUpAccess()}}   defaultChecked={this.state.isDriveUpAccessChecked} />
          <span className="checkmark"></span>
        </label>
        </div>
        
         <div className="form-check">
        <label className="customcheck">  Warehouse/Office
          <input type="checkbox" onClick={() => {this.onChangeWarehouse()}}   defaultChecked={this.state.isWarehouseChecked} />
          <span className="checkmark"></span>
        </label>
        </div>
    </div> */}
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
   
  
  
  
  
