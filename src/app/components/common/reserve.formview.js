import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {Link, Redirect} from 'react-router-dom';

class ReserveFormView extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };

   
  }

render(){
    const formData = this.props.formData;
    const {reservationData} = this.props;
    debugger;
    return(
        <div className="">
        <div className="rent-your-unit-now pt-3 pb-3">
        <div className="rent-unit-block">
        <h5 className="pt-3"> The unit has been reserved for you! </h5>
        <hr />
        <h5> Your Reservation Number: <span className="gv-text-color">  {reservationData.reservationNumber} </span> </h5>
        <p className="small"> An email has been sent to <strong>{formData.Email}</strong> confirming your reservation. </p>
        <br /> 
        <div className="information-view">
             <h6>Your Information </h6>
            
            
            <h6>{formData.FirstName} {formData.LastName} <br />
            {formData.Email}<br />
            {formData.PhoneNumber} </h6>
            {/* <h6 className="gv-text-color small"> <span className="text-underline"> View More </span>  &nbsp; &nbsp; <span className="text-underline" onClick={this.props.eventEditMode}> Edit Info </span> </h6> */}
        </div>
        <div className="reservation-info  bg-storage-tool p-3 mt-5 ml-5">
            <p><strong> <i className="fa fa-lightbulb-o" aria-hidden="true"></i> &nbsp; What's Next After Reserving?</strong> </p>
            <p className="small"> 1. Your property manager will call you to confirm your reservation and answer any other questions you may have. 
                Please note: Reservations are subject to unit availability.  <br />
                2. Pack your things. <br />
                3. Sign your lease and move in!</p>
        </div>
      
      </div>

       <div className="rent-your-unit-footer ">
      
           <div className="unit-submit  pl-4 pr-4">
               <p> <Link to="/" className="btn btn-gvstore btn-success border-0 green-gradient float-right"> Done  </Link> </p>
            <br />
        </div>
       </div>
    </div>
    </div>
    )
}
}

export default ReserveFormView;