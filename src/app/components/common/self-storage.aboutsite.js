import React, { Component } from 'react';

class SelfStorageAboutSite extends Component{
render(){
    return(
        <section className="about-location">
        <div className="container">
          <div className="col-12">
            <h2> About Texas Storage Park </h2>
            <div className="about-storage-location pt-3">
              <div className="about-storage-tab ">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item"> <a className="nav-link active" id="home-tab" data-toggle="tab" href="#Info" role="tab" aria-controls="home" aria-selected="true">Info</a> </li>
                  <li className="nav-item"> <a className="nav-link" id="profile-tab" data-toggle="tab" href="#FAQ" role="tab" aria-controls="profile" aria-selected="false">FAQ's </a> </li>
                  <li className="nav-item"> <a className="nav-link" id="contact-tab" data-toggle="tab" href="#Storage" role="tab" aria-controls="contact" aria-selected="false">Storage Statistics</a> </li>
                </ul>
                <div className="tab-content p-3 pb-5" id="myTabContent">
                  <div className="tab-pane fade show active" id="Info" role="tabpanel" aria-labelledby="home-tab">
                    <div className="tab-content">
                      <div className="row">
                        <div className="col-md-6"> 
                            <h5> Texas Storage Park </h5>                    
                            
                            <p> Welcome to Great Value StorageⓇ in Austin, Texas. Our convenient self-storage facility is located Northwest of downtown Austin on FM 620 Ranch Road. Just South of Anderson Mill Road and less than 5 miles from Lake Travis. Without a doubt, our number one priority is to make sure all of our customers are happy and satisfied with their storage solution. We take on your stress so that you are able to have peace of mind while moving.</p>
    <p>
    Most storage facilities have close to the same amenities as one another. We have a few features that cannot be beaten by our competitors. Not only do we provide the best customer service, we provide the value priced option in the area. We also have wide, paved aisles to make it easy for moving trucks to get to your storage unit. Don't forget we also have plenty of vehicle parking available for your RV, boat or other hobby vehicle.
    </p>
    <p>
    Great Value Storage is a growing self-storage company throughout the United States. We proudly serve the areas of Austin, Anderson Mill, Lakeline, Canyon Creek and surrounding neighborhoods. We provide the most value for your dollar. Remember, Value is our middle name. Come and take a tour of our facility or reserve your unit online today.</p>
                        </div>
                        <div className="col-md-6">
                          <div className="product-slider"> 
                              <div className="product-big-image gv-radius">
                                <img src="img/facility/product-large-img.jpg" className="img-fluid gv-radius" alt="" />
                            </div>
                            <div className="product-thumb-img">
                            <span> <img src="img/facility/thumb1.png" className="img-fluid gv-radius" /></span> <span> <img src="img/facility/thumb2.png" className="img-fluid gv-radius" /> </span> 
                            <span> <img src="img/facility/thumb1.png" className="img-fluid gv-radius" /></span> <span> <img src="img/facility/thumb2.png" className="img-fluid gv-radius"/> </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="FAQ" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="tab-content">
                      <div className="row"> FAQ's Content </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Storage" role="tabpanel" aria-labelledby="contact-tab">
                    <div className="tab-content">
                      <div className="row"> Storage Content </div>
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

export default SelfStorageAboutSite;