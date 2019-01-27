import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import {Link} from 'react-router-dom';

class HomeStorageTools extends Component{
render(){
    return(
        <section id="storage-tools" className="wow fadeInUp storage-tools-block">
        <div className="container-fluid pb-5">
        <div className="storage-tools-info">
          <div className="text-center pt-5 pb-3">
            <h2>Storage Tools</h2>
          </div>
  
           <div className="row p-3">
            
            <div className="col-md-5 about-storage-tools pt-2 wow fadeInLeft">
              <p>  At Great Value Storage, you can expect great service from our friendly, professional and knowledgeable storage managers. If you ask any one of them what their number one priority is, it would be to exceed our customers' expectations. Followed closely by the need to provide a worry- and stress-free storage experience. </p>
            </div>
              
            
            <div className="col-md-7 content">
            <div className="storage-tools-items">
            
            <div className="row">
             <div className="col-md-6 wow fadeInUp pb-3"> 
             <Link to="/size-guide">
                 <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Size-Guide.png"} alt=" " /> &nbsp;  Size Guide
                 </Link>
             </div>
             <div className="col-md-6 wow fadeInUp pb-2 right-text"> 
             <Link to="/space-calculator">
                 <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Space-Calculator.png"} alt=" " /> &nbsp;  Space Calculator
                 </Link>
              </div>
             </div>
             <div className="row"> </div>
             <div className="row">
             <div className="col-md-6 wow fadeInUp pb-3"> 
             <Link to="/tips">
                 <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Tips.png"} alt=" " /> &nbsp;  Tips
                 </Link>
              </div>
             <div className="col-md-6 wow fadeInUp pb-3 right-text"> 
             <Link to="/packing-supplies">
                 <img src={Environment.STATIC_FILES_END_POINT_URL + "img/Packing-Supplies.png"} alt=" " /> &nbsp;  Packing Supplies
                 </Link>
              </div>
             </div>
  
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