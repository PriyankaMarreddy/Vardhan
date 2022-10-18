import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider1 extends Component {
  render() {
    const settings = {
      dots: false,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <>
        
        <Slider {...settings}>
            <div  className="full-screen-block slider1_1">
                <div className="sliderTitleBlock">
                    <h3 className= "homeSliderTitleTop">Be a</h3>
                    <h1 className= "homeSliderTitle"> Startup <br/> <span>whiz in just 90 days</span></h1>
                </div>
            </div>
            <div className="full-screen-block slider1_2">
                <div className="sliderTitleBlock">
                    <h3 className= "homeSliderTitleTop">Meet Expert</h3>
                    <h1 className= "homeSliderTitle"> Business <br/> <span>  Consulting</span></h1>    
                </div>
            </div>
        </Slider>
      </>
    );
  }
}