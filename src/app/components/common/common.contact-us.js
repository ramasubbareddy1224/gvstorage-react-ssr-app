import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { contactUs
} from '../../../modules/actioncreators/common.actioncreator';
import NumberFormat from 'react-number-format';

 class CommonContactUs extends Component{
   constructor(){
     super();
     this.state ={
      fields: {},
      errors: {},
      isToRedirect: false
     };
   }

   handleFormChange=(e)=> {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }
  
  
  submitContactUsForm=(e)=>{
    e.preventDefault();
    if (this.validateForm()) {

     
      //const {insurancePlans} =   Object.keys(this.props.selectedUnitInfo).length  > 0 ? this.props.selectedUnitInfo : this.props.allUnits;
      document.getElementById('div-preloader').style.display = 'block';
     var requestData = {
      "firstName": this.state.fields.FirstName,
      "lastName": this.state.fields.LastName,
      "phoneNumber": this.state.fields.PhoneNumber.replace(/[^\w]/g, ''),
      "email": this.state.fields.Email,
      "siteName": this.state.fields.SiteName,
      "comments": this.state.fields.Comments
    };

      contactUs(requestData).then((success)=>{
        //alert(success.status.message);
        document.getElementById('div-preloader').style.display = 'none';
        if(success.status.code  == 200){
          this.setState({isToRedirect: true});
        }
        // else if(success.status.code < -83){
        //  document.getElementById('div-preloader').style.display = 'none';
        // }
      },
      (error)=>{
        alert((JSON.parse(error.text)).status.message);
        document.getElementById('div-preloader').style.display = 'none';
      });
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

    if (!fields["SiteName"]) {
      formIsValid = false;
      errors["SiteName"] = "Please select Site Name.";
    }

    if (!fields["Comments"]) {
      formIsValid = false;
      errors["Comments"] = "Please enter Comments.";
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

render(){
  const siteLocations = this.props.allFacilitySites.siteLocations || [];

    if (this.state.isToRedirect) {
      this.setState({isToRedirect: false});
      return <Redirect to='/' />
    }

    return(
      <div className="container-fluid">
        <div className="container-fluid-padding">
      {/* <h2 className="text-center pb-3"> Contact Us </h2>
       */}
        <div className="rent-facility-info">
       <div className="row">
         <div className="col-12 col-md-4 ">
           <div className="facility-info">
             <div className="pt-3">
                 <h5> Contact Information </h5>
               </div>
               
               <div className="facility-data">
               <div className="data-heading">
                 <p> For information about availability, pricing or to reserve a storage unit, please contact a Great Value Storage facility near you by filling out the form below or  </p>
               </div>
               <div className="data-info">
                 <p className="gv-text-color"> Calling: 512-786-7243</p>
               </div>
               </div>
               
               <div className="facility-data">
               <div className="data-info">
                 <p className="gv-text-color"> Toll free Number: 877-537-8673 </p>
               </div>
              
               </div>
               
               
               
               <div className="facility-data">
               <div className="data-heading">
                 <p> Customer Service  </p>
               </div>
               <div className="data-info">
                 <p className="">For comments or questions regarding Customer Service  </p>
               </div>
               
               <h6 className="gv-text-color"> Please call: 512-786-7243 </h6>
               </div>
               
               </div>
           </div>
           
           <div className="col-12 col-md-8">
             <div className="">
             <form method="post"  name="frmContactUs"  onSubmit= {this.submitContactUsForm}>
               <div className="rent-your-unit-now pt-3 pb-3">
              
               <div className="rent-unit-block">
               <h5 className="pt-3"> Please fill below form for futher assistance </h5>
               <hr />
               <p> Contact Information </p>
               
               <div className="fill-rent-info">
               <div className="row pb-2">
                 <div className="col-md-6">
                     <div className="form-group">
                       <label htmlFor="First Name">First Name <span className="text-danger"> * </span></label>
                       <input type="text" className="form-control" placeholder="First Name" id="FirstName"  name="FirstName" value={this.state.fields.FirstName} onChange={this.handleFormChange} />
                       <div className="errorMsg">{this.state.errors.FirstName}</div>
                     </div>
                   </div>
                   
                   <div className="col-md-6">  
                     <div className="form-group">
                       <label htmlFor="formGroupExampleInput2"> Last Name <span className="text-danger"> * </span> </label>
                       <input type="text" className="form-control" placeholder="Last Name" id="LastName"  name="LastName" value={this.state.fields.LastName} onChange={this.handleFormChange} />
                       <div className="errorMsg">{this.state.errors.LastName}</div>
                     </div>
                   </div>  
                 </div>   
                 
                 
                  <div className="row pb-2">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label htmlFor="First Name"> Phone Number <span className="text-danger"> * </span> </label>
                       {/* <input type="text" className="form-control" id="PhoneNumber"  name="PhoneNumber" value={this.state.fields.PhoneNumber} onChange={this.handleFormChange}  placeholder="Enter your phone number" /> */}
                       <NumberFormat format="(###) ###-####" mask="_" className="form-control" placeholder="Enter your phone number" name="PhoneNumber" id="PhoneNumber" value={this.state.fields.PhoneNumber} onChange={this.handleFormChange}/>
                       <div className="errorMsg">{this.state.errors.PhoneNumber}</div>
                       
                     </div>
                   </div>
                   
                   <div className="col-md-6">  
                     <div className="form-group">
                       <label htmlFor="formGroupExampleInput2"> Email <span className="text-danger"> * </span> </label>
                       <input type="text" className="form-control" id="Email"  name="Email" value={this.state.fields.Email} onChange={this.handleFormChange}  placeholder="Enter your email address" />
                       <div className="errorMsg">{this.state.errors.Email}</div>
                     </div>
                   </div> 
                    
                 </div>
                 
                 
                 <div className="row pb-2">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label htmlFor="SiteName">Select Facility<span className="text-danger"> * </span> </label>
                      
                      
                      <select id="SiteName" name="SiteName" value={this.state.fields.SiteName} onChange={this.handleFormChange} className="form-control">
                           <option value="">Select Facility</option>
                           {
                           siteLocations.length > 0 && siteLocations.map((location)=>{
                          return <option value={location.content.name}>{location.content.name}</option>
                        })
                          }

                         </select>
                      
                         <div className="errorMsg">{this.state.errors.SiteName}</div>
                     </div>
                   </div>
                   
                   <div className="col-md-6">  
                     <div className="form-group">
                       <label htmlFor="formGroupExampleInput2"> Comments <span className="text-danger"> * </span> </label>
                       <textarea className="form-control" rows="5"  id="Comments"  name="Comments" value={this.state.fields.Comments} onChange={this.handleFormChange} ></textarea>
                       <div className="errorMsg">{this.state.errors.Comments}</div>
                     </div>
                   </div> 
                    
                 </div>
                 
                  
                           
       
                </div>
                 
                   
              
               
             </div>
             
             <div className="rent-your-unit-footer ">
             
                <div className="unit-submit  pl-4 pr-4">
               
                  <div className="row">
                     <div className="col-md-6"> 
                         
                       </div>
                       <div className="col-md-6"> 
                          <input type="submit"  className="btn btn-gvstore btn-success border-0 green-gradient float-right" value="Submit" /> 
                       </div>
                   </div>
               </div>
              </div>
              
             
           </div>
           </form>
           </div>
          </div>   
       
       </div>
     </div>
            </div>   
     </div>
    )
}
}

export default CommonContactUs;