import React, { Component } from "react";

// Import files
import FCarausel from "../templates/HomeIndex/FCarausel";
import Products from "../templates/HomeIndex/Products";
import LoginR from "../templates/ProfilesRL/LoginR";

import Header from '../../components/templates/Home/Header';
import Footer from '../../components/templates/Home/Footer';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='internal-container'>
        <div className="intro-carousel">
          <Header />
            <FCarausel />
            <LoginR />
            <Products />
          <Footer />
        </div>
      </div>
    );
  }
}