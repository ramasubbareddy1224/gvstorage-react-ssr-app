import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';

class SelfStorageReviews extends Component{
render(){
    return(
        <section id="testimonials" className="wow fadeInUp">
        <div className="container bg-reviews">
          <div className="pt-3 pb-3">
            <h2 >Reviews <span className="pull-right gv-text-color small" style={{fontSize: '12px'}}> View More </span> </h2>
          </div>
          <div className="owl-carousel testimonials-carousel">
            <div className="testimonial-item"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/testimonial-1.jpg"} className="testimonial-img" alt="" />
              <p className="reviews"> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star-o"></i></span> </p>
              <p> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/quote-sign-left.png"} className="quote-sign-left" alt="" /> Was a awesome and pleasurable experience really conpatientant about our lost of items due to Harvey, put a smile on me and my husband face which is hard for him. <img src={Environment.STATIC_FILES_END_POINT_URL + "img/quote-sign-right.png"} className="quote-sign-right" alt="" /> </p>
              <h3> Francisco Maia </h3>
              <h4> Ohio</h4>
            </div>
            <div className="testimonial-item"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/testimonial-2.jpg"} className="testimonial-img" alt="" />
              <p className="reviews"> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star-o"></i></span> </p>
              <p> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/quote-sign-left.png"} className="quote-sign-left" alt="" /> Been renting from here for 1.5 years. Only issue we have had is our gate code was changed randomly. They fixed it promptly and haven't had any issues since. <img src={Environment.STATIC_FILES_END_POINT_URL + "img/quote-sign-right.png"} className="quote-sign-right" alt="" /> </p>
              <h3> Gaspar Antunes </h3>
              <h4> Texas </h4>
            </div>
            <div className="testimonial-item"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/testimonial-3.jpg"} className="testimonial-img" alt="" />
              <p className="reviews"> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star"></i></span> <span><i className="text-warning fa fa-star-o"></i></span> </p>
              <p> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/quote-sign-left.png"} className="quote-sign-left" alt="" /> Everything was handled in a timely, professional and friendly manner. This is what customer service should be <img src={Environment.STATIC_FILES_END_POINT_URL + "img/quote-sign-right.png"} className="quote-sign-right" alt="" /> </p>
              <h3>Isaac Hunt</h3>
              <h4> Nevada </h4>
            </div>
            <div className="testimonial-item"> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/testimonial-5.jpg"} className="testimonial-img" alt="" />
              <p className="reviews">
               <span><i className="text-warning fa fa-star"></i></span>
               <span><i className="text-warning fa fa-star"></i></span>
                <span><i className="text-warning fa fa-star"></i></span>
                 <span><i className="text-warning fa fa-star"></i></span>
                  <span><i className="text-warning fa fa-star-o"></i></span> </p>
              <p> <img src={Environment.STATIC_FILES_END_POINT_URL + "img/quote-sign-left.png"} className="quote-sign-left" alt="" /> 
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. 
              <img src={Environment.STATIC_FILES_END_POINT_URL + "img/quote-sign-right.png"} className="quote-sign-right" alt="" /> </p>
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </div>
          <div className="text-center pt-5 pb-5">
            <div className="btn btn-gvstore btn-success border-0 green-gradient"> Add Your Review for this facility </div>
          </div>
        </div>
      </section>
    )
}
}

export default SelfStorageReviews;