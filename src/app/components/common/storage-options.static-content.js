import React, { Component } from 'react';
import {Environment} from '../../../configurations/environment';
import CommonFAQS from './common.faq';

class StorageOptionsStaticContent extends Component{
    componentDidMount(){
        let $=require('jquery');
        $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
            e.preventDefault();
            $(this).siblings('a.active').removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
            $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
        }); 
      }

    render(){

    return(
       <div>
       
    <section id="about" class="about-sec wow fadeInUp">
      <div class="container-fluid">
      <div className="container-fluid-padding">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 about-img">
		  <div class="about-img-l">
            <img src="img/about-storage-space.png" alt="" />
		</div>
          </div>

          <div class="col-lg-6 content pt-5">
            <h2> I have too much storage space… <br /> said no one ever!  </h2>

            <p>
            If storage is a problem and clutter is an issue, let Great Value Storage be your solution. Whether you've collected a lot of things over time, you're dealing with a major life event or you just have a hobby, there comes a point when you need a little extra space. The need for self storage can arise at unexpected times and at any stage in life. Our job is to provide each customer with an affordable convenient storage solution no matter what life throws their way. There are three very common reasons our customers rent storage units.
            </p>

          </div>
        </div>
        </div>
      </div>
    </section>
    

    <section id="services">
      <div class="container-fluid bg-storage pb-5">
        <div class="section-header">
          <h3 class="text-center pt-5"> Storage made easy </h3>
        </div>

        <div class="row text-center">
		
          <div class="col-md-3">
            <div class="wow storage-solution zoomIn">
              <div class="storage-img-block">
              	<img src="img/Services/verity-size.png" alt="home storage" />
              </div>
              <p class="title"> A wide variety of sizes </p>
              <p> A wide variety of sizes, to find <br />the perfect fit for your things.</p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="wow storage-solution zoomIn">
              <div class="storage-img-block">
              	<img src="img/Services/gsv-storage.png" alt="home storage" />
              </div>
              <p class="title"> Competitive pricing </p>
              <p> Competitive pricing, we are <br />the low-cost value leader. </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="wow storage-solution zoomIn">
              <div class="storage-img-block">
              	<img src="img/Services/heigh-secure.png" alt="home storage" />
              </div>
              <p class="title"> Highly secure </p>
              <p> Electronic keypad access, for <br />an extra layer of security. </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="wow storage-solution zoomIn">
              <div class="storage-img-block">
              	<img src="img/Services/location.png" alt="home storage" />
              </div>
              <p class="title"> Convenient locations </p>
              <p> No matter what time of day <br /> your things are close by. </p>
            </div>
          </div>
          
        </div>

      </div>
    </section>



    
    <section id="selfstorage" class="wow fadeInUp pt-5">
      
    <div class="container-fluid">
    <div className="container-fluid-padding">
       <div class="self-storage-content"> 
		<div class="row">
        <div class="col-md-12 col-sm-12 col-12 bhoechie-tab-container">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-12 bhoechie-tab-menu">
              <div class="list-group">
                <a href="#" class="list-group-item active">
                  <span> Typical uses </span>
                </a>
                <a href="#" class="list-group-item ">
				 <span> How to choose storage options </span>
                </a>
                <a href="#" class="list-group-item">
                 <span> Items to keep </span>
                </a>
                <a href="#" class="list-group-item">
                 <span> Administrative fees </span>
                </a>
                <a href="#" class="list-group-item ">
                 <span> Policies </span>
                </a>
                <a href="#" class="list-group-item">
                 <span> FAQ </span>
                </a>
              </div>
            </div>
            <div class="col-md-8 col-sm-8 col-12 bhoechie-tab">
           
                <div class="bhoechie-tab-content active">

                      <h2>Typical uses for self-storage</h2>
                      <p> The storage industry has become so successful due to the simple fact that there are a large number of uses for storage. Below we've listed some of the most common. </p>
                      <div class="clearfix"> </div>
                      
                      <div class="self-storage-uses">
                      <div class="row">
                      <div class="col-md-5"> 
					  <div class="storage-location-info-img">
					  <img src="img/Services/moving.png" class="img-fluid" alt="" /> 
					  </div>
					  </div>
                      <div class="col-md-7"> <h5> Moving </h5> 
                      		<p> Perhaps the most common reason people need storage is as part of a move into a new home or apartment. The process of moving is never fun and the logistics can be difficult and tedious, which is why self-storage offers a stable, safe solution to some of the trickier moves.</p>
                      </div>
                      </div>
                      </div>
                      
                      <div class="self-storage-uses">
                      <div class="row">
                      <div class="col-md-7"> <h5> Renovating or remodeling  </h5> 
                      		<p> Remodeling or renovating your home (or a room in your home) can go a long way toward improving your quality of life. In the short term, however, it can be a major source of pain. When remodeling a room, you're often forced to move the furniture elsewhere, which can be quite inconvenient.  </p>
                      </div>
                      <div class="col-md-5">
					<div class="storage-location-info-img">					  
					  <img src="img/Services/Renovating-remodeling.png" class="img-fluid" alt="" /> 
					 </div>
					  </div>
                      </div>
                      </div>
                      
                      
                      <div class="self-storage-uses">
                      <div class="row">
                      <div class="col-md-5"> 
						<div class="storage-location-info-img">
						<img src="img/Services/Downsizing.png" class="img-fluid" alt="" /> 
						</div>
						</div>
                      <div class="col-md-7"> <h5> Downsizing </h5> 
                      		<p> Moving into a smaller home has become a trend in recent years, as people either attempt to save on rent or live in a more desirable, expensive location. But this presents some downsizers with a problem: How do they fit all of those things that once filled their older, larger home into the new, smaller one? Though the best way to deal with this is to get rid of the things you don't need, there are some things that would be far more expensive to buy again down the road than to keep in a storage unit, and so many of those who are downsizing have turned to that solution.</p>
                      </div>
                      </div>
                      </div>
                      
                      
                      <div class="self-storage-uses">
                      <div class="row">
                      <div class="col-md-7"> 
                      <h5> Cutting down on clutter </h5> 
                      		<p> Are you stuck with congested closets? Is your basement buried in clutter? Is your attic awash with stuff? If you're in need of extra space, storage is your solution. </p>
                      </div>
                      <div class="col-md-5">
						  <div class="storage-location-info-img">
							<img src="img/Services/Cutting-down.png" class="img-fluid" alt="" /> 
						  </div>
					  </div>
                      </div>
                      </div>
                      
                      <div class="self-storage-uses">
                      <div class="row">
                      <div class="col-md-5"> 
						  <div class="storage-location-info-img">
							<img src="img/Services/College-summers.png" class="img-fluid" alt="" /> 
						  </div>
					  </div>
					
                      <div class="col-md-7"> <h5> College summers </h5> 
                      		<p> While most college students relish their summer break, they often take a much more ambivalent attitude toward moving home—not because they're trading roommates for parents, of course, but due to the fact that they'll need to move everything out of their dorm, load up their car and lug it all back home. Storage can take the headache out of this entire process, allowing students to keep their things near campus for those three months. </p>
                      </div>
                      
                      </div>
                      </div>
                      
                      <div class="self-storage-uses">
                      <div class="row">
                      <div class="col-md-7"> <h5> Home staging </h5> 
                      		<p>  Try this scenario: Your Realtor tells you that in order to best show your home, you need to remove half of everything inside it. What do you do? Storage, once again, comes to the rescue. The cost of a month or two of storage can easily pay for itself when you sell your home for more than you would otherwise, due to the great impressions you've left on the buyers. </p>
                      </div>
                      <div class="col-md-5"> 
						  <div class="storage-location-info-img">
						  <img src="img/Services/Home-staging.png" class="img-fluid" alt="" /> 
						  </div>
					  </div>
                      </div>
                      </div>
                      
                      <div class="self-storage-uses">
                      <div class="row">
                        <div class="col-md-5"> 
						<div class="storage-location-info-img">
						<img src="img/Services/Emergencies.png" class="img-fluid" alt="" /> 
						</div>
						</div>
                      <div class="col-md-7"> <h5> Emergencies </h5> 
                      		<p> Finally, there are those times where life throws a curveball at us and an unexpected event suddenly disrupts life. Whether a natural disaster or a death in the family, these situations call for quick and reliable solutions, and for many of us storage is exactly that. </p>
                      </div>
                      
                    
                      </div>
                      </div>
                      
                      
                </div>

                <div class="bhoechie-tab-content">
                    <h2> Choosing between different storage options</h2>
                      <p> Finding a storage unit near you is only one step in the process. You'll also need to figure out the type and size of unit that best suits your needs. </p>
                      <div class="clearfix"> </div>
                      
                      <h5> Storage amenities </h5>
                      <p> Finding a storage unit near you is only one step in the process. You'll also need to figure out the type and size of unit that best suits your needs.Finding a storage unit near you is only one step in the process. You'll also need to figure out the type and size of unit that best suits your needs. </p>
                      <div class="clearfix"> </div>
                      
                      <div class="self-storage-uses">
                      <div class="row">
                       <div class="col-md-6">
                       	<div class="control-storages">
                        	<img src="img/Services/strome.png" alt="strome" /> 
                            <h5> Climate controlled storage </h5>
                             <p class="small"> Climate controlled units keep your belongings cool and dry, protecting against extreme hot and cold temperatures as well as humidity. Humidity is of particular danger to organic materials found in furniture and clothing due to the possibility of mold and mildew so take the time to consider if you might need climate controlled storage. </p>
                        </div>
                        
                        <div class="control-storages">
                        	<img src="img/Services/time.png" alt="strome" /> 
                            <h5> Drive-up access storage </h5>
                             <p class="small"> Drive-up access storage units are housed in a single-story building and are accessible from the outside, allowing you to pull your vehicle right up to the unit to unload. These are great for their easy access and lower prices compared to interior units, but they often lack the ability to add additional amenities such as climate control which can be crucial depending on where you live. Alternatively, interior facilities house all units in a single building, meaning you'll have to go inside a building and sometimes even up an elevator to get to your unit. Though this makes moving in and out with large furniture more difficult, it offers an unbeatable layer of protection from theft and pests and almost always features climate control. </p>
                        </div>
                       </div>
                     
                       <div class="col-md-6"> 
                      	<div class="control-storages">
                        	<img src="img/Services/strome.png" alt="strome" /> 
                            <h5> 24-hour access storage </h5>
                             <p class="small">Some storage facilities allow 24-hour, 7 day-a-week access to their units, meaning you'll be able to access your things whenever you need. As you might expect, this storage amenity will come at a higher price than basic units, but depending on your needs they may well be worth it. Note that there is a difference between unit access, which is the time when you're allowed to access your stuff, and facility access, which is the time that the facility office is open. When selecting this amenity, make sure you choose the right one for your needs. </p>
                        </div>
                        
                        <div class="control-storages">
                        	<img src="img/Services/plug.png" alt="strome" /> 
                            <h5> Storage units with electricity </h5>
                             <p class="small"> Finally, storage units with electricity just means that your unit with have electrical outlets. Having this amenity will allow you to plug into the facility's power source—some facilities allow customers to set up offices or workstations in their units and there are even cases of bands holding practice in storage–but it will cost you extra. This amenity does not come with every unit so make sure you plan ahead if it's something you think you'll need. </p>
                        </div>
                      </div>
                      
                      <div class="clearfix"> </div>
                      
                      <div class="storage-size">
                      	<h5> Storage Sizes </h5>
                             <p class="small"> An equally important decision you'll need to make is choosing the size of your unit. Storage typically comes in the following standard sizes: </p>
							 <div class="storage-size-tab">
							 <ul class="nav nav-tabs" id="myTab" role="tablist">
							  <li class="nav-item">
								<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tiny<br /> 5'x5'</a>
							  </li>
							  <li class="nav-item">
								<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Small <br /> 5'x 10'
							</a>
							  </li>
							  <li class="nav-item">
								<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Medium <br /> 10'x 10'</a>
							  </li>
							   <li class="nav-item">
								<a class="nav-link" id="contact-tab" data-toggle="tab" href="#Large-10" role="tab" aria-controls="contact" aria-selected="false">Large <br /> 10'x 15'</a>
							  </li>
							   <li class="nav-item">
								<a class="nav-link" id="contact-tab" data-toggle="tab" href="#Huge-10" role="tab" aria-controls="contact" aria-selected="false">Huge <br /> 10'x 20'</a>
							  </li>
							   <li class="nav-item">
								<a class="nav-link" id="contact-tab" data-toggle="tab" href="#Gigantic" role="tab" aria-controls="contact" aria-selected="false">Gigantic <br /> 5'x 10'</a>
							  </li>
							</ul>
							<div class="tab-content" id="myTabContent">
							  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
								<div class="tab-content">
									<div class="row">
									<div class="col-md-7">
									<h5> Tiny - 5’x5’ </h5>
									<h6>Walk-in Closet</h6>
									<p>This size unit yields 25 square feet of space. Although these 5x5 units are small, they are an excellent size to store all of your extra items, like garden tools, seasonal items, office supplies, or your miscellaneous boxes.</p>
									</div>
									<div class="col-md-5"><img src="img/5x5.png" class="img-fluid" /></div>
									
									</div>
								</div>
							  </div>
							  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
								<div class="tab-content">
									<div class="row">
									<div class="col-md-7">
									<h5> Small - 5’x10’ </h5>
									<h6>Walk-in Closet</h6>
									<p>This size unit yields a total of 50 square feet of space, perfect for storing an entire bedroom or office. Are you looking to remodel a room or office? Now you can have the space to keep all of the contents during construction instead of clogging up other rooms!</p>
									</div>
									<div class="col-md-5"><img src="img/5x10.png" class="img-fluid" /></div>
									
									</div>
								</div>
							  
							  </div>
							  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
							  <div class="tab-content">
									<div class="row">
									<div class="col-md-7">
									<h5> Medium  10'x 10' </h5>
									<h6>Walk-in Closet</h6>
									<p>Did you just buy a new house and need to move out of your small apartment, but the house is still being built? This 100 square foot unit should hold all your items! It is ideal for storing an entire living room and two full bedrooms.</p>
									</div>
									<div class="col-md-5"><img src="img/10x10.png" class="img-fluid" /></div>
									
									</div>
								</div>
							  </div>
							  
								<div class="tab-pane fade" id="Large-10" role="tabpanel" aria-labelledby="contact-tab">
							  <div class="tab-content">
									<div class="row">
									<div class="col-md-7">
									<h5> Large 10'x 15' </h5>
									<h6>Walk-in Closet</h6>
									<p>With 150 square feet of space, this large unit can typically store the content of 3 bedrooms. This space is also ideal for larger items like televisions, pianos, couches, or tables. </p>
									</div>
									<div class="col-md-5"><img src="img/10x15.png" class="img-fluid" /></div>
									
									</div>
								</div>
							  </div>
								<div class="tab-pane fade" id="Huge-10" role="tabpanel" aria-labelledby="contact-tab">
							  <div class="tab-content">
									<div class="row">
									<div class="col-md-7">
									<h5> Huge - 10’x20’ </h5>
									<h6>Walk-in Closet</h6>
									<p>Are you in-between homes and need to store all of your family's belongings? This is the perfect space for you, capacitating roughly 5 bedrooms, and accommodating larger items like washers, dryers and refrigerators.</p>
									</div>
									<div class="col-md-5"><img src="img/10x20.png" class="img-fluid" /></div>
									
									</div>
								</div>
							  </div>
							  
								<div class="tab-pane fade" id="Gigantic" role="tabpanel" aria-labelledby="Gigantic-tab">
							  <div class="tab-content">
									<div class="row">
									<div class="col-md-7">
									<h5> Gigantic - 10’x30’ </h5>
									<h6>Walk-in Closet</h6>
									<p>Now this is some serious storage! This unit has a whopping 300 square feet of space, ideal for a 5 to 7 bedroom house, easily storing entertainment centers, refrigerators, beds, couches, and more!</p>
									</div>
									<div class="col-md-5"><img src="img/10x30.png" class="img-fluid" /></div>
									
									</div>
								</div>
							  </div>
							  
							</div>
							</div>
                             
                      </div>
                       
                      </div>
                      </div>
                      
     
             </div>
    
                <div class="bhoechie-tab-content">
                      <div class="storage-size">
                      	<h2> Items you can keep in storage </h2>
                             <p> Finding a storage unit near you is only one step in the process. You'll also need to figure out the type and size of unit that best suits your needs. </p>
                            <div class="keep-items-storage">
								<div class="table-responsive">
								  <table class="table">
									<tr>
										<th width="30%"><img src="img/Services/storage-keep.jpg" />&nbsp;Keepable</th>
										<th width="40%"><img src="img/Services/storage-sometimes-keep.jpg" />&nbsp;Sometimes Keepable</th>
										<th width="30%"><img src="img/Services/storage-not-keep.jpg" />&nbsp;Not Keepable</th>
									</tr>
									<tr>
										<td>
											<ul>
												<li>Furniture</li>
												<li>Electronics</li>
												<li>Apparel</li>
												<li>Books</li>
											</ul>
										</td>
										<td>
											<ul>
											<li>Food Items</li>
											<li>Guns</li>
											</ul>
										</td>
										<td>
											<ul>
												<li>Hazardous, flammable or</li>
												<li>explosive material</li>
												<li>Pets</li>
												<li>Plants</li>
												<li>Garbage</li>
												<li>Drugs or Stolen Property</li>
												<li>Yourself</li>
											</ul>
										</td>
									</tr>
									
									
									
									
									
								  </table>
								</div>
								
							</div>
                      </div>
                </div>
                
                <div class="bhoechie-tab-content">
                      <div class="storage-size">
                      	<h2> Aministrative Fees </h2>
                             <p> An administrative fee or "admin fee" is a one-time fee that the facility charges at the time of move-in. This is a very common fee in the self-storage industry. It is used to offset the costs of setting up your tenant account and processing paperwork. Usually, the admin fee is between <b>$15-25</b>, although in some cases it can be more. Sometimes this fee will replace your security deposit charge (where applicable). Tax amounts will vary depending on where you're renting. You will also need to provide your own lock for your unit, which can range from <b>$5-50</b>. Additional things you may be charged for include: dumpster service, electrical charges, etc. </p>
                             
                      </div>
                </div>
                
                <div class="bhoechie-tab-content">
                      <div class="storage-size">
                      	<h2> Policies </h2>
                       <h3> <strong>Contracts</strong></h3>
                             <p>It will include stipulations about what you can keep in your unit, what the rules about access and usage are like and perhaps most importantly, what happens when you're late or delinquent on your payments. In an industry that's spawned a popular television show about people abandoning their items in storage, you should be clear on what happens when things go wrong. </p>
                           
                           <h3> <strong>Insurance</strong> </h3>
                             <p>Some facilities require tenants to purchase insurance at move-in, although many will accept proof of existing homeowners or renters insurance. Bring your declaration page when you visit the facility to potentially waive the insurance fee, which is usually around $20–you can also visit an independent insurance provider.
Regardless of whether your facility requires this or not, having insurance is a great way to protect yourself and your belongings while in storage. Your homeowner's insurance will likely cover most of the items you place inside storage. Better safe than sorry! </p>  
                      </div>
                </div>
                
                <div class="bhoechie-tab-content">
                    <CommonFAQS></CommonFAQS>
                </div>
            </div>
		</div>
        </div>
    
     </div>
     
  </div>
  </div>
</div>

    </section>
    

       </div>
    )
}
}

export default StorageOptionsStaticContent;