import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class HomeHowStorageWorks extends Component{
render(){
    return(
        <section id="storage-tools" className="wow fadeInUp pt-3">
        <div className="container-fluid">
          
          <div className="how-storage-works">
              <div className="how-storage-img ">
              <img src={Environment.STATIC_FILES_END_POINT_URL + "img/how-storage-works.png"} className="img-fluid w-100 img-how-storage-works" alt="" />
              <div className="how-storage-bg-color">
              <div className="how-storage-text text-center ">
              <h3 className="p-3 pb-5 font-lite"> How Storage Works </h3>
              <p>  Storage (in terms of self-storage) is an industry where businesses 
            allow customers to rent space at a certain location. Typically, this 
            means a 'unit' at a dedicated storage facility, though there are some 
            variations on this basic concept that we'll get to later. You may also 
            hear people refer to storage as 'public storage' or 'mini storage', 
            though in recent years 'self-storage', or more simply 'storage', have 
            become the preferred terms. </p>

            <p> Storage units usually come in one of several standard sizes and are 
            accessible on one side via a large, garage-like rolling door. Units are 
            secured either by a built-in locking mechanism or by a separate lock 
            or both. The property will be managed by a dedicated staff, which 
            also works to keep your stored items safe. </p>
            <p> Storage rental rates are typically charged on a monthly basis. 
            though different kinds of contracts usually can be negotiated. The 
            price of storage will depend on its location, the quality of the facility. 
            the size of the unit. any extra amenities like climate control, the time 
            of year, the facility's level of occupancy. and special deals or promo 
            rates. Because of these myriad factors, storage prices see a large 
            amount of variance of variance.   </p>
              </div>
                 </div>
              </div>
              
          </div>
          
        </div>
   </section>
    )
}
}

export default HomeHowStorageWorks;