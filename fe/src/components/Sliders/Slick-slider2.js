import React, { Component } from "react";
import Slider from "react-slick";
export default class SimpleSlider2 extends Component {
  render() {
    const settings = {
      dots: false,
      arrows:false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <>
       
        <Slider {...settings}>
            <div  className="full-screen-block">
            <div className="sliderTitleBlock rotated">
                    <h3 className= "homeSliderTitleTop white">Anema One Page</h3>
                    <h1 className= "homeSliderTitle"><span>Creative</span>   </h1>
            </div>
            </div>
            <div  className="full-screen-block">
            <div className="sliderTitleBlock rotated">
                    <h3 className= "homeSliderTitleTop white">Anema One Page</h3>
                    <h1 className= "homeSliderTitle"> <span>Responsive</span>  </h1>
            </div>
            </div>
            
            <div  className="full-screen-block">
            <div className="sliderTitleBlock rotated">
                    <h3 className= "homeSliderTitleTop white">Anema One Page</h3>
                    <h1 className= "homeSliderTitle"> <span>Modern</span>  </h1>
            </div>
            </div>
            { //<div   className="full-screen-block slider2_2">
              //  <div className="sliderTitleBlock">
              //      <h3 className= "homeSliderTitleTop">Mosaic Design Studio</h3>
              //      <h1 className= "homeSliderTitle"> Creative Web  <br/> Design Agency</h1>    
              //  </div>
              //</div>
            }
        </Slider>
      </>
    );
  }
}