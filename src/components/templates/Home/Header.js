import React from "react";

// Styles Files
import "../../../styles/HomeStyle/style.css";
import "../../../styles/HomeStyle/footer.css";

// all style files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Logo
import Logo from "../../../logo.png";

import DiscountImg from "../../../assets/Home/discount.png";
import AboutImg from "../../../assets/Home/about.png";
import UzImg from "../../../assets/Home/uz.png";
import RuImg from "../../../assets/Home/ru.png";

import ElectornicsImg from "../../../assets/Home/electronics.png";
import HAImg from "../../../assets/Home/household_appliances.png";
import clothesImg from "../../../assets/Home/clothes.png";
import AccessoriesImg from "../../../assets/Home/accessories.png";
import BeautifulImg from "../../../assets/Home/beautiful.png";
import BooksImg from "../../../assets/Home/beautiful.png";
import HIImg from "../../../assets/Home/household_items.png";
import CRImg from "../../../assets/Home/construction.png"
import DirectoryImg from "../../../assets/Home/flyer.png"

import { Link } from "react-router-dom";

function Header() {
    function openLogRWindow() {
      let mainLRBox = document.querySelector(".mainLR-box");

      mainLRBox.classList.toggle("loginRActive");
    }

    function mainClMenu() {
      let mnButHeadMenu = document.querySelector(".mn-but-head-menu");

      mnButHeadMenu.classList.toggle("mnButHeadMenuActive");
    }

    function closeHFGMenu() {
      let mnButHeadMenu = document.querySelector(".mn-but-head-menu");

      mnButHeadMenu.classList.remove("mnButHeadMenuActive");
    }
    return (
        <div>
            <div className="header">
            <div className="head-f">
              <a href="tel:+998999999999" className="mobile-num-addres"><i class='bx bxs-phone'></i></a>
              <div className="rs-logo">
                <Link href="/"><img src={ Logo } /></Link>
              </div>
              <div className="he-f1-row">
                <Link to="/discount" className="he-f1-f1 discount"><img src={ DiscountImg } alt="*" /> Discount</Link>
                <Link to="/about" className="he-f1-f2 about"><img src={ AboutImg } alt="*" /> About</Link>
              </div>
              <div className="he-f2-row">
                <div className="he-f2-box">
                  <Link to="/questions-answers" className="he-f2">Ansver and Questions ?</Link>
                </div>
                <div className="dropdown">
                  <button className="dropdown-btn" onclick="toggleDropdown()"><img className="selected_languageIcon" src={ UzImg } alt="O`zbek" /> O`zbek</button>
                  <div className="dropdown-content" id="myDropdown">
                    <Link href="/" onclick="selectOption('O`zbek', '{ UzImg }')">
                      <img className="selected_languageIcon" src={ UzImg } alt="O`zbek" /> O`zbek
                    </Link>
                    <Link href="/" onclick="selectOption('Русский', './assets/{ RuImg }')">
                      <img className="selected_languageIcon" src={ RuImg } alt="Русский" /> Русский
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="head-s">
              <div className="logo-box">
                <Link to="/" id="logo-c">
                  <img className="logo" src={ Logo } alt="*" />
                </Link>
              </div>
              <div className="caBox">
                <button id="catalog">
                  <img src={ DirectoryImg } alt="*" />
                  Directory
                </button>
              </div>
              <div className="wrapper">
                <div className="search-input">
                  <a href="/" target="_blank" hidden />
                  <input type="text" placeholder="Type to search.." />
                  <div className="autocom-box">
                    {/* here list are inserted from javascript */}
                  </div>
                  <div className="icon"><i className="fas fa-search" /></div>
                </div>
              </div>
              <div className="re-sHeader-menu" onClick={ mainClMenu }>
                <button><i class='bx bx-menu'></i></button>
              </div>
              <div className="persolor-data">
                <Link to="/likes" className="pf-address">
                  <div className="pf-list">
                    <i className="bx bx-heart" />
                    <span>Likes</span>
                    <div className="pf-counter pf-he"><span>1</span></div>
                  </div>
                </Link>
                <Link to="/basket" className="pf-address">
                  <div className="pf-list">
                    <i className="bx bx-shopping-bag" />
                    <span>Basket</span>
                    <div className="pf-counter pf-bs"><span>4</span></div>
                  </div>
                </Link>
                <Link to="javascript:void(0);" className="pf-address"  id="login-r-b-m" onClick={ openLogRWindow }>
                  <div className="pf-list">
                    <i className="bx bx-user" />
                    <span>Login</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="internal_header">
            <div className="wrapper-s-header">
              <div className="icons"><i id="left" className="fa-solid fa-angle-left" /></div>
              <ul className="tabs-box">
                <li className="tab"><Link to="/about"><img className="tabsIcons" src={ ElectornicsImg } alt="*" />Electronics</Link></li>
                <li className="tab"><a href="/"><img className="tabsIcons" src={ HAImg } alt="*" />Household appliances</a></li>
                <li className="tab"><a href="/"><img className="tabsIcons" src={ clothesImg } alt="*" />Clothes</a></li>
                <li className="tab"><a href="/"><img className="tabsIcons" src={ AccessoriesImg } alt="*" />Accessories</a></li>
                <li className="tab"><a href="/"><img className="tabsIcons" src={ BeautifulImg } alt="*" />Beautiful</a></li>
                <li className="tab"><a href="/"><img className="tabsIcons" src={ BooksImg } alt="*" />Books</a></li>
                <li className="tab"><a href="/"><img className="tabsIcons" src={ HIImg } alt="*" />Household items</a></li>
                <li className="tab"><a href="/"><img className="tabsIcons" src={ CRImg } alt="*" />Construction and Repair</a></li>
              </ul>
              <div className="icons"><i id="right" className="fa-solid fa-angle-right" /></div>
            </div>

            <div className="res-foot-menu">
              <div className="res-food-menu-box">
                <Link className="resFootChilds resFootChildsActive" to="/"><i class='bx bxs-home-alt-2' ></i> <span>Home</span></Link>
                <Link className="resFootChilds" to="/"><i class='bx bx-list-ol' ></i> <span>Directory</span></Link>
                <Link className="resFootChilds" to="/"><i class='bx bxs-heart' ></i> <span>Likes</span></Link>
                <Link className="resFootChilds" to="/"><i class='bx bxs-shopping-bag-alt' ></i> <span>Basket</span></Link>
                <Link className="resFootChilds" to="/"><i class='bx bxs-user'></i> <span>Profile</span></Link>
              </div>
            </div>

            <div className="mn-but-head-menu">
                <div className="mnButHeTitle"><span>Menu</span></div>
                <div className="mn-but-head-close" onClick={ closeHFGMenu }><i class='bx bx-plus'></i></div>
                <div className="mn-m-if1-box">
                  <div className="he-f1-row-mn">
                    <a href="/discount" className="he-f1-f1 discount"><img src={ DiscountImg } alt="*" /> Discount</a>
                    <a href="/about" className="he-f1-f2 about"><img src={ AboutImg } alt="*" /> About</a>
                  </div>
                </div>
                <div className="qA-mn-bH-box-is2">
                  <div className="he-f2-box-mn">
                    <a href="/" className="he-f2">Ansver and Questions ?</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Header;