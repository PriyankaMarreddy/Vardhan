import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderClients extends Component {
  render() {
    const settings = {
      dots: false,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 400000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
    };
    return (
      <>
     
        <Slider {...settings}>
                            <div className="text-center">
                                <img src="img/parrtners1.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="text-center">
                                <img src="img/parrtners2.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="text-center">
                                <img src="img/parrtners3.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="text-center">
                                <img src="img/parrtners4.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="text-center">
                                <img src="img/parrtners5.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="text-center">
                                <img src="img/parrtners6.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="text-center">
                                <img src="img/parrtners3.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="text-center">
                                <img src="img/parrtners4.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="text-center">
                                <img src="img/parrtners5.png" alt="" className="img-fluid"/>
                            </div>
                            <div className="text-center">
                                <img src="img/parrtners6.png" alt="" className="img-fluid"/>
                            </div>
        </Slider>
        
      </>
    );
  }
}