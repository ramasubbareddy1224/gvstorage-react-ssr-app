import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {Link, Redirect} from 'react-router-dom';

class RentConfirmation extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };

   
  }

render(){
    const {rentConfirmationData} = this.props;
    const {tenantInfo} = this.props;
    debugger;
    return(
        <div className="">
        <div className="rent-your-unit-now pt-3 pb-3">
        <div className="rent-unit-block">
        <h5 className="pt-3"> The unit has been rented for you! </h5>
        <hr />
        <h5> Your Lease Number: <span className="gv-text-color"> {rentConfirmationData.leaseNumber}</span> </h5>
        <h5> Your Ledger ID: <span className="gv-text-color"> {rentConfirmationData.ledgerID}</span> </h5>
        <p className="small"> An email has been sent to <strong>
        {tenantInfo.emailAddress}
        </strong> confirming your rent. </p>
        <br /> 
        <div className="information-view">
             <h6>Your Information </h6>
            
            
            <h6>{tenantInfo.firstName} {tenantInfo.lastName} <br />
            {tenantInfo.emailAddress} <br />
                {tenantInfo.phoneNumber} </h6>
            {/* <h6 className="gv-text-color small"> <span className="text-underline"> View More </span>  &nbsp; &nbsp; <span className="text-underline" 
            // onClick={this.props.eventEditMode}
            > Edit Info </span> </h6>
             */}
        </div>
        <div className="reservation-info pl-5 pt-5">
            <p><strong> <i className="fa fa-lightbulb-o" aria-hidden="true"></i> &nbsp; What's Next After Reserving?</strong> </p>
            <p className="small"> 1. Your property manager will call you to confirm your reservation and answer any other questions you may have. 
                Please note: Reservations are subject to unit availability.  <br />
                2. Pack your things. <br />
                3. Sign your lease and move in!</p>
        </div>
      
      </div>

       <div className="rent-your-unit-footer ">
      
           <div className="unit-submit  pl-4 pr-4">
               <p> <Link to="/" className="btn btn-gvstore btn-success border-0 green-gradient float-right" 
            //    onClick={this.props.ReserveConfirmationDone}
               > Done  </Link> </p>
            <br />
        </div>
       </div>
    </div>
    </div>
    )
}
}

export default RentConfirmation;