import React, { Component } from "react";
import Slider from "react-slick";
import bg_vide from '../../videos/girl.mp4'
export default class SimpleSlider3 extends Component {
  render() {
    const settings = {
      dots: false,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000
    };
    return (
      <>
        
        <Slider {...settings}>
            <div  className="full-screen-block relative">
                <video autoPlay loop muted className="bg_video">
                    <source src={bg_vide} type="video/mp4"></source>
                </video>
                <div className="bg-dark"></div>
                <div className="sliderTitleBlock">
                    
                    <h1 className= "homeSliderTitle"> Creative Graphic Design</h1>
                    <h3 className= "homeSliderTitleBottom">Anema is modern & creative One Page Template that suits any type of Personal Resume, Portfolio, Business and Other styles, minimal and quality.</h3>
                </div>
            </div>
            <div   className="full-screen-block slider3_2">
                <div className="sliderTitleBlock">
                    
                    <h1 className= "homeSliderTitle">Scroll down & start</h1> 
                    <h3 className= "homeSliderTitleBottom">
                                You can Download this Premium Creative One Page Template for only $ 17.
                                Personal Resume, Portfolio, Business and Other styles, minimal and quality.</h3>   
                </div>
            </div>
        </Slider>
      </>
    );
  }
}