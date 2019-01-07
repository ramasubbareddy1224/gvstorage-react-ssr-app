import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class ReserveFormFilling extends Component{
render(){
    return(
      <div className="col-12 col-md-8">
      <div className="">
        <div className="rent-your-unit-now pt-3 pb-3">
        <h5 className="pt-3"> Rent your unit now! </h5>
        <hr />
        <p> Contact Information </p>
        <form>
        <div className="row pb-3">
          <div className="col-md-6">
              <div className="form-group">
                <label for="First Name">First Name <span className="text-danger"> * </span></label>
                <input type="text" className="form-control" placeholder="First Name" />
              </div>
            </div>
            
            <div className="col-md-6">  
              <div className="form-group">
                <label for="formGroupExampleInput2"> Last Name <span className="text-danger"> * </span> </label>
                <input type="text" className="form-control"  placeholder="Last Name" />
              </div>
            </div>  
          </div>   
          
          
           <div className="row pb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label for="First Name">Company </label>
                <input type="text" className="form-control" placeholder="Enter your company name" />
              </div>
            </div>
            
            <div className="col-md-6">  
              <div className="form-group">
                <label for="formGroupExampleInput2"> Email * </label>
                <input type="text" className="form-control"  placeholder="Enter your email address" />
              </div>
            </div>  
          </div>
          
           
          <div className="row pb-3">  
            <div className="col-md-6">
              <div className="form-group">
                <label for="First Name"> Phone * </label>
                <input type="text" className="form-control" placeholder="Enter your phone number" />
                
              </div>
            </div>
            
            <div className="col-md-6">  
              <div className="form-group">
                <label for="formGroupExampleInput2"> Fax </label>
                <input type="text" className="form-control"  placeholder="Enter your Fax number" />
              </div>
            </div>  
            <div className="form-check small">
                 <label className="customcheck">  Text me my reservation details and important move-in information.
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
            </div> 
            </div>          

         
          
          
          
      
        </form> 
        
      
       
       <div className="rent-your-unit-footer ">
         <hr />
           <p> <a className="btn btn-gvstore btn-success border-0 green-gradient float-right" href="#">Proceed to payment </a> </p>
            <br />
       </div>
    </div>
    </div>
   </div>   

    )
}
}

export default ReserveFormFilling;