import React, { Component } from "react";
import Slider from "react-slick";

// Style files
import '../../../styles/InternalStyle/HomeAll/homeall.css';

// Images
import iImg1 from '../../../assets/Home/i-img1.jpg';
import iImg2 from '../../../assets/Home/i-img2.jpg';
import iImg3 from '../../../assets/Home/i-img3.jpg';
import iImg4 from '../../../assets/Home/i-img4.jpg';

export default class FCarausel extends Component {
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
        slidesToScroll: 1,
        autoplay: true,
      };
      return (
        <div className="mainSliderBar">
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div className="sliderSlickChild" key={1}>
                <a href="/">
                    <img src={ iImg1 } />
                </a>
            </div>
            <div className="sliderSlickChild" key={2}>
                <a href="/">
                    <img src={ iImg2 } />
                </a>
            </div>
            <div className="sliderSlickChild" key={3}>
                <a href="/">
                    <img src={ iImg3 } />
                </a>
            </div>
            <div className="sliderSlickChild" key={4}>
                <a href="/">
                    <img src={ iImg4 } />
                </a>
            </div>
          </Slider>
          <div className="buttonsSliderBox">
            <button className="button-iNl button-iNl-left" onClick={this.previous}>
                <i class='bx bxs-chevron-left' ></i>
            </button>
            <button className="button-iNl button-iNl-right" onClick={this.next}>
                <i class='bx bxs-chevron-right'></i>
            </button>
          </div>
        </div>
      );
    }
}