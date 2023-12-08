import React from "react";

// Styles Files
import "../../../styles/HomeStyle/style.css";
import "../../../styles/HomeStyle/footer.css";

// Images
import AppStoreImg from "../../../assets/Home/appstore.svg";
import GoogleplayImg from "../../../assets/Home/googleplay.svg";
import AppGalleryImg from "../../../assets/Home/appgallery.svg";

import Logo from "../../../logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className="footer">
            <div className="top-downloads-apps">
              <div className="sq3-title">
                <span>Our mobile application is available in AppGallery, <br />App store and Google play</span>
              </div>
              <div className="sq3-content_box">
                <a href="/"><img src={ AppStoreImg } alt="*" /></a>
                <a href="/"><img src={ GoogleplayImg } alt="*" /></a>
                <a href="/"><img src={ AppGalleryImg } alt="*" /></a>
              </div>
            </div>
            <footer>
              <div className="content">
                <div className="top">
                  <div className="logo-details">
                    {/* <i class="fab fa-slack"></i> */}
                    {/* <span class="logo_name">CodingLab</span> */}
                    <Link to="/" id="logo-c-f">
                      <img className="logo" src={ Logo } alt="*" />
                    </Link>
                  </div>
                  <div className="media-icons">
                    <a href="/"><i className="fab fa-facebook-f" /></a>
                    <a href="/"><i className="fab fa-twitter" /></a>
                    <a href="/"><i className="fab fa-instagram" /></a>
                    <a href="/"><i className="fab fa-telegram" /></a>
                    <a href="/"><i className="fab fa-youtube" /></a>
                  </div>
                </div>
                <div className="link-boxes">
                  <ul className="box bottom-m-box" style={{width: 280}}>
                    <li className="link_name">Support number</li>
                    <li><a href="/" style={{fontSize: '1.4rem', fontWeight: 600, color: 'var(--ye-main-s)', opacity: '100%'}}>+998 (99) 999 99 99</a></li>
                    <li><a href="/" style={{display: 'flex', alignItems: 'center', fontSize: '1rem'}}><i style={{fontSize: '1.35rem', marginRight: 5, color: 'var(--red-p-color)'}} className="bx bx-current-location" /> O'zbekistan, Toshkent</a></li>
                    <li><a href="/" style={{display: 'flex', alignItems: 'center', fontSize: '1rem'}}><i style={{fontSize: '1.35rem', marginRight: 5, color: 'var(--ye-main-s)'}} className="bx bx-envelope" /> info@topexpress.uz</a></li>
                  </ul>
                  <ul className="box">
                    <li className="link_name">About Us</li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact us</a></li>
                    <li><a href="/">Vacancies</a></li>
                    <li><a href="/">Refund and exchange of goods</a></li>
                  </ul>
                  <ul className="box">
                    <li className="link_name">To users</li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact us</a></li>
                  </ul>
                  <ul className="box">
                    <li className="link_name">To entrepreneurs</li>
                    <li><a href="/">Selling on Top Express</a></li>
                    <li><a href="/">Top Express cabinet</a></li>
                  </ul>
                </div>
              </div>
              <div className="bottom-details">
                <div className="bottom_text">
                  <span className="copyright_text">© 2023 <a href="/">Top Express</a>All rights reserved</span>
                  <span className="policy_terms">
                    <a href="/">Privacy policy</a>
                    <a href="/">Terms &amp; condition</a>
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
    )
}

export default Footer;