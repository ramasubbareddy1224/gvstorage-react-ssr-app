import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class SelfStorageWhatFits extends Component{
render(){
    return(
        <section id="selfstoragewhatfits" className="what-fit-inside pb-5">
        <div className="container-fluid">
        <div className="container-fluid-padding">
          <div className="storage-size">
            <h2> What fits inside </h2>
            <p className="small"> An equally important decision you'll need to make is choosing the size of your unit. Storage typically comes in the following standard sizes: </p>
            <div className="storage-size-tab">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item"> <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tiny<br />
                  5'x5'</a> </li>
                <li className="nav-item"> <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Small <br />
                  5'x 10' </a> </li>
                <li className="nav-item"> <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Medium <br />
                  10'x 10'</a> </li>
                <li className="nav-item"> <a className="nav-link" id="contact-tab" data-toggle="tab" href="#Large-10" role="tab" aria-controls="contact" aria-selected="false">Large <br />
                  10'x 15'</a> </li>
                <li className="nav-item"> <a className="nav-link" id="contact-tab" data-toggle="tab" href="#Huge-10" role="tab" aria-controls="contact" aria-selected="false">Huge <br />
                  10'x 20'</a> </li>
                <li className="nav-item"> <a className="nav-link" id="contact-tab" data-toggle="tab" href="#Gigantic" role="tab" aria-controls="contact" aria-selected="false">Gigantic <br />
                  5'x 10'</a> </li>
              </ul>
              <div className="tab-content p-5" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="tab-content">
                    <div className="row">
                      <div className="col-md-5 text-center"><img src={Environment.STATIC_FILES_END_POINT_URL + "img/Services/tiny-5x10.png"} /></div>
                      <div className="col-md-7">
                        <h5> Tiny - 5'x5' </h5>
                        <h6>Walk-in Closet</h6>
                        <p>This size unit yields 25 square feet of space. Although these 5x5 units are small, they are an excellent size to store all of your extra items, like garden tools, seasonal items, office supplies, or your miscellaneous boxes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="tab-content">
                    <div className="row">
                      <div className="col-md-7">
                        <h5> Tiny - 5'x5' </h5>
                        <h6>Walk-in Closet</h6>
                        <p>This size unit yields 25 square feet of space. Although these 5x5 units are small, they are an excellent size to store all of your extra items, like garden tools, seasonal items, office supplies, or your miscellaneous boxes.</p>
                      </div>
                      <div className="col-md-5"><img src={Environment.STATIC_FILES_END_POINT_URL + "img/Services/tiny-5x10.png"} /></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <div className="tab-content">
                    <div className="row">
                      <div className="col-md-7">
                        <h5> Small  5'x 10' </h5>
                        <h6>Walk-in Closet</h6>
                        <p>This size unit yields 25 square feet of space. Although these 5x5 units are small, they are an excellent size to store all of your extra items, like garden tools, seasonal items, office supplies, or your miscellaneous boxes.</p>
                      </div>
                      <div className="col-md-5"><img src={Environment.STATIC_FILES_END_POINT_URL + "img/Services/tiny-5x10.png"} /></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="Large-10" role="tabpanel" aria-labelledby="contact-tab">
                  <div className="tab-content">
                    <div className="row">
                      <div className="col-md-7">
                        <h5> Medium 10'x 10' </h5>
                        <h6>Walk-in Closet</h6>
                        <p>This size unit yields 25 square feet of space. Although these 5x5 units are small, they are an excellent size to store all of your extra items, like garden tools, seasonal items, office supplies, or your miscellaneous boxes.</p>
                      </div>
                      <div className="col-md-5"><img src={Environment.STATIC_FILES_END_POINT_URL + "img/Services/tiny-5x10.png"} /></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="Huge-10" role="tabpanel" aria-labelledby="contact-tab">
                  <div className="tab-content">
                    <div className="row">
                      <div className="col-md-7">
                        <h5> Tiny - 5'x5' </h5>
                        <h6>Walk-in Closet</h6>
                        <p>This size unit yields 25 square feet of space. Although these 5x5 units are small, they are an excellent size to store all of your extra items, like garden tools, seasonal items, office supplies, or your miscellaneous boxes.</p>
                      </div>
                      <div className="col-md-5"><img src={Environment.STATIC_FILES_END_POINT_URL + "img/Services/tiny-5x10.png"} /></div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="Gigantic" role="tabpanel" aria-labelledby="Gigantic-tab">
                  <div className="tab-content">
                    <div className="row">
                      <div className="col-md-7">
                        <h5> Tiny - 5'x5' </h5>
                        <h6>Walk-in Closet</h6>
                        <p>This size unit yields 25 square feet of space. Although these 5x5 units are small, they are an excellent size to store all of your extra items, like garden tools, seasonal items, office supplies, or your miscellaneous boxes.</p>
                      </div>
                      <div className="col-md-5"><img src={Environment.STATIC_FILES_END_POINT_URL + "img/Services/tiny-5x10.png"} /></div>
                    </div>
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

export default SelfStorageWhatFits;