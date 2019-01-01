import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class CommonFooter extends Component{
render(){
    return(
        <div>
        <section className="section-footer wow fadeInUp">
        <div className="container footer-bg-color pb-3">
        <div className="pt-2 pb-3">
              <h2 >Locations</h2>
            </div>
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Texas</h6>
                </div>
                <ul className="list-unstyled">
                       <li>   Austin, TX (5) </li>
                        <li>Baytown, TX (7)</li>
                        <li>Canyon Lake, TX (2)</li>
                        <li>Cedar Park, TX (4)</li>
                        <li>Dallas, TX (10)</li>
                        <li>Deer Park, TX (12)</li>
                        <li>Fort Worth, TX (5)</li>
                        <li>Houston, TX (5)</li>
                        <li>La Porte, TX (7)</li>
                        <li>Leander, TX (5)</li>
                        <li>Mesquite, TX (2)</li>
                        <li>Pasadena, TX (9)</li>
                        <li>San Benito, TX (3)</li>
                        <li>Texas City, TX (3)</li>
                        <li>Tomball, TX (1)</li>
                    </ul>
                
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Tennessee </h6>
                </div>
                <div className="w-body-a">
                  <div className="w-body-a">
                    <ul className="list-unstyled">
                       <li>  Memphis, TN(3)</li>
                    </ul>
                  </div>
                </div>
              
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Ohio </h6>
                </div>
                <ul className="list-unstyled">
                       <li>  Boardman, OH (5) </li>
                          <li>   Centerville, OH (5)</li>
                          <li>   Columbus, OH (4)</li>
                          <li>   Dayton, OH (5)</li>
                          <li>   Lewis Center, OH (4)</li>
                          <li>   Mansfield, OH (4)</li>
                          <li>   Mason, OH (2)</li>
                          <li>   Miamisburg, OH (7)</li>
                           <li>  Reynoldsburg, OH (4)</li>
                           <li>  Trotwood, OH (9)</li>
                    </ul>
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">New York </h6>
                </div>
                <ul className="list-unstyled">
                       <li>  New York, NY (6) </li>
                       <li> Hyde Park, NY (4) </li>
                       <li> Newburgh, NY (2)</li>
                    </ul>
                    
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Nevada </h6>
                </div>
                <ul className="list-unstyled">
                       <li>  Las Vegas, NV (4) </li>
                </ul>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Missouri </h6>
                </div>
                <ul className="list-unstyled">
                       <li>  Kansas City, MO (4) </li>
                </ul>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Mississippi </h6>
                </div>
                <ul className="list-unstyled">
                       <li>  Brandon, MS (3) </li>
                </ul>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Indiana </h6>
                </div>
                <ul className="list-unstyled">
                       <li>  Indianapolis, IN (4) </li>
                </ul>
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Illinois </h6>
                </div>
                <ul className="list-unstyled">
                       <li> Champaign, IL (2)</li>
                       <li> Urbana, IL (6)</li>
                    </ul>
                    
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand"> Colorado </h3>
                </div>
                <ul className="list-unstyled">
                       <li>  Aurora, CO (4) </li>
                       <li>  Commerce City, CO (2) </li>
                </ul>
                
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand"> California </h3>
                </div>
                <ul className="list-unstyled">
                       <li>  Cerritos, CA (4) </li>
                       <li>      Los Angeles, CA (2) </li>
                        <li>     Newhall, CA (4) </li>
                </ul>
                
                
              </div>
            </div>
            
          </div>
          <hr  style={{borderColor: '#5c5c5c'}} />
        </div>
        
        <div className="container footer-bg-color pb-1">
        
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Storage Options</h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Car storage</h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Boat storage</h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">RV storage</h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Business storage </h6>
                </div>
                
                <div className="w-body-a">
                  <div className="w-body-a">
                    <ul className="list-unstyled">
                        <li>  Medical Storage </li>
                        <li>      Construction storage </li>
                        <li>     Real Estate Storage </li>
                        <li>     Retail Storage </li>
                        <li>     Legal Storage </li>
                        <li>     Archive Storage </li>
                        <li>     Office Storage</li>
                    </ul>
                  </div>
                </div>
                
                
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                      <h6 className="w-title-a text-brand"> Storage Tools </h6>
                    </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Size Guide </h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Space Calculator </h6>
                </div>
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Self Storage Tips</h6>
                </div>
              
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Great Value Storage </h6>
                </div>
                
                    
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand">Company Info </h6>
                </div>
    
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> About Us </h6>
                </div>
    
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Contact Us </h6>
                </div>
    
                
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Careers </h6>
                </div>
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Blog </h6>
                </div>
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Review Us </h6>
                </div>
    
              </div>
            </div>
            
            <div className="col-sm-12 col-md-3 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Payment </h6>
                </div>
               
               <div className="w-header-a">
                  <div className="btn btn-gvstore btn-footer"> Pay Bill Now </div>
                </div>
                
              </div>
            </div>
            
          </div>
          
          <div className="row">
          
           <div className="col-sm-12 col-md-3">
              <div className="w-header-a">
                  <h6 className="w-title-a text-brand"> Warehouse storage and   Office space</h6>
              </div>
          </div>
          
          <div className="col-sm-12 col-md-3">
          </div>
          
          <div className="col-sm-12 col-md-3">
          </div>
    
          <div className="col-sm-12 col-md-3">
          <div className="footer-img">
          <img src={Environment.STATIC_FILES_END_POINT_URL + "img/gv-store-block.png"} alt="logo" />
          </div>
          </div>
    
          </div>
          
          <hr  style={{borderColor: '#5c5c5c'}}/>
        </div>
      </section>
     
      <footer>
        <div className="container footer-bg-color ">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-footer">
                <p className="copyright text-white small p-2">
                   © 2018. All rights reserved.  <span className="color-a float-right"> Privacy Policy  &nbsp; &nbsp; Terms of service. 
                   <i className="fa fa-facebook-official" aria-hidden="true"></i>
                   <i className="fa fa-twitter-square" aria-hidden="true"></i>
                   <i className="fa fa-youtube-play" aria-hidden="true"></i>
                   <i className="fa fa-pinterest-square" aria-hidden="true"></i>
                   </span> 
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
}
}

export default CommonFooter;