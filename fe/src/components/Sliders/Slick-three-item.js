import React, { Component } from "react";
import Slider from "react-slick";
import PortfolioItem from './../Portfolio/PortfolioItem'
export default class SliderThreeItem extends Component {

  render() {
    const settings = {
      dots: true,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 400000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
    return (
      <>
     
        <Slider {...settings}>
        <div className="item">
            <PortfolioItem portfolioUrl={"/"} portfolioTitle={"My Hobby Is Reading"} portfolioInfo={"Graphic Design"} 
            portfolioSrc={"img/preview/blog1.jpg"} portfolioAlt={"blog"}/>
        </div>
        <div className="item">
            <PortfolioItem portfolioUrl={"/"} portfolioTitle={"Circle 3D Projects"} portfolioInfo={"3D Object Design"} 
            portfolioSrc={"img/preview/blog2.jpg"} portfolioAlt={"blog"}/>
        </div>
        <div className="item">
            <PortfolioItem portfolioUrl={"/"} portfolioTitle={"Hi Tech Book Pro"} portfolioInfo={"Hi Tech Design"} 
            portfolioSrc={"img/preview/blog3.jpg"} portfolioAlt={"blog"}/>
        </div>
        <div className="item">
            <PortfolioItem portfolioUrl={"/"} portfolioTitle={"Photo Night City"} portfolioInfo={"Photo Design"} 
            portfolioSrc={"img/preview/blog4.jpg"} portfolioAlt={"blog"}/>
        </div>
        <div className="item">
            <PortfolioItem portfolioUrl={"/"} portfolioTitle={"Photo Tool Objects"} portfolioInfo={"Photo Design"} 
            portfolioSrc={"img/preview/blog5.jpg"} portfolioAlt={"blog"}/>
        </div>
        <div className="item">
            <PortfolioItem portfolioUrl={"/"} portfolioTitle={"iPhone from Apple"} portfolioInfo={"3D Object Design"} 
            portfolioSrc={"img/preview/blog6.jpg"} portfolioAlt={"blog"}/>
        </div>
        <div className="item">
            <PortfolioItem portfolioUrl={"/"} portfolioTitle={"Easy to use Tablets"} portfolioInfo={"Hi Tech Design"} 
            portfolioSrc={"img/preview/blog7.jpg"} portfolioAlt={"blog"}/>
        </div>
        </Slider>
        
      </>
    );
  }
}