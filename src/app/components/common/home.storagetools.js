import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class HomeStorageTools extends Component{
render(){
    return(
        <section id="storage-tools" className="wow fadeInUp">
        <div className="container bg-storage-tool pb-5">
          <div className="text-center pt-5 pb-3">
            <h2>Storage Tools</h2>
          </div>
  
           <div className="row pt-2">
            <div className="col-md-1"> </div>
            <div className="col-md-5 about-storage-tools pt-2 wow fadeInLeft">
              <p>  At Great Value Storage, you can expect great service from our friendly, professional and knowledgeable storage managers. If you ask any one of them what their number one priority is, it would be to exceed our customers' expectations. Followed closely by the need to provide a worry- and stress-free storage experience. </p>
            </div>
              
           <div className="col-md-1"> </div> 
            <div className="col-md-5 content">
            
            <div className="row">
             <div className="col-md-6 wow fadeInUp pb-3"> 
                 <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Size-Guide.png"} alt=" " /> Size Guide
             </div>
             <div className="col-md-6 wow fadeInUp pb-2"> 
                 <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Space-Calculator.png"} alt=" " /> Space Calculator
              </div>
             </div>
             <div className="row"> </div>
             <div className="row">
             <div className="col-md-6 wow fadeInUp pb-3"> 
                 <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Tips.png"} alt=" " /> Tips
              </div>
             <div className="col-md-6 wow fadeInUp pb-3"> .
                 <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Packing-Supplies.png"} alt=" " /> Packing Supplies
              </div>
             </div>
  
            </div>
          </div>
                  
      
        </div>
      </section>
    )
}
}

export default HomeStorageTools;