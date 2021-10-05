import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehanceSquare,
  faLinkedin,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Skilify brands  </h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faBehanceSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    *These statements have not been evaluated by the Food and
                    Drug Administration. These products are not intended to
                    diagnose.
                  </small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Detiels</li>
                  <li className="footer-menu">Courses</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>feel free to ask question</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Your Question"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <h5>++123456789</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarker} />
                  </div>
                  <div>
                    <p>
                     Brahmanbaria, Dhaka, 
                     <br />
                     Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-5">
              <small>
                © 2021 Skilify Education Private Limited. All rights reserved
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
