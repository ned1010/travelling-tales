import React from "react";
import "./Footer.css";
import { HashLink as Link } from "react-router-hash-link";
import { footerInfo } from "./footerInfo";
import Social from "./social";
import CopyRight from "./copyright";

function Footer() {
  return (
    <div className="footer-container">
      <div className="sub-container">
        {footerInfo.map((item, index) => {
          return (
            <div key={index} className="footer-item">
              <h2>{item.title}</h2>
              {item.destinations.map((list, index) => {
                return (
                    <li key={index}>{list}</li>
                )
              })}
            </div>
          );
        })}
        <div className="footer-item">
            <h2>Agency Information</h2>
            <li><Link to="#places" className="contact-info">About Us</Link></li>
            <li><Link to="#contact" className="contact-info">Contact Us</Link></li>
            <li><Link to="#destinations" className="contact-info">Top Places</Link></li>
        </div>
      </div>

      <Social />
      <CopyRight />
      
    </div>
  );
}

export default Footer;
