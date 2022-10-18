import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DigitalMarketing = () => {
  return (
    <>
        <section id="about">
        <div className="bg-dark"></div>
        <div className="section-block-title">
          <div className="section-title">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 col-sm-10">
                  <article className="section-title-body">
                    <h1
                      className="head-title wow fadeInDown animated"
                      data-wow-duration="1.5s"
                    >
                      Digital Marketing
                    </h1>
                    <div
                      className="section-col wow fadeInUp animated"
                      data-wow-duration="1.5s"
                    ></div>
                    <p
                      className="head-text wow fadeInUp animated"
                      data-wow-duration="1.5s"
                    >
                      {/* We are regarded in stunning website solutions */}
                      <Breadcrumb>
                        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/services'>All Services</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Digital Marketing</Breadcrumb.Item>
                      </Breadcrumb>
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="inner-wrap">
        <div className="container">
          <div className="quote-icon">
            <img src="/images/quote.png" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="inner-top-title">
              <em>Digital Strategies <br/>For <span>Evolving Businesses</span></em>
              </div>
            </div>
          </div>
          <div className="title-section">
            <h2>Digital Marketing</h2>
          </div>
          <div className="inner-line-img">
            <img src="../img/bg/Mask-Group-2.jpg" alt="" />
          </div>
          <div className="inner-txt">
            <p>
              What percentage of your audience spends time online? Most
              businesses today answer yes to this question. Reaching your target
              audience online and converting them into customers is easier with
              digital marketing. With digital marketing, you can tailor it to
              suit just about any brand! Additionally, digital marketing has
              several advantages over traditional marketing. Digital marketing
              is flexible. As opposed to traditional marketing, where long-term
              campaigns are set in stone, digital marketing allows you to make
              changes during a campaign.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DigitalMarketing;