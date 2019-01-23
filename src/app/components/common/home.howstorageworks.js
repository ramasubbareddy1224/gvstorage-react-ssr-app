import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class HomeHowStorageWorks extends Component{
render(){
    return(
        <section id="storage-tools" className="wow fadeInUp">
        <div className="container-fluid">
          
          <div className="how-storage-works">
              <div className="how-storage-img ">
              <img src={Environment.STATIC_FILES_END_POINT_URL + "img/how-storage-works.png"} className="img-fluid w-100 img-how-storage-works" alt="" />
              <div className="how-storage-bg-color">
              <div className="how-storage-text text-center ">
              <h3 className="p-3 pb-5 font-lite"> How Storage Works </h3>
              <p> Stroage (in terms of self-storage) is an industy where business allow customers rent space at a certain location. Tipically this means a unit at a dedicated storage facility through there are some variations on this basic concept that well get to later. Yoru may also hear people refer to storage as 'public storage' or 'mini storage', though in recent ears 'self-storage'. or more simply 'storage', have becode the perferred terms. </p>
              
                          <p> Stroage (in terms of self-storage) is an industy where business allow customers rent space at a certain location. Tipically this means a unit at a dedicated storage facility through there are some variations on this basic concept that well get to later. Yoru may also hear people refer to storage as 'public storage' or 'mini storage', though in recent ears 'self-storage'. or more simply 'storage', have becode the perferred terms. </p>
                          
                                      <p> Stroage (in terms of self-storage) is an industy where business allow customers rent space at a certain location. Tipically this means a unit at a dedicated storage facility through there are some variations on this basic concept that well get to later. </p>
                                      
                                      
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