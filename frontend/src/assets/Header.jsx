import React from "react";
import "./Header.css";



const Header = () => {
  return (
    < >
    <div>
      <div className="top-bar ">
        <div className="top-left">
          <span>📧info@icceindia.co.in</span>
          <span>📞+91 8617257007</span>
        </div>
        <div className="top-right">
          <span>Co-Ordination Login</span>
          <button className="login-btn">LOGIN</button>
        </div>
      </div>

      
      <div className="logo-section">
        <img style={{width:"80px"}} src=""/>
        <div className="title">
          <h1 >RASTRIA PARISAD KALAKENDRA</h1>
          <h2>राष्ट्रीय परिषद कलाकेंद्र</h2>
          
        </div>
      </div>

      
      <nav className="nav-bar">
        <ul>
          
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>RECOGNITION</li>
          <li>STUDENT CORNER</li>
          <li>COURSES</li>
          <li>ENQUIRY</li>
          <li>STUDY CENTRE</li>
          <li>DOWNLOAD</li>
          <li>OUR SERVICES</li>
          <li>GALLERY</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
      </div>
    </>
    
  );
};

export default Header;
