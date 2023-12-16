import React from "react";
import logo from "../siteIcon/mainLogo.png";

 const Footer = ()=>{
    return(
         <footer classNameName="footer-container">
        <div classNameName="profile-container">
        <div className="profile-photo"></div>
        <div className="profile-info">
          <div className="profile-name">Pradeep Kaviti</div>
          <div className="profile-links">
            <a href="https://github.com/yourusername" className="profile-link" target="_blank">GitHub</a>
            <a href="https://twitter.com/yourusername" className="profile-link" target="_blank">Twitter</a>
            <a href="mailto:youremail@example.com" className="profile-link">Email</a>
          </div>
        </div>
      </div>
      <div classNameName="companydetails-container">
      <div classNameName="company-logo">
        <img src={logo} alt="SnapShoppe"/>
      </div>
        {/* <div classNameName="comapny-info"> */}
            <div id="support-number">{`(+02) 666 888 7777`}</div>
            <div id="support-mail">support@company.com</div>
        {/* </div> */}
      </div>
      <div classNameName="newsletter-container">
        <form id="newsletter-form" onSubmit={()=>console.log("submitted")}>
        <h3>NEWSLETTER</h3>
        <input type="email" name="email" placeholder="your email address" required/>
        <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
       </footer>
    )
}
export default Footer;