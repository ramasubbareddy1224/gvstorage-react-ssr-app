import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {Environment} from '../../../configurations/environment';
import { confirmPayment
} from '../../../modules/actioncreators/rent.actioncreator';
import {Link, Redirect} from 'react-router-dom';
import DatePicker from "react-datepicker";

class RentPaymentFormFilling extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: this.addDays(new Date(),12),
      selectedDate: new Date(),
      fields: {},
      errors: {},
      isRedirectActivated: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date){
    this.setState({
      selectedDate: date
    });
  }
  addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

  handleFormChange=(e)=> {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }


  submitRentPaymentForm=(e)=>{
    e.preventDefault();
    if (this.validateForm()) {

      const {pathParams} = this.props;

      const {unit} = this.props.selectedUnitInfo;
      const {units} =  this.props.allUnits;

      var unitInfo = '';
      if(!pathParams.isReloaded){
           unitInfo = !!unit ? unit : {};
      }
      else {
          unitInfo = !!units ? units.filter(x=>x.firstAvailableUnitID == pathParams.unitId)[0] : {};
      }
      const {moveInCharges} = this.props.moveInCharges;
      //const {insurancePlans} =   Object.keys(this.props.selectedUnitInfo).length  > 0 ? this.props.selectedUnitInfo : this.props.allUnits;

     var requestData = {
      "accessCode": "",
      "billingAddress": this.state.fields.BillingAddress,
      "billingFrequency": 0,
      "billingName": this.state.fields.CardName,
      "billingZipCode": this.state.fields.Zip,
      "ccvv": this.state.fields.CardCVV,
      "cexpDate": this.state.fields.ExpiryMonth + '/' + this.state.fields.ExpiryYear,
      "cnumber": this.state.fields.CardNumber,
      "concessionID": Object.keys(unitInfo).length > 0 && unitInfo.concessionID,
      "ctype": 0,
      "endDate": moveInCharges[0].date,
      "insurCoverageID": parseInt(this.state.fields.ProtectionCoverage),
      "locationCode": pathParams.locationCode,
      "payMethod": 6,
      "paymentAmount": this.props.moveInCharges.totalAmount,
      "siteID": Object.keys(unitInfo).length > 0 && unitInfo.concessionID,
      "startDate": this.formatDate(this.state.selectedDate),
      "tenantID": pathParams.tenantId,
      "unitID": pathParams.unitId,
      "uuid": ""
    }

      confirmPayment(requestData).then((success)=>{
        alert(success.status.message);
        if(success.status.code  == 200){
          //alert('Payment done');
          this.setState({isRedirectActivated: true});
        }
        else if(success.status.code == -83){
         // alert(success.status.message);
        }
      },
      (error)=>{
        alert((JSON.parse(error.text)).status.message);
        debugger;
      });
    }
  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["ProtectionCoverage"]) {
      formIsValid = false;
      errors["ProtectionCoverage"] = "Please select Protection Coverage.";
    }


    if (!fields["CardName"]) {
      formIsValid = false;
      errors["CardName"] = "Please enter the name on the card.";
    }

    if (typeof fields["CardName"] !== "undefined") {
      if (!fields["CardName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["CardName"] = "Please enter alphabet characters only.";
      }
    }

    if (!fields["BillingAddress"]) {
      formIsValid = false;
      errors["BillingAddress"] = "Please enter the billing address.";
    }

    if (typeof fields["BillingAddress"] !== "undefined") {
      if (!fields["BillingAddress"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["BillingAddress"] = "Please enter alphabet characters only.";
      }
    }

    if (!fields["Zip"]) {
      formIsValid = false;
      errors["Zip"] = "Please enter your Zip.";
    }

    if (typeof fields["Zip"] !== "undefined") {
      if (!fields["Zip"].match(/^[0-9]{6}$/)) {
        formIsValid = false;
        errors["Zip"] = "Please enter valid Zip/Postal Code.";
      }
    }

    if (!fields["CardNumber"]) {
      formIsValid = false;
      errors["CardNumber"] = "Please enter your Card Number.";
    }

    if (typeof fields["CardNumber"] !== "undefined") {
      if (!fields["CardNumber"].match(/^[0-9]{16}$/)) {
        formIsValid = false;
        errors["CardNumber"] = "Please enter valid Card Number.";
      }
    }

    if (!fields["CardCVV"]) {
      formIsValid = false;
      errors["CardCVV"] = "Please enter your Card Number.";
    }

    if (typeof fields["CardCVV"] !== "undefined") {
      if (!fields["CardCVV"].match(/^[0-9]{3}$/)) {
        formIsValid = false;
        errors["CardCVV"] = "Please enter valid CVV.";
      }
    }

    if (!fields["ExpiryMonth"]) {
      formIsValid = false;
      errors["ExpiryMonth"] = "Please select Expiry Month.";
    }

    if (!fields["ExpiryYear"]) {
      formIsValid = false;
      errors["ExpiryYear"] = "Please select Expiry Year.";
    }


    this.setState({
      errors: errors
    });
    return formIsValid;


  }

  CVVShowHideClick(){
    if(!!document.getElementById('CardCVV'))
    document.getElementById('CardCVV').type = (document.getElementById('CardCVV').type) == 'text' ? 'password' : 'text'; 
  }
  CardNumberShowHideClick(){
    if(!!document.getElementById('CardNumber'))
    document.getElementById('CardNumber').type = (document.getElementById('CardNumber').type) == 'text' ? 'password' : 'text'; 
  }

 

  

render(){

  
  if (this.state.isRedirectActivated) {
    this.setState({isRedirectActivated: false});
    return <Redirect to='/' />
  }

   // const formData = this.props.formData;
    const {tenantInfo} = this.props;
    const {moveInCharges} = this.props.moveInCharges;
    const {totalAmount} = this.props.moveInCharges;
    const {insurancePlans} =   Object.keys(this.props.selectedUnitInfo).length  > 0 ? this.props.selectedUnitInfo : this.props.allUnits;


    
  const optionsProtectionCoverage = !!insurancePlans && insurancePlans.map((val, index) =>{
return (
      <option key={index} value={val.insurCoverageID}>Covers up to ${val.coverage} USD - ${val.premium} USD/Month</option>
  )
  })


    const divMoveIncharges = !!moveInCharges && moveInCharges.map((moveInCharge, index) => {
      return(
            <p key={index}> 
            {moveInCharge.description}: <span className="pull-right"> ${moveInCharge.amount} USD </span>
            <br/>
             { !!moveInCharge.discount && ('Discount: ') }
             { !!moveInCharge.discount && <span className="pull-right">-${moveInCharge.discount} USD</span>  }
              </p>
      )
  })


  const divMoveInTaxes = !!moveInCharges && moveInCharges.map((moveInCharge, index) => {
      return(
            <p key={index}> 
             { !!moveInCharge.taxRate1 && 
              (`TAX ${moveInCharge.taxRate1}% :`) }

              { !!moveInCharge.taxRate1 && <span className="pull-right">${moveInCharge.taxAmount1} USD</span>  }
           <br/>
                    
          { !!moveInCharge.taxRate2 && 
            (`TAX ${moveInCharge.taxRate2}% :`) }

            { !!moveInCharge.taxRate2 && <span className="pull-right">${moveInCharge.taxAmount2} USD</span>  }

             </p>
      )
  })

  var year = new Date().getFullYear();
       // var month = new Date().getMonth() + 1;
        var range = [];
        for (var i = 0; i < 10; i++) {
          range.push(year + i);
        }
        //range.push(year);
  const optionYears = range.map((year)=>{
   return <option key={year} value={year}>{year}</option>
  })

  const optionMonths = ['01','02','03','04','05','06','07', '08', '09', '10', '11', '12'].map((month)=>{
    return <option key={month} value={month}>{month}</option>
   })


    return(
        <div className="col-12 col-md-8">
            	<div className="">
                <div className="rent-your-unit-now pt-3 pb-3">
                <form  method="post"  name="frmRentPayment"  onSubmit= {this.submitRentPaymentForm}>
                <div className="rent-unit-block">
                <h5 className="pt-3"> Rent your unit now! </h5>
                <hr />
                
                <div className="row">
                <div className="col-md-7"> 
                <p> Your Information </p>
                <p> 
                <strong>{tenantInfo.firstName} {tenantInfo.lastName} <br />
                {tenantInfo.emailAddress} <br />
                {tenantInfo.phoneNumber}</strong>
                </p>
                {/* <p className="small"><strong> <span className="gv-text-color text-underline"> View More </span> &nbsp; &nbsp; <span className="gv-text-color text-underline">  Edit Info </span> </strong> </p>
                 */}
                <hr />
                
                
                <p> Amount To Pay </p>
                <strong>
                {divMoveIncharges}
                {divMoveInTaxes}
                {/* <p> 1st month rent: <span className="pull-right"> $39.97 USD </span>  </p>
                <p> Admin fee: <span className="pull-right"> $22.00 USD </span> </p>
                <p> 1st month protection:  <span className="pull-right"> $7.42 USD </span> </p> */}
                </strong>
                <div className="clearfix"> </div>
                <hr />
                { !!totalAmount &&

                <h2 className="gv-text-color pull-right"> 
                <span className="text-dark" styleName={{fontSize:'18px'}}> <strong>Total</strong> </span> ${totalAmount.toFixed(2)} 
                <span className="small text-dark" styleName={{fontSize:'18px'}}> <strong>USD</strong> </span>
                </h2> 
                }
                <div className="clearfix"> </div>
                <hr />
                
                <div className="offer-on-months">
                <div className="alert alert-bg align-text-top">
                <div className="form-check small">
                <label className="customcheck"> Rent out for 6 Months of storage & get 50% Off of the total rental amount <br />
                <input type="checkbox"  />
                <span className="checkmark mt-1"></span>
                </label>
                <span styleName={{fontSize:'1.5rem', fontWeight: 'bold'}}> <del className="text-muted"> $408 </del> &nbsp; <span className="gv-text-color"> $204 </span> <span className="text-dark"> USD  </span> </span> for 6 Months
                </div>
                </div>
                </div>
                  
                 <div  className="billing-info pt-2">

                
                <div className="row pb-3">
                	<div className="col-md-12">
                      <div className="form-group">
                      <label for="ProtectionCoverage">Select Protection coverage <span className="text-danger"> * </span> </label>
                        <p className="small"> We ask thea each of out customers select a property protection option. Our property protection plans listed below provided added peace of mind to protect your valuablea against demages from unfortunate and un pedictable incidents while in storage.</p>
                        <select className="form-control" id="Select Protection coverage"  name="ProtectionCoverage" value={this.state.fields.ProtectionCoverage} onChange={this.handleFormChange}>
                              <option value="">Select Protection coverage</option>
                              {optionsProtectionCoverage}
                        </select>
                        <div className="errorMsg">{this.state.errors.ProtectionCoverage}</div>
                      </div>
                    </div>

                    	<div className="col-md-12">
                      <div className="form-group">
                      <label for="First Name"> Movie-In Date <span className="text-danger"> * </span> </label>
                        <DatePicker className="form-control"
                          selected={this.state.selectedDate}
                          onChange={this.handleChange}
                          minDate={this.state.startDate}
                          maxDate={this.state.endDate}
                        />
                      </div>
                    </div>
                    </div>  


                 <p className="pb-2"> <strong>Billing Information</strong> </p>
                {/* <form className=""> */}
                <div className="row pb-3">
                	<div className="col-md-12">
                      <div className="form-group">
                        <label for="First Name">Name on card  <span className="text-danger"> * </span></label>
                        <div className="clearfix"> </div>
                        <input type="text" className="form-control width-60" placeholder="Enter the Name" name="CardName" value={this.state.fields.CardName} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.CardName}</div>
                      </div>
                    </div>

                    	<div className="col-md-12">
                      <div className="form-group">
                        <label for="First Name">Address  <span className="text-danger"> * </span></label>
                        <div className="clearfix"> </div>
                        <input type="text" className="form-control width-60" placeholder="Enter the Address" name="BillingAddress" value={this.state.fields.BillingAddress} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.BillingAddress}</div>
                      </div>
                    </div>

                    
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="First Name">  Postal / Zip  <span className="text-danger"> * </span></label>
                        <div className="clearfix"> </div>
                        <input type="text" className="form-control width-60" placeholder="Enter the Zip" name="Zip" value={this.state.fields.Zip} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.Zip}</div>
                      </div>
                    </div>
                    
                    <div className="col-md-12">  
                      <div className="form-group ">
                        <label for="formGroupExampleInput2"> Card Number  <span className="text-danger"> * </span> </label>
                        <div className="clearfix"> </div>
                        <input type="password" className="form-control width-60 d-inline"  placeholder="Enter your card number" id="CardNumber" name="CardNumber" value={this.state.fields.CardNumber} onChange={this.handleFormChange} />
                        <span className="d-inline gv-text-color small text-underline cursor-pointer" onClick={() => this.CardNumberShowHideClick()}> Show/Hide </span>
                        <div className="errorMsg">{this.state.errors.CardNumber}</div>
                      </div>
                      
                      
                    </div>  
                  </div>   
                  
                  
                   <div className="row pb-3">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="First Name">CVV Number  <span className="text-danger"> * </span> </label>
                        <div className="clearfix"> </div>
                        <input type="password" className="form-control width-60 d-inline" placeholder="Enter the CVV" id="CardCVV"  name="CardCVV" value={this.state.fields.CardCVV} onChange={this.handleFormChange} />
                        <span className="d-inline gv-text-color small text-underline cursor-pointer" onClick={() => this.CVVShowHideClick()}>  <a > Show/Hide </a> </span>  &nbsp;
                        <span className="d-inline gv-text-color small text-underline cursor-pointer">   <a> What is this </a></span>
                        <div className="errorMsg">{this.state.errors.CardCVV}</div>
                      </div>
                    </div>
                    
                    <div className="col-md-12">  
                      <div className="form-group">
                        <label for="formGroupExampleInput2"> Expiry date  <span className="text-danger"> * </span> </label>
                        <div className="clearfix"> </div>
                        <div className="col-12 width-60">
                        <div className="row">
                        <select className="form-control col-6" id="ExpiryMonth"  name="ExpiryMonth" value={this.state.fields.ExpiryMonth} onChange={this.handleFormChange}>
                              <option value="">Month</option>
                              {optionMonths}
                        </select>
                        <div className="errorMsg">{this.state.errors.ExpiryMonth}</div>
                        {/* <span className="exp-saparator"> </span> */}
                        <select className="form-control col-6 " id="ExpiryYear"  name="ExpiryYear" value={this.state.fields.ExpiryYear} onChange={this.handleFormChange}>
                              <option value="">Year</option>
                              {optionYears}
                        </select>
                        <div className="errorMsg">{this.state.errors.ExpiryYear}</div>
                        {/* <input type="text" className="form-control col-5"  placeholder="Year" /> */}
                        </div>
                        </div>
                      </div>
                      
                      <div className="form-check small" styleName={{paddingLeft:'0px'}}>
                         <label className="customcheck"> Setup autopay using this credit card. 
                          <input type="checkbox"   />
                          <span className="checkmark"></span>
                   		 </label>
                         <span className="text-underline gv-text-color"> View autopay Terms </span>
                    </div>
                    </div>  
                  </div>
                  
                 
                  
               
                </div>
                 <div className="clearfix"> </div>
               
                </div>
                
                <div className="col-md-5"> 
                	<div className="offer-for-user">
                    	 <p> <span> <img src ={Environment.STATIC_FILES_END_POINT_URL + "img/offer-icon.png"} alt=" " width="35" /> </span> <strong> Offers for you </strong> </p>
                    	<div className="subscribe">
                        <h1 className="gv-text-color m-0"> <strong>50% </strong></h1>
                        <p className="gv-text-color letter-space"> <strong>OFF</strong> </p>
                        <p className="small"> Rent for 6 Months and get 50% Off of the total rental amount.</p>
                        <p className="gv-text-color"> <strong>Subscribe & Avail this <br />Offer Now.</strong> </p>
                        </div>
                        
                        <div className="protection">
                       
                        <p className="gv-text-color letter-space"> <span> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/protection-icon.png"} alt=" " width="35" /> </span> <strong>Protection Insurance</strong> </p>
                        <p className="small">Protect your storage items with the powerful insurance scheme.</p>
                        <p className="gv-text-color"> <strong>Add Protection Insurance <br /> at $15 / Month</strong> </p>
                        </div>
                        
                        <p className="small gv-text-color text-underline pt-3 text-center"> View More Offers </p>
                    </div>
                </div>
                </div>
                
                
               </div>
               
               <hr />
               <div className="rent-your-unit-footer ">
              
               	<div className="unit-submit  pl-4 pr-4">
               		{!!totalAmount && 
                    <input type="submit" className="btn btn-gvstore btn-success border-0 green-gradient ml-3"  value={`Pay $${totalAmount.toFixed(2)} and Rent Now`}/> 
                   }
                    <br />
                </div>
               </div>
               </form> 
            </div>
            </div>
         	</div>
    )
}
}

export default RentPaymentFormFilling;