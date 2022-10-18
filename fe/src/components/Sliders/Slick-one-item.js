import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderOneItem extends Component {
  render() {
    const settings = {
      dots: true,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <>

        <Slider {...settings}>
        <div className="item">
          <img className="img-fluid" src="img/preview/about3.png" alt=""/>
        </div>
        <div className="item">
          <img className="img-fluid" src="img/preview/about2.png" alt=""/>  
        </div>
        </Slider>
      </>
    );
  }
}