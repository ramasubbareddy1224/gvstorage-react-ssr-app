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
            isClimateChecked : false
        }
    }

    onChangeClimateControlled = () => {
        
        this.setState((prevState) => ({
            isClimateChecked: !prevState.isClimateChecked
          }));
        this.props.setFilterInfo( {'ClimateInfo': this.state.isClimateChecked} );
        
        //this.props.setFilter(!this.state.isClimateChecked);
   // this.props.store.dispatch({ type: ACTIONTYPES.SHARED.GET_FILTER_INFO, payload: {isClimateChecked: !this.state.isClimateChecked} });

    }
   
render(){
    return(
       
<section className="breadcrumb-section">
  <div className="container">
  <div className="city-breadcrumb border-bottom">
    <nav aria-label="breadcrumb" className=" d-inline-block">
      <ol className="breadcrumb  border-0">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Storage options</a></li>
        <li className="breadcrumb-item"><a href="#"> Texas </a></li>
        <li className="breadcrumb-item active" aria-current="page"> Dallas </li>
      </ol>
    </nav>
    
    <div className="city-page-filters small"> 
    
    	 <div className="form-check">
   		 <label className="customcheck"> Climate Controlled
          <input type="checkbox" onClick={this.onChangeClimateControlled}   defaultChecked={this.state.isClimateChecked} />
          <span className="checkmark"></span>
        </label>
        </div>
         <div className="form-check">
        <label className="customcheck"> Vechicle Storage
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        </div>
        
         <div className="form-check">
        <label className="customcheck"> Drive-UP Access
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        </div>
        
         <div className="form-check">
        <label className="customcheck">  Warehouse/Office
          <input type="checkbox" />
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
   
  
  
  
  
