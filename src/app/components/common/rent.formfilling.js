import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReserveFormView from './reserve.formview';
import { reserveNow
} from '../../../modules/actioncreators/reserve.actioncreator';
import { allResolved } from 'q';

class RentFormFilling extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: this.addDays(new Date(),12),
      fields: {},
      errors: {},
      selectedDate: new Date(),
      textMeUpdate: false,
      isInViewPage: false
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitReserveNowForm = this.submitReserveNowForm.bind(this);
  }

  handleChange(date){
    this.setState({
      selectedDate: date
    });
  }

  handleFormChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
  }

  submitReserveNowForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({isInViewPage: true});
        // let fields = {};
        // fields["FirstName"] = "";
        // fields["LastName"] = "";
        // fields["PhoneNumber"] = "";
        // fields["Email"] = "";
        // this.setState({fields:fields});
        //alert("Form submitted");
    }
  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["FirstName"]) {
      formIsValid = false;
      errors["FirstName"] = "Please enter your First Name.";
    }

    if (typeof fields["FirstName"] !== "undefined") {
      if (!fields["FirstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["FirstName"] = "Please enter alphabet characters only.";
      }
    }

    if (!fields["LastName"]) {
      formIsValid = false;
      errors["LastName"] = "Please enter your Last Name.";
    }

    if (typeof fields["LastName"] !== "undefined") {
      if (!fields["LastName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["LastName"] = "Please enter alphabet characters only.";
      }
    }
    
    if (typeof fields["CompanyName"] !== "undefined") {
      if (!fields["CompanyName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["CompanyName"] = "Please enter alphabet characters only.";
      }
    }
    
    
    if (!fields["PhoneNumber"]) {
      formIsValid = false;
      errors["PhoneNumber"] = "Please enter your Phone Number.";
    }

    if (typeof fields["PhoneNumber"] !== "undefined") {
      if (!fields["PhoneNumber"].match(/^[0-9]{9}$/)) {
        formIsValid = false;
        errors["PhoneNumber"] = "Please enter valid Phone Number.";
      }
    }

    if (!fields["Email"]) {
      formIsValid = false;
      errors["Email"] = "Please enter your Email Id.";
    }

    if (typeof fields["Email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["Email"])) {
        formIsValid = false;
        errors["Email"] = "Please enter valid Email Id.";
      }
    }

    if (typeof fields["FaxNumber"] !== "undefined") {
      if (!fields["FaxNumber"].match(/^[0-9]{9}$/)) {
        formIsValid = false;
        errors["FaxNumber"] = "Please enter valid Fax Number.";
      }
    }

    if (!fields["Address"]) {
      formIsValid = false;
      errors["Address"] = "Please enter your Address.";
    }

    if (!fields["City"]) {
      formIsValid = false;
      errors["City"] = "Please enter your City.";
    }

    if (typeof fields["City"] !== "undefined") {
      if (!fields["City"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["City"] = "Please enter alphabet characters only.";
      }
    }


    if (!fields["State"]) {
      formIsValid = false;
      errors["State"] = "Please enter your State.";
    }

    if (typeof fields["State"] !== "undefined") {
      if (!fields["State"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["State"] = "Please enter alphabet characters only.";
      }
    }

    if (!fields["County"]) {
      formIsValid = false;
      errors["County"] = "Please enter your County.";
    }

    if (typeof fields["County"] !== "undefined") {
      if (!fields["County"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["County"] = "Please enter alphabet characters only.";
      }
    }

    if (!fields["Country"]) {
      formIsValid = false;
      errors["Country"] = "Please enter your Country.";
    }

    if (typeof fields["Country"] !== "undefined") {
      if (!fields["Country"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["Country"] = "Please enter alphabet characters only.";
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

    if (!fields["ProtectionCoverage"]) {
      formIsValid = false;
      errors["ProtectionCoverage"] = "Please select Protection Coverage.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }

  onChangeTextMeUpdates(event){
    this.setState({textMeUpdate: event.target.checked});
  }

  isEditClicked=()=>{
    this.setState({isInViewPage: false});
  }

  reserveNowClick=()=>{


    //const {insurancePlans} = this.props.allUnits;
    const {siteLocation} = this.props.allUnits;
    const {units} =  this.props.allUnits;
    const pathParams = this.props.pathParams;

    const {unit} = this.props.selectedUnitInfo;
    const {insurancePlans} =   Object.keys(this.props.selectedUnitInfo).length  > 0 ? this.props.selectedUnitInfo : this.props.allUnits;
    const selectedSiteLocation = this.props.selectedUnitInfo.siteLocation; 
    debugger;

    const {moveInCharges} = this.props.moveInCharges;
    const {totalAmount} = this.props.moveInCharges;

    var requestData =
    {
      "concessionID": Object.keys(unit).length > 0 && unit.concessionID,
      "emailAddress": this.state.fields.Email,
      "firstName": this.state.fields.FirstName,
      "insurCoverageID": insurancePlans.length > 0 ? insurancePlans[0].insurCoverageID : 0,
      "lastName": this.state.fields.LastName,
      "locationCode": pathParams.locationCode,
      "moveInDate": this.formatDate(this.state.selectedDate),
      "phoneNumber": this.state.fields.PhoneNumber,
      "siteID": Object.keys(unit).length > 0 && unit.siteID,
      "tenantID": 0,
      "textMeUpdates": this.state.textMeUpdate,
      "unitID": pathParams.unitId,
      "uuid": "string"
    };

      reserveNow(requestData).then((success)=>{
        debugger;
      },
      (error)=>{
        debugger;
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

render(){

  const {insurancePlans} =   Object.keys(this.props.selectedUnitInfo).length  > 0 ? this.props.selectedUnitInfo : this.props.allUnits;

  const optionsProtectionCoverage = !!insurancePlans && insurancePlans.map((val, index) =>{
return (
      <option key={index} value={val.insurCoverageID}>Covers up to ${val.coverage} USD - ${val.premium} USD/Month</option>
  )
  })

    return(
     
      <div className="col-12 col-md-8">
     <div className="">
                <div className="rent-your-unit-now pt-3 pb-3">
                 <div className="rent-unit-block">
                <h5 className="pt-3"> Rent your unit now! </h5>
                <hr />
                <form className="mb-5 " method="post"  name="frmRentNow"  onSubmit= {this.submitReserveNowForm}>
                <div className="row pb-3">
                	<div className="col-md-6">
                      <div className="form-group">
                        <label for="First Name">First Name <span className="text-danger"> * </span></label>
                        <input type="text" className="form-control" placeholder="First Name" id="FirstName" name="FirstName" value={this.state.fields.FirstName} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.FirstName}</div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">  
                      <div className="form-group">
                        <label for="formGroupExampleInput2"> Last Name <span className="text-danger"> * </span> </label>
                        <input type="text" className="form-control"  placeholder="Last Name" name="LastName" value={this.state.fields.LastName} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.LastName}</div>
                      </div>
                    </div>  
                  </div>   
                  
                  
                   <div className="row pb-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="First Name">Company </label>
                        <input type="text" className="form-control" placeholder="Enter your company name" name="CompanyName" value={this.state.fields.CompanyName} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.CompanyName}</div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">  
                      <div className="form-group">
                        <label for="formGroupExampleInput2"> Email <span className="text-danger"> * </span> </label>
                        <input type="text" className="form-control"  placeholder="Enter your email address" name="Email" value={this.state.fields.Email} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.Email}</div>
                      </div>
                    </div>  
                  </div>
                  
                   
                  <div className="row pb-3">  
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="First Name"> Phone <span className="text-danger"> * </span> </label>
                        <input type="text" className="form-control" placeholder="Enter your phone number" name="PhoneNumber" value={this.state.fields.PhoneNumber} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.PhoneNumber}</div>
                        
                      </div>
                    </div>
                    
                    <div className="col-md-6">  
                      <div className="form-group">
                        <label for="formGroupExampleInput2"> Fax </label>
                        <input type="text" className="form-control"  placeholder="Enter your Fax number" name="FaxNumber" value={this.state.fields.FaxNumber} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.FaxNumber}</div>
                      </div>
                    </div>  
                    <div className="form-check small">
                         <label className="customcheck">  Text me my reservation details and important move-in information.
                         <input type="checkbox" name="chkTextMeUpdate" onChange={(event) => {this.onChangeTextMeUpdates(event)}}   checked={this.state.fields.isTextMeUpdatesChecked} />
                        <span className="checkmark"></span>
                   		 </label>
                    </div> 
                    </div>          
				
                 <div className="row pb-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="First Name">Address <span className="text-danger"> * </span> </label>
                        <input type="text" className="form-control" placeholder="Enter your address"  name="Address" value={this.state.fields.Address} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.Address}</div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">  
                      <div className="form-group">
                        <label for="formGroupExampleInput2"> City <span className="text-danger"> * </span> </label>
                        <input type="text" className="form-control" placeholder="Enter your city"  name="City" value={this.state.fields.City} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.City}</div>
                      </div>
                    </div>  
                  </div>
                  
                  
                  <div className="row pb-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="d-block" for="First Name">State / Province <span className="text-danger"> * </span></label>
                        <input type="text" className="form-control" placeholder="Enter your state"  name="State" value={this.state.fields.State} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.State}</div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">  
                      <div className="form-group">
                        <label for="formGroupExampleInput2"> County <span className="text-danger"> * </span> </label>
                        <input type="text" className="form-control" placeholder="Enter your county"  name="County" value={this.state.fields.County} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.County}</div>
                      </div>
                    </div>  
                  </div>
                  
                  
                  <div className="row pb-3">
                    <div className="col-md-6">
                      <div className="form-group">
                      <label className="d-block">Country / Region <span className="text-danger"> * </span> <span className="small pull-right"> (required if not in US & Canada) </span> </label>
                      <input type="text" className="form-control" placeholder="Enter your country"  name="Country" value={this.state.fields.Country} onChange={this.handleFormChange} />
                      <div className="errorMsg">{this.state.errors.Country}</div>
                      </div>
                    </div>
                    
                    <div className="col-md-6">  
                      <div className="form-group">
                        <label for="formGroupExampleInput2"> Postal / Zip <span className="text-danger"> * </span> </label>
                        <input type="text" className="form-control" placeholder="Enter your Zip"   name="Zip" value={this.state.fields.Zip} onChange={this.handleFormChange} />
                        <div className="errorMsg">{this.state.errors.Zip}</div>
                      </div>
                    </div>  
                  </div>
                  
                  
                  <div className="row pb-3">  
                    <div className="col-md-6">
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
                    
                  
                   
                  <div className="row pb-3">  
                    <div className="col-md-10">
                      <div className="form-group">
                        <label for="First Name">Select Protection coverage <span className="text-danger"> * </span> </label>
                        <p className="small"> We ask thea each of out customers select a property protection option. Our property protection plans listed below provided added peace of mind to protect your valuablea against demages from unfortunate and un pedictable incidents while in storage.</p>
                        <select className="form-control" id="Select Protection coverage"  name="ProtectionCoverage" value={this.state.fields.ProtectionCoverage} onChange={this.handleFormChange}>
                              <option value="">Select Protection coverage</option>
                              {optionsProtectionCoverage}
                        </select>
                        <div className="errorMsg">{this.state.errors.ProtectionCoverage}</div>
                      </div>
                    </div>
                    
                    </div>
                  
                  <div className="clearfix"> </div>

  <hr />
               <div className="rent-your-unit-footer ">
              
               	<div className="unit-submit  pl-4 pr-4">
               		<p> 
                     <input type="submit" className="btn btn-gvstore btn-success border-0 green-gradient float-right"  value="Proceed to payment "/> 
                     </p>
                    <br />
                </div>
               </div>

                </form> 
                <div className="clearfix"> </div>
               </div>
               
              
               
            </div>
            </div>
   </div>   
    )
}
}

export default RentFormFilling;