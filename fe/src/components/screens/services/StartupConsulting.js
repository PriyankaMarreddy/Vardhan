import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StartupConsulting = () => {
  return (
    <>
        <section id="startup-consulting">
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
                      Startup Consulting
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
                        <Breadcrumb.Item><Link to='/' className='breadcrum-link'>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/services' className='breadcrum-link'>All Services</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Startup Consulting</Breadcrumb.Item>
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
                  {/* <sup><img src="../images/quote-top.png" alt=""/></sup> */}
                  Innovation Strategies That <br />
                  Turn <span>Visions Into Profit</span>
                </em>
              </div>
            </div>
            </div>
            <div className="title-section">
              <h2>Start Up Consulting</h2>
            </div>
            <div className="inner-line-img">
              <img
                src="../img/bg/Mask-Group-14.jpg"
                alt=""
              />
            </div>
            <div className="inner-txt">
              <p>
                In order to save you money, time, and frustration, we, as
                startup consultants, can advise you on what to do and put your
                plan into action. Startups require outside professionals who can
                perform the necessary tasks and offer training.
              </p>
              <p>
                We will teach you the difference between a startup and a
                business and which one will suit your business requirement. You
                will also learn about different types of business modules.
              </p>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default StartupConsulting;