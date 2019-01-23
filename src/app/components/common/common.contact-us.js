import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class CommonContactUs extends Component{
   
render(){


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
               <div className="rent-your-unit-now pt-3 pb-3">
               <div className="rent-unit-block">
               <h5 className="pt-3"> Please fill below form for futher assistance </h5>
               <hr />
               <p> Contact Information </p>
               <form>
               <div className="fill-rent-info">
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
                       <input type="text" className="form-control" placeholder="Last Name" />
                     </div>
                   </div>  
                 </div>   
                 
                 
                  <div className="row pb-3">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label for="First Name"> Phone Number <span className="text-danger"> * </span> </label>
                       <input type="text" className="form-control" placeholder="Enter your phone number" />
                       
                     </div>
                   </div>
                   
                   <div className="col-md-6">  
                     <div className="form-group">
                       <label for="formGroupExampleInput2"> Email <span className="text-danger"> * </span> </label>
                       <input type="text" className="form-control" placeholder="Enter your email address" />
                     </div>
                   </div> 
                    
                 </div>
                 
                 
                 <div className="row pb-3">
                   <div className="col-md-6">
                     <div className="form-group">
                       <label for="First Name">Select Facility<span className="text-danger"> * </span> </label>
                      
                      
                      <select name="facility" id="facility_input" className="form-control">
             <option value="">Select Facility</option>
                           <option value="fac071@greatvaluestorage.com">Brandon - 1661 W. Government Cove</option>
                           <option value="fac072@greatvaluestorage.com">Flowood - 111 N. Layfair Dr.</option>
                           <option value="fac073@greatvaluestorage.com">Hattiesburg - 2033 Oak Grove Rd</option>
                           <option value="fac074@greatvaluestorage.com">Production - 4641 Production Dr</option>
                           <option value="fac077@greatvaluestorage.com">Texas City - 1910 25th Ave N</option>
                           <option value="fac076@greatvaluestorage.com">Texas City - 2502 Bay Street</option>
                           <option value="fac003@greatvaluestorage.com">Texas Storage Park - 10013 RR FM 620 N</option>
                           <option value="fac005@greatvaluestorage.com">Canyon Lake - 13825 FM 306</option>
                           <option value="fac006@greatvaluestorage.com">Cedar Park - 16905 Indian Chief Drive</option>
                           <option value="fac007@greatvaluestorage.com">Leander - 2407 S. 183</option>
                           <option value="fac009@greatvaluestorage.com">Austin - 7116 S IH 35 Frontage Rd</option>
                           <option value="fac010@greatvaluestorage.com">Memphis - 1961 Covington Pike</option>
                           <option value="fac012@greatvaluestorage.com">Parmer Storage Ranch - 18050 Ronald Reagan Blvd</option>
                           <option value="fac014@greatvaluestorage.com">San Benito - 1151 E Expressway 83</option>
                           <option value="fac020@greatvaluestorage.com">Kansas City - 9600 Marion Ridge</option>
                           <option value="fac021@greatvaluestorage.com">Northwest Houston - 5550 Antoine Dr</option>
                           <option value="fac022@greatvaluestorage.com">Southwest Houston - 6250 Westward Ln</option>
                           <option value="fac023@greatvaluestorage.com">Southwest Houston - 8801 Boone Rd</option>
                           <option value="fac024@greatvaluestorage.com">Southwest Houston - 8450 Cook Rd</option>
                           <option value="fac025@greatvaluestorage.com">Southwest Houston - 9951 Harwin Rd</option>
                           <option value="fac026@greatvaluestorage.com">Northwest Houston - 10640 Hempstead Rd</option>
                           <option value="fac027@greatvaluestorage.com">Northwest Houston - 14318 Highway 249</option>
                           <option value="fac028@greatvaluestorage.com">Texas City - 9010 E.F. Lowry Expressway</option>
                           <option value="fac029@greatvaluestorage.com">Texas City - 410 North IH-45/Gulf Fwy</option>
                           <option value="fac030@greatvaluestorage.com">Dallas - 9530 Skillman Street</option>
                           <option value="fac031@greatvaluestorage.com">Dallas - 4311 Samuell Blvd</option>
                           <option value="fac032@greatvaluestorage.com">Mesquite - 920 Highway 80 East</option>
                           <option value="fac033@greatvaluestorage.com">Sunrise Manor - 1441 N Nellis Blvd</option>
                           <option value="fac034@greatvaluestorage.com">Boardman - 7986 Southern Blvd</option>
                           <option value="fac035@greatvaluestorage.com">Youngstown - 123 S Meridian Rd</option>
                           <option value="fac036@greatvaluestorage.com">Trotwood - 3785 Shiloh Springs Rd</option>
                           <option value="fac037@greatvaluestorage.com">Dayton - 426 N Smithville Rd</option>
                           <option value="fac038@greatvaluestorage.com">Centerville - 60 Westpark Dr</option>
                           <option value="fac040@greatvaluestorage.com">Miamisburg - 8501 Springboro Pike</option>
                           <option value="fac041@greatvaluestorage.com">Mason - 4145 State Route 741 S</option>
                           <option value="fac042@greatvaluestorage.com">Fort Worth - 613 North Fwy</option>
                           <option value="fac043@greatvaluestorage.com">Fort Worth - 4901 South Fwy</option>
                           <option value="fac044@greatvaluestorage.com">Indianapolis - 3380 N Post Rd</option>
                           <option value="fac045@greatvaluestorage.com">Baytown - 3412 Garth Rd</option>
                           <option value="fac046@greatvaluestorage.com">Beechnut - 11702 Beechnut St.</option>
                           <option value="fac047@greatvaluestorage.com">La Porte - 10601 W. Fairmont Parkway</option>
                           <option value="fac048@greatvaluestorage.com">Northwest Houston - 2150 Wirt Rd.</option>
                           <option value="fac049@greatvaluestorage.com">Memphis - 3951 Lamar Ave (US Hwy 78)</option>
                           <option value="fac052@greatvaluestorage.com">Northwest Houston - 8320 Alabonson Road</option>
                           <option value="fac053@greatvaluestorage.com">Pasadena - 941 Fairmont Parkway</option>
                           <option value="fac054@greatvaluestorage.com">Deer Park - 4806 Marie Lane</option>
                           <option value="fac055@greatvaluestorage.com">Northwest Houston - 5811 North Houston Rosslyn Road</option>
                           <option value="fac056@greatvaluestorage.com">Tomball - 632 Timkin Road</option>
                           <option value="fac057@greatvaluestorage.com">Houston - 16530 West Hardy Street</option>
                           <option value="fac058@greatvaluestorage.com">Reynoldsburg - 7821 Taylor Road SW</option>
                           <option value="fac059@greatvaluestorage.com">Houston - 15300 Kuykendahl Road</option>
                           <option value="fac060@greatvaluestorage.com">Mansfield - 1585 Lexington Avenue</option>
                           <option value="fac061@greatvaluestorage.com">Lewis Center - 9984 Old State Rd</option>
                           <option value="fac062@greatvaluestorage.com">Minerva Park - 5199 Westerville Rd</option>
                           <option value="fac063@greatvaluestorage.com">Reynoldsburg - 7200 Tussing Rd</option>
                           <option value="fac065@greatvaluestorage.com">Worthington - 580 East Dublin-Granville Rd</option>
                           <option value="fac066@greatvaluestorage.com">Columbus - 1330 Georgesville Rd</option>
                           <option value="fac067@greatvaluestorage.com">Urbana - 1710 N Cunningham</option>
                           <option value="fac068@greatvaluestorage.com">Champaign - 2202 N Market St</option>
                           <option value="fac069@greatvaluestorage.com">Hyde Park - 1582 Route 9g</option>
                           <option value="fac070@greatvaluestorage.com">Newburgh - 765 South Street</option>
                           <option value="fac039@greatvaluestorage.com">Centerville - 435 Congress Park Dr</option>
                           <option value="fac064@greatvaluestorage.com">Columbus - 5301 E Tamarack Circle</option>
                           <option value="fac080@greatvaluestorage.com">Commerce City - 7273 Kearney Street</option>
                           <option value="fac079@greatvaluestorage.com">Aurora - 443 Laredo Street</option>
                           <option value="fac081@greatvaluestorage.com">Santa Clarita - 24314 The Old Road</option>
                           <option value="">Cerritos - 17900 Crusader Ave</option>
                           <option value="">Downtown - 1000 North Main St</option>
                         </select>
                      
                        
                     </div>
                   </div>
                   
                   <div className="col-md-6">  
                     <div className="form-group">
                       <label for="formGroupExampleInput2"> Comments <span className="text-danger"> * </span> </label>
                       <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
                     </div>
                   </div> 
                    
                 </div>
                 
                  
                           
       
                </div>
                 
                   
               </form> 
               
             </div>
             
             <div className="rent-your-unit-footer ">
             
                <div className="unit-submit  pl-4 pr-4">
               
                  <div className="row">
                     <div className="col-md-6"> 
                         
                       </div>
                       <div className="col-md-6"> 
              <a className="btn btn-gvstore btn-success border-0 green-gradient float-right" href="#"> Submit </a> 
                       </div>
                   </div>
               </div>
              </div>
              
              
           </div>
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