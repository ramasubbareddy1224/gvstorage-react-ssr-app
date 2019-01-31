import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {Environment} from '../../../configurations/environment';
import { confirmPayment
} from '../../../modules/actioncreators/rent.actioncreator';
import {Link, Redirect} from 'react-router-dom';
import DatePicker from "react-datepicker";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllMoveInCharges
} from '../../../modules/actioncreators/reserve.actioncreator';
import RentConfirmation from './rent.confirmation';
import NumberFormat from 'react-number-format';
import creditCardType, { getTypeInfo, types as CardType } from 'credit-card-type';

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
      isInViewPage: false,
      confirmPaymentReponse: {},
      showDatePicker: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.setState({showDatePicker: true});
  }


  handleChange(date){
    this.setState({
      selectedDate: date
    });

    setTimeout(() => {
      this.getMoveInData();
    }, 10);

    
  }
  addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
  }
  


getMoveInData(){
  const {units} =  this.props.allUnits;
  const pathParams = this.props.pathParams;

  const {unit} = this.props.selectedUnitInfo;
  const {insurancePlans} =   Object.keys(this.props.allUnits).length  > 0 ? this.props.allUnits : this.props.selectedUnitInfo;

  var unitInfo = '';
  if(!pathParams.isReloaded){
       unitInfo = !!unit ? unit : {};
  }
  else {
      unitInfo = !!units ? units.filter(x=>x.firstAvailableUnitID == pathParams.unitId)[0] : {};
  }

  
  var insuranceProtectionCoverage =  this.state.fields.ProtectionCoverage;
  if(!this.state.fields.ProtectionCoverage )
  {
    insuranceProtectionCoverage =  !!insurancePlans && insurancePlans[0].insurCoverageID; 
  }

  

  var requestObj = {
    "concessionID": unitInfo.concessionID,
    "insurCoverageID": parseInt(insuranceProtectionCoverage),
    "locationCode": pathParams.locationCode,
    "moveInDate": this.formatDate(this.state.selectedDate),
    "siteID": unitInfo.siteID,
    "tenantID": 0,
    "unitID": pathParams.unitId
  };
  document.getElementById('div-preloader').style.display = 'block';
    var promise = this.props.getAllMoveInCharges(requestObj);
    promise.then((success)=>{
      document.getElementById('div-preloader').style.display = 'none';
    }, (error)=>{
      document.getElementById('div-preloader').style.display = 'none';
    });
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

    if(e.target.name == "ProtectionCoverage"){
      setTimeout(() => {
        this.getMoveInData();
      }, 10);
    }
    delete this.state.errors[e.target.name];
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

      const allProps = this.props;
      //const {insurancePlans} =   Object.keys(this.props.selectedUnitInfo).length  > 0 ? this.props.selectedUnitInfo : this.props.allUnits;
      document.getElementById('div-preloader').style.display = 'block';


      var cType = 0;
      if(!!this.state.fields.CardNumber)
      {
        if(creditCardType(this.state.fields.CardNumber).length > 0){
          switch (creditCardType(this.state.fields.CardNumber)[0].type){
            case 'mastercard':
              cType = 5;
              break;
            case 'visa':
              cType = 6;
              break;
            case 'american-express':
              cType = 7;
              break;
            case 'discover':
              cType = 8;
              break;
            case 'diners-club':
              cType = 9;
              break;
            default:
              cType = 0;
              break;
          }

        }
        //switch (creditCardType(this.state.fields.CardNumber)[0].type)
      } 


     var requestData = {
      "accessCode": "",
      "billingAddress": this.state.fields.BillingAddress,
      "billingFrequency": 0,
      "billingName": this.state.fields.CardName,
      "billingZipCode": this.state.fields.Zip,
      "ccvv": !!this.state.fields.CardCVV && this.state.fields.CardCVV.trim(),
      "cexpDate": this.state.fields.ExpiryMonth + '/' + this.state.fields.ExpiryYear,
      "cnumber": !!this.state.fields.CardNumber && this.state.fields.CardNumber.replace(/\s/g, ""),
      "concessionID": Object.keys(unitInfo).length > 0 && unitInfo.concessionID,
      "ctype": cType,
      "endDate": moveInCharges[0].date,
      "insurCoverageID": parseInt(this.state.fields.ProtectionCoverage),
      "locationCode": pathParams.locationCode,
      "payMethod": 6,
      "paymentAmount":   parseFloat((this.props.moveInCharges.totalAmount).toFixed(2)), //,
      "siteID": Object.keys(unitInfo).length > 0 && unitInfo.concessionID,
      "startDate": this.formatDate(this.state.selectedDate),
      "tenantID": pathParams.tenantId,
      "unitID": pathParams.unitId,
      "uuid": ""
    }

      confirmPayment(requestData).then((success)=>{
       // alert(success.status.message);
        document.getElementById('div-preloader').style.display = 'none';
        if(success.status.code  == 200){
         
          this.props.onConfirmationPageEnter();
          this.setState({isInViewPage: true, confirmPaymentReponse: success});
          
        }
        else if(success.status.code == -83){
         document.getElementById('div-preloader').style.display = 'none';
        }

        if(success.status.code < 0){
          setTimeout(() => {
            document.getElementById("reserveFailureMsg").style.display = "block";
            document.getElementById("failureMsg").innerText = success.status.message;
          }, 10);
        }
      },
      (error)=>{
        setTimeout(() => {
          document.getElementById("reserveFailureMsg").style.display = "block";
          document.getElementById("failureMsg").innerText = !!error.text && !!(JSON.parse(error.text)).status && (JSON.parse(error.text)).status.message;
        }, 10);

        //alert((JSON.parse(error.text)).status.message);
        document.getElementById('div-preloader').style.display = 'none';
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
      if (!fields["BillingAddress"].match(/^[a-zA-Z0-9 ]*$/)) {
        formIsValid = false;
        errors["BillingAddress"] = "No special symbols allowed.";
      }
    }

    if (!fields["Zip"]) {
      formIsValid = false;
      errors["Zip"] = "Please enter your Zip.";
    }

    if (typeof fields["Zip"] !== "undefined") {
      if (!fields["Zip"].match(/^[0-9]{5}$/)) {
        formIsValid = false;
        errors["Zip"] = "Please enter valid Zip/Postal Code.";
      }
    }

    if (!fields["CardNumber"]) {
      formIsValid = false;
      errors["CardNumber"] = "Please enter your Card Number.";
    }

    if (typeof fields["CardNumber"] !== "undefined") {
      if (!fields["CardNumber"].replace(/\s/g, "").match(/^[0-9]{14,16}$/)) {
        formIsValid = false;
        errors["CardNumber"] = "Please enter valid Card Number.";
      }
    }

    if (!fields["CardCVV"]) {
      formIsValid = false;
      errors["CardCVV"] = "Please enter your Card Number.";
    }

    if (typeof fields["CardCVV"] !== "undefined") {
      if (!fields["CardCVV"].trim().match(/^[0-9]{3,4}$/)) {
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

    
    // if(Object.keys(errors).length > 0){
    //   document.getElementById(Object.keys(errors)[0]).focus();

    //   Object.keys(errors).reduce((object, key) => {
    //     if (key !== Object.keys(errors)[0]) {
    //       delete errors[key]
    //     }
    //   });
   
    // }


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
    const {insurancePlans} =   Object.keys(this.props.allUnits).length  > 0 ? this.props.allUnits : this.props.selectedUnitInfo;


    
  const optionsProtectionCoverage = !!insurancePlans && insurancePlans.map((val, index) =>{
return (
      <option key={index} value={val.insurCoverageID}>Covers up to ${val.coverage} USD - ${val.premium} USD/Month</option>
  )
  })

  if(!this.state.fields.ProtectionCoverage){
  this.state.fields.ProtectionCoverage = !!insurancePlans && insurancePlans.length > 0 && insurancePlans[0].insurCoverageID;
}
  


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
      <span>TAX {moveInCharge.taxRate1}% <span style={{fontSize:'12px'}}>({moveInCharge.description})</span>: </span>}

              { !!moveInCharge.taxRate1 && <div><span className="pull-right">${moveInCharge.taxAmount1} USD</span> <br/> </div> }
           
          { !!moveInCharge.taxRate2 && 
             <span>TAX {moveInCharge.taxRate2}% <span style={{fontSize:'12px'}}>({moveInCharge.description})</span>: </span> }

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

 {this.state.isInViewPage && <RentConfirmation rentConfirmationData={this.state.confirmPaymentReponse} tenantInfo={tenantInfo}></RentConfirmation> }

      {!this.state.isInViewPage && 
            	<div className="">
                <div className="rent-your-unit-now pt-3 pb-3">
                <form  method="post"  name="frmRentPayment"  onSubmit= {this.submitRentPaymentForm}>
                <div className="rent-unit-block">
                <h5 className="pt-3"> Rent your unit now! </h5>
                <hr />
                
                <div className="fill-rent-info">
                <div className="row">
                <div className="col-md-12"> 
                <p> Your Information </p>
                <div classname="rent-now-total-info">
                { tenantInfo && 
                <p> 
                <strong classname="total-info">{tenantInfo.firstName} {tenantInfo.lastName} <br />
                {tenantInfo.emailAddress} <br />
                {tenantInfo.phoneNumber}</strong>
                </p>
                }
                </div>
                <hr />
                
                
                <p class="text-uppercase"> Amount To Pay </p>
                <strong classname="total-info">
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
                <span className="text-dark" style={{fontSize:'18px'}}> <strong>Total</strong> </span> ${totalAmount.toFixed(2)} 
                <span className="small text-dark" style={{fontSize:'18px'}}> <strong>USD</strong> </span>
                </h2> 
                }
                <div className="clearfix"> </div>
                <hr />
                
                {/* <div className="offer-on-months">
                <div className="alert alert-bg align-text-top">
                <div className="form-check small">
                <label className="customcheck"> Rent out for 6 Months of storage & get 50% Off of the total rental amount <br />
                <input type="checkbox"  />
                <span className="checkmark mt-1"></span>
                </label>
                <span styleName={{fontSize:'1.5rem', fontWeight: 'bold'}}> <del className="text-muted"> $408 </del> &nbsp; <span className="gv-text-color"> $204 </span> <span className="text-dark"> USD  </span> </span> for 6 Months
                </div>
                </div>
                </div> */}
                  
                 <div  className="billing-info pt-2 pb-5">

                
                <div className="row pb-4">
                	<div className="col-md-6">
                      <div className="form-group">
                      <label htmlFor="ProtectionCoverage">Select Protection coverage <span className="text-danger"> * </span> </label>
                       
                        <select  className={'form-control ' +(!!this.state.errors.ProtectionCoverage && 'input-error')} title={this.state.errors.ProtectionCoverage}  id="ProtectionCoverage"  name="ProtectionCoverage" value={this.state.fields.ProtectionCoverage} onChange={this.handleFormChange}>
                              {/* <option value="">Select Protection coverage</option> */}
                              {optionsProtectionCoverage}
                        </select>
                        {/* <div className="errorMsg">{this.state.errors.ProtectionCoverage}</div> */}
                      </div>
                    </div>

                    	<div className="col-md-6">
                      <div className="form-group">
                      <label htmlFor="First Name"> Movie-In Date <span className="text-danger"> * </span> </label>
                      {!!this.state.showDatePicker &&   <DatePicker className="form-control"
                          selected={this.state.selectedDate}
                          onChange={this.handleChange}
                          minDate={this.state.startDate}
                          maxDate={this.state.endDate}
                        />
                      }
                      </div>
                    </div>
                    </div>  


                 <h6 className ="mb-0"> <strong>Billing Information</strong> </h6>
                {/* <form className=""> */}
                <div className="row pb-2">
                	<div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="First Name">Name on card  <span className="text-danger"> * </span></label>
                        <div className="clearfix"> </div>
                        <input type="text"  className={'form-control ' +(!!this.state.errors.CardName && 'input-error')} title={this.state.errors.CardName}  placeholder="Enter the Name" name="CardName" id="CardName" value={this.state.fields.CardName} onChange={this.handleFormChange} />
                        {/* <div className="errorMsg">{this.state.errors.CardName}</div> */}
                      </div>
                    </div>

                    	<div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="First Name">Address  <span className="text-danger"> * </span></label>
                        <div className="clearfix"> </div>
                        <input type="text"  className={'form-control ' +(!!this.state.errors.BillingAddress && 'input-error')} title={this.state.errors.BillingAddress}  placeholder="Enter the Address" name="BillingAddress" id="BillingAddress" value={this.state.fields.BillingAddress} onChange={this.handleFormChange} />
                        {/* <div className="errorMsg">{this.state.errors.BillingAddress}</div> */}
                      </div>
                    </div>
                  </div>

                    <div className="row pb-2"> 
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="First Name">  Postal / Zip  <span className="text-danger"> * </span></label>
                        <div className="clearfix"> </div>
                        {/* <input type="text" className="form-control" placeholder="Enter the Zip" name="Zip" id="Zip" value={this.state.fields.Zip} onChange={this.handleFormChange} /> */}
                        <NumberFormat format="#####" className={'form-control ' +(!!this.state.errors.Zip && 'input-error')} title={this.state.errors.Zip} placeholder="Enter the Zip" name="Zip" id="Zip" value={this.state.fields.Zip} onChange={this.handleFormChange}/>
                        {/* <div className="errorMsg">{this.state.errors.Zip}</div> */}
                      </div>
                    </div>
                    
                    <div className="col-md-6">  
                      <div className="form-group ">
                        <label htmlFor="formGroupExampleInput2"> Card Number  <span className="text-danger"> * </span> </label>
                        <div className="clearfix"> </div>
                        <NumberFormat format="#### #### #### ####" className={'form-control width-60 d-inline ' +(!!this.state.errors.CardNumber && 'input-error')} title={this.state.errors.CardNumber}  placeholder="Enter your card number" id="CardNumber" name="CardNumber" value={this.state.fields.CardNumber} onChange={this.handleFormChange}/>
                        {/* <input type="password" className={'form-control width-60 d-inline ' +(!!this.state.errors.CardNumber && 'input-error')} title={this.state.errors.CardNumber}  placeholder="Enter your card number" id="CardNumber" name="CardNumber" value={this.state.fields.CardNumber} onChange={this.handleFormChange} /> &nbsp; */}
                        <span className="d-inline gv-text-color small text-underline cursor-pointer" onClick={() => this.CardNumberShowHideClick()}> Show/Hide </span>
                        {/* <div className="errorMsg">{this.state.errors.CardNumber}</div> */}
                      </div>
                      
                      
                    </div> 
                    </div> 
                    
                  
                  
                   <div className="row pb-2">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="First Name">CVV Number  <span className="text-danger"> * </span> </label>
                        <div className="clearfix"> </div>
                        {/* <input type="password" className="form-control w-45 d-inline" placeholder="Enter the CVV" id="CardCVV"  name="CardCVV" value={this.state.fields.CardCVV} onChange={this.handleFormChange} /> */}
                        <NumberFormat format="####" className="form-control w-45 d-inline"  className={'form-control w-45 d-inline ' +(!!this.state.errors.CardCVV && 'input-error')} title={this.state.errors.CardCVV}  placeholder="Enter the CVV" id="CardCVV"  name="CardCVV" value={this.state.fields.CardCVV} onChange={this.handleFormChange} />
                        <span className="d-inline gv-text-color small text-underline cursor-pointer" onClick={() => this.CVVShowHideClick()}>  <a > Show/Hide </a> </span>  &nbsp;
                        <span className="d-inline gv-text-color small text-underline cursor-pointer">   <a> What is this </a></span>
                        {/* <div className="errorMsg">{this.state.errors.CardCVV}</div> */}
                      </div>
                    </div>
                    
                    <div className="col-md-6">  
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput2"> Expiry date  <span className="text-danger"> * </span> </label>
                        <div className="clearfix"> </div>
                        <div className="col-12 ">
                        <div className="row">
                        
                        <select className={'form-control col-5 ' +(!!this.state.errors.ExpiryMonth && 'input-error')} title={this.state.errors.ExpiryMonth}  id="ExpiryMonth"  name="ExpiryMonth" value={this.state.fields.ExpiryMonth} onChange={this.handleFormChange}>
                              <option value="">Month</option>
                              {optionMonths}
                        </select> 
                        {/* <div className="errorMsg">{this.state.errors.ExpiryMonth}</div> */}
                        
                        <span className="exp-saparator col-1 "> </span>
                      
                        <select  className={'form-control col-5 ' +(!!this.state.errors.ExpiryYear && 'input-error')} title={this.state.errors.ExpiryYear}  id="ExpiryYear"  name="ExpiryYear" value={this.state.fields.ExpiryYear} onChange={this.handleFormChange}>
                              <option value="">Year</option>
                              {optionYears}
                        </select>
                        {/* <div className="errorMsg">{this.state.errors.ExpiryYear}</div> */}
                        {/* <input type="text" className="form-control col-5"  placeholder="Year" /> */}
                        
                        </div>
                        </div>
                      </div>
                      </div>
                    
                    
                        
                  </div>
                  <div className="row pb-2">
                      <div className="form-check small" style={{paddingLeft:'15px'}}>
                         <label className="customcheck"> Setup autopay using this credit card. 
                          <input type="checkbox"   />
                          <span className="checkmark"></span>
                   		 </label>
                         <span className="text-underline gv-text-color"> View autopay Terms </span>
                    </div>
                    </div>
                 
                  
               
                </div>
                 <div className="clearfix"> </div>
               
                </div>
                
                {/* <div className="col-md-5"> 
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
                 */}
                </div>
            </div>
                
               </div>
               
            
               <div className="rent-your-unit-footer ">
              <br/>
               	<div className="unit-submit  pl-4 pr-4">
               		{!!totalAmount && 
                    <input type="submit" className="btn btn-gvstore btn-success pull-right border-0 green-gradient ml-3"  value={`Pay $${totalAmount.toFixed(2)} and Rent Now`}/> 
                   }
                    <br />
                </div>
               </div>
               </form> 
            </div>
            </div>
            }
         	</div>
    )
}
}

//export default RentPaymentFormFilling;

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllMoveInCharges }, dispatch);

export default connect(null, mapDispatchToProps)(RentPaymentFormFilling);