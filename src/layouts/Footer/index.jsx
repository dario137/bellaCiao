import React from "react";
import data from "./data-footer.json"
import './footer.css'


function Footer(){

  return(
    <footer className="text-center main-footer">
		<div className="widgets-section padding-top-small padding-bottom-small">
		 <div className="container">
		     
		    <div className="clearfix row">
		       
		       <div className="footer-column col-md-4 col-sm-6 col-xs-12">
		          <div className="footer-widget about-widget">
		             <h3 className="has-line-center">About Us</h3>
		             <div className="widget-content">
		                <div className="text">  Troll and Toad is the #1 marketplace for multiple top brands' secondary market sales. With over three decades of success, Troll and Toad has been a market leader since the inception of the Internet.
						NFTNT will leverage relationships with major brands and incorporate our almost 30 year history in physical collectibles, to create unique customer experiences on the blockchain. This is a brand new underdeveloped space which is a natural fit to our expertise. </div>
		                   <ul className="social-links">
						   {/* {data[0].iconsData && data[0].iconsData.map((item , i) => (
		                   			<li><a href="#"><span key={i} className={item.icoClass}></span></a></li>		
		                   		))} */}
		                   </ul>
		                 </div>
		             </div>
		         </div>
		         
		         
		         <div className="footer-column col-md-4 col-sm-6 col-xs-12">
		             <div className="footer-widget contact-widget">
		                 <h3 className="has-line-center">Contact Us</h3>
		                 <div className="widget-content">
		                     <ul className="contact-info">
							 Webbed Sphere Inc. 
								Mike Broughton - Vice President
								mykeatog@trollandtoad.com
		                     </ul>
		                 </div>
		             </div>
		         </div>
		         
		         
		         <div className="footer-column col-md-4 col-sm-12 col-xs-12">
		             <div className="footer-widget newsletter-widget">
		                 <h3 className="has-line-center">Newsletter</h3>
		                 <div className="widget-content">
		                   <div className="text">Stay Updated with our latest news. We promise not to spam</div>
		                     <div className="newsletter-form">
		                         <form method="post">
		                             <div className="form-group">
		                                 <input type="email" name="field-name" value="" placeholder="Your Email" required="" />
		                                 <button type="submit" className="send-btn"><span className="fa fa-paper-plane-o"></span></button>
		                             </div>
		                         </form>
		                     </div>
		                 </div>
		             </div>
		         </div>
		         
		     </div>
		 </div>
		</div>
		<div className="footer-bottom">
		 <div className="auto-container">
		    <div className="copyright-text">Copyright ©. All Rights Reserved</div>
		 </div>
		</div>
    </footer>
  )
}

export default Footer