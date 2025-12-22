import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Top Info Cards */}
      <div className="footer-top">
        <div className="info-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Address</h3>
          <p>
            623/1/C Diamond Harbour Road <br />
            West Bengal, Kolkata-700034
          </p>
        </div>

        <div className="info-card">
          <FaPhoneAlt className="icon" />
          <h3>Phone</h3>
          <p>
            +91 8617257007 <br />
            +91 8617461575
          </p>
        </div>

        <div className="info-card">
          <FaEnvelope className="icon" />
          <h3>Email</h3>
          <p>
            info@icceindia.co.in <br />
            info@icceindia.co.in
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h4>About ICCE</h4>
            <p>
              To achieve excellent standards of quality education by keeping
              pace with rapidly changing technologies and create technical
              manpower of global standards.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>ID Verification</li>
              <li>Result Verification</li>
              <li>Certification Verification</li>
              <li>Centre Login</li>
              <li>Online Test</li>
            </ul>
          </div>

          <div>
            <h4>Links</h4>
            <ul>
              <li>Recognition</li>
              <li>Our Project</li>
              <li>Course</li>
              <li>Franchise</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2017 INDIAN COUNCIL OF COMPUTER EDUCATION All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
