import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ImageConsulting = () => {
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
                     Image Consulting
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
                        <Breadcrumb.Item active>Image Consulting</Breadcrumb.Item>
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
                <em>
                  Level-Up your Corporate Presence and <br />
                  Make An <span>Awesome First Impression</span>
                </em>
              </div>
            </div>
          </div>
          <div className="title-section">
            <h2>Image Consulting</h2>
          </div>
          <div className="inner-line-img">
            <img src="../img/bg/Mask-Group-4.jpg" alt="" />
          </div>
          <div className="inner-txt">
            <p>
              Image consultants help their clients improve their communication
              skills, refine their personal style, and develop a professional
              appearance. Consultants may recommend alterations in the client's
              communication skills and behavior in order to effect necessary
              changes.
            </p>
            <p>
              Individuals are guided to develop a polished persona that appeals
              to their particular audience. Nearly everyone these days needs to
              sell themselves or a product or service and an Image Consultant
              can help them with that.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageConsulting;