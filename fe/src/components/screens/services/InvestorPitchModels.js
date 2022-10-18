import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InvestorPitchModels = () => {
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
                      Investor Pitch Models
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
                        <Breadcrumb.Item active>Investor Pitch Models</Breadcrumb.Item>
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
              <em>Get Funded with <span>Smart Pitch Decks</span></em>
              </div>
            </div>
            </div>
            <div className="title-section">
              <h2>Investor Pitch Models</h2>
            </div>
            <div className="inner-line-img">
              <img src="../img/bg/Mask-Group-6.jpg" alt="" />
            </div>
            <div className="inner-txt">
              <p>
                Your present market share, your revenue strategy, and a
                financial breakdown outlining how you will use it should all be
                included in an investor pitch deck. In order for the investor to
                comprehend the business potential, it uses the slides to simply
                illustrate the company and its likelihood of success. An
                investor pitch deck presentation is made up of a number of
                slides that assist the entrepreneur in explaining their company
                in greater detail.
              </p>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default InvestorPitchModels;