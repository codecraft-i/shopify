import React from 'react';

import { Link, NavLink } from "react-router-dom";

import './profile.css'

import Logo from "../../../logo.png";

function ProHeader() {
  function ProHeadUse() {
    let profileMButBox = document.querySelector(".profile-m-but-box");

    profileMButBox.classList.toggle("profileMButBoxActive");
  }
  return (
    <div className='pro-header'>
          <div className='pro-logo'>
              <Link to="/" id="logo-c-pf">
                <img className="logo" src={ Logo } alt="*" />
              </Link>
          </div>
          <div className='pro-nav'>
            <NavLink to="/profile/dashboard" className='pro_navList'><i class='bx bxs-home-alt-2 proNavListIcon' ></i> Dashboard</NavLink>
            <NavLink to="/profile/market" className='pro_navList'><i class='bx bx-shopping-bag proNavListIcon' ></i> Market</NavLink>
            <NavLink to="/profile/address" className='pro_navList'><i class='bx bx-link proNavListIcon' ></i> Address</NavLink>
            <NavLink to="/profile/charts" className='pro_navList'><i class='bx bxs-bar-chart-alt-2 proNavListIcon' ></i> Chart</NavLink>
            <NavLink to="/profile/pays" className='pro_navList'><i class='bx bxl-paypal proNavListIcon' ></i> Pay</NavLink>
          </div>
          <div className='profile-m-box'>
            <div className='profile-m-but' onClick={ ProHeadUse }><i class='bx bxs-user-circle'></i></div>
            <div className='profile-m-but-box'>
              <Link to="/profile/dashboard">Profile</Link>
              <Link to="/">Exit</Link>
            </div>
          </div>

          <div className='res-nav-bot'>
            <NavLink to="/profile/dashboard" className='pro_navList'><i class='bx bxs-home-alt-2 proNavListIcon' ></i> Dashboard</NavLink>
            <NavLink to="/profile/market" className='pro_navList'><i class='bx bx-shopping-bag proNavListIcon' ></i> Market</NavLink>
            <NavLink to="/profile/address" className='pro_navList'><i class='bx bx-link proNavListIcon' ></i> Address</NavLink>
            <NavLink to="/profile/charts" className='pro_navList'><i class='bx bxs-bar-chart-alt-2 proNavListIcon' ></i> Chart</NavLink>
            <NavLink to="/profile/pays" className='pro_navList'><i class='bx bxl-paypal proNavListIcon' ></i> Pay</NavLink>
          </div>
    </div>
  );
};

export default ProHeader;