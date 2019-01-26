import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReserveFormView from './reserve.formview';
import { reserveNow, getAllMoveInCharges
} from '../../../modules/actioncreators/reserve.actioncreator';
import {Link, Redirect} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

class ReserveFormFilling extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: this.addDays(new Date(),12),
      fields: {},
      errors: {},
      selectedDate: new Date(),
      textMeUpdate: false,
      isInViewPage: false,
      isRedirectActivated: false,
      reserveNowResponse: {},
      showDatePicker: false
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitReserveNowForm = this.submitReserveNowForm.bind(this);
  }

  handleChange(date){
    this.setState({
      selectedDate: date
    });
    //console.log(this.formatDate(date));
    const {units} =  this.props.allUnits;
    const pathParams = this.props.pathParams;

    const {unit} = this.props.selectedUnitInfo;
    const {insurancePlans} =   Object.keys(this.props.selectedUnitInfo).length  > 0 ? this.props.selectedUnitInfo : this.props.allUnits;

    var unitInfo = '';
    if(!pathParams.isReloaded){
         unitInfo = !!unit ? unit : {};
    }
    else {
        unitInfo = !!units ? units.filter(x=>x.firstAvailableUnitID == pathParams.unitId)[0] : {};
    }

    var requestObj = {
      "concessionID": unitInfo.concessionID,
      "insurCoverageID": insurancePlans[0].insurCoverageID,
      "locationCode": pathParams.locationCode,
      "moveInDate": this.formatDate(date),
      "siteID": unitInfo.siteID,
      "tenantID": 0,
      "unitID": pathParams.unitId
    };
    document.getElementById('div-preloader').style.display = 'block';
  var promise = this.props.getAllMoveInCharges(requestObj);
  promise.then((success)=>{
    document.getElementById('div-preloader').style.display = 'none';
  })
  }

  componentDidMount(){
    this.setState({showDatePicker: true});
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
      this.reserveNowClick();
    }
  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    var invalidFieldNames = [];

    document.getElementById("FirstName").focus();
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
    
    
    if (!fields["PhoneNumber"]) {
      formIsValid = false;
      errors["PhoneNumber"] = "Please enter your Phone Number.";
      
    }

    if (typeof fields["PhoneNumber"] !== "undefined") {
      if (!fields["PhoneNumber"].match(/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/)) {
        formIsValid = false;
        errors["PhoneNumber"] = "Please enter valid Phone Number.";
        invalidFieldNames.push("PhoneNumber");
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

    if(Object.keys(errors).length > 0){
      document.getElementById(Object.keys(errors)[0]).focus();

      Object.keys(errors).reduce((object, key) => {
        if (key !== Object.keys(errors)[0]) {
          delete errors[key]
        }
      });
   
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
    

    const {moveInCharges} = this.props.moveInCharges;
    const {totalAmount} = this.props.moveInCharges;

    
    var unitInfo = '';
    if(!pathParams.isReloaded){
         unitInfo = !!unit ? unit : {};
    }
    else {
        unitInfo = !!units ? units.filter(x=>x.firstAvailableUnitID == pathParams.unitId)[0] : {};
    }

    var requestData =
    {
      "concessionID": Object.keys(unitInfo).length > 0 && unitInfo.concessionID,
      "emailAddress": this.state.fields.Email,
      "firstName": this.state.fields.FirstName,
      "insurCoverageID": insurancePlans.length > 0 ? insurancePlans[0].insurCoverageID : 0,
      "lastName": this.state.fields.LastName,
      "locationCode": pathParams.locationCode,
      "moveInDate": this.formatDate(this.state.selectedDate),
      "phoneNumber": this.state.fields.PhoneNumber.replace(/[^\w]/g, ''),
      "siteID": Object.keys(unitInfo).length > 0 && unitInfo.siteID,
      "tenantID": 0,
      "textMeUpdates": this.state.textMeUpdate,
      "unitID": pathParams.unitId,
      "uuid": "string"
    };

    document.getElementById('div-preloader').style.display = 'block';
      reserveNow(requestData).then((success)=>{
        if(success.status.code  == 200){
          document.getElementById('div-preloader').style.display = 'none';
          // alert('Reserved succesfully');
         // this.setState({isRedirectActivated: true});
        
         this.setState({reserveNowResponse: success, isInViewPage: true});
        }
      },
      (error)=>{
        alert((JSON.parse(error.text)).status.message);
        document.getElementById('div-preloader').style.display = 'none';
      });
  }

  reserveConfirmationDone =()=>{
    this.setState({isRedirectActivated: true});
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

  if (this.state.isRedirectActivated) {
    this.setState({isRedirectActivated: false});
    return <Redirect to='/' />
  }

    return(
      <div className="col-12 col-md-8">
      {this.state.isInViewPage && <ReserveFormView formData={this.state.fields} reservationData={this.state.reserveNowResponse} eventEditMode={this.isEditClicked}></ReserveFormView> }

      {!this.state.isInViewPage &&
      <div className="" >
        <div className="rent-your-unit-now pt-3 pb-3">
        <div className="rent-unit-block">
        <h5 className="pt-3"> Rent your unit now! </h5>
        <hr />
        <p> Contact Information </p>
        <form method="post"  name="frmReserveNow"  onSubmit= {this.submitReserveNowForm}>
        <div className="fill-rent-info">
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
                <input type="text" className="form-control"  placeholder="Last Name" name="LastName" id="LastName" value={this.state.fields.LastName} onChange={this.handleFormChange} />
                <div className="errorMsg">{this.state.errors.LastName}</div>
              </div>
            </div>  
          </div>   
          
          
           <div className="row pb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label for="First Name"> Phone Number <span className="text-danger"> * </span> </label>

<NumberFormat format="(###) ###-####" mask="_" className="form-control" placeholder="Enter your phone number" name="PhoneNumber" id="PhoneNumber" value={this.state.fields.PhoneNumber} onChange={this.handleFormChange}/>

                {/* <input type="text" className="form-control" placeholder="Enter your phone number" name="PhoneNumber" id="PhoneNumber" value={this.state.fields.PhoneNumber} onChange={this.handleFormChange} /> */}
                <div className="errorMsg">{this.state.errors.PhoneNumber}</div>
                
              </div>
            </div>
            
            <div className="col-md-6">  
              <div className="form-group">
                <label for="formGroupExampleInput2"> Email <span className="text-danger"> * </span> </label>
                <input type="text" className="form-control"  placeholder="Enter your email address"  name="Email" id="Email" value={this.state.fields.Email} onChange={this.handleFormChange} />
                <div className="errorMsg">{this.state.errors.Email}</div>
              </div>
            </div> 
            <div className="form-check small">
                 <label className="customcheck"> <strong> Text me my reservation details and important move-in information.</strong>
                  <input type="checkbox" name="chkTextMeUpdate" onChange={(event) => {this.onChangeTextMeUpdates(event)}}   checked={this.state.fields.isTextMeUpdatesChecked} />
                  <span className="checkmark"></span>
                </label>
            </div> 
          </div>
          
           
          <div className="row pb-3">  
            <div className="col-md-6">
              <div className="form-group">
                <label for="First Name"> Movie-In Date <span className="text-danger"> * </span> </label>
               
              {!!this.state.showDatePicker && 
                <DatePicker className="form-control"
        selected={this.state.selectedDate}
        onChange={this.handleChange}
        minDate={this.state.startDate}
        maxDate={this.state.endDate}
      />
    }

              </div>
            </div>
            
            </div>          
      </div>

      

 <div className="rent-your-unit-footer ">
      <div className="unit-submit  pl-4 pr-4">
     
        <div className="row">
           <div className="col-md-6"> 
               <span> Save time on your move-in day <br />
 <Link className="gv-text-color text-underline" to={`/rent/${this.props.pathParams.locationCode}/${this.props.pathParams.unitId}`}> Rent the unit now </Link> 
 
 </span>
  </div>
             <div className="col-md-6"> 
            
             {/* <a className="btn btn-gvstore btn-success border-0 green-gradient float-right" >  */}
             <input type="submit" className="btn btn-gvstore btn-success border-0 green-gradient float-right"  value="Reserve for Free"/> 
             {/* </a> */}
             </div>
         </div>
     </div>
    </div>

        </form> 
        
      </div>
      
     
       
       
    </div>
    </div>
      }
    
   </div>   
    )
}
}

//export default ReserveFormFilling;

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllMoveInCharges }, dispatch);

export default connect(null, mapDispatchToProps)(ReserveFormFilling);