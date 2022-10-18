import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Branding = () => {
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
                      Branding
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
                        <Breadcrumb.Item active>Branding</Breadcrumb.Item>
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
            <img src="/themes/frontend/images/quote.png" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="inner-top-title">
                <em>
                  Brand Identity That Gets Engraved In The{" "}
                  <span>Minds Of The Users</span>
                </em>
              </div>
            </div>
          </div>
          <div className="title-section">
            <h2>Branding</h2>
          </div>
          <div className="inner-line-img">
            <img src="../img/bg/branding-bg.jpg" alt="" />
          </div>
          <div className="inner-txt">
            <p>
              How do you become a merchandisable brand with boundless sales and
              raving admirers?
            </p>
            <p>
              A discernible and cherished brand is one of the most treasured
              assets a company holds, by determining your assurance to a
              customer or client. The hurdle is imparting a clear and relentless
              message to them —across all intermediary channels.
            </p>
            <p>
              If you are germinating a startup, you're in a prime position to
              create the ABCs for your brand with the right directive to take on
              your market. If you have an ingrained company, you can draw from
              prevalent customer experience to simplify your message for a
              radically upgraded brand blueprint and identity. We need to bring
              all this preposterous value to the sheer cover and package it into
              a clear cunning direction that will define your stand in the
              market and propagate your business long-term.
            </p>
            <p>
            Compelling brand strategy, identity layout, and marketing will empower your business to spawn awareness, trust, loyalty, and advocacy for your brand.
            </p>
            <p>
            My unique approach brings the brand to ponder at the heart of companies and services to establish meaning and value where it matters to the lion's share. I have sustained some of the most successful organizations who transformed themselves through branding. Starting from a new company created to M&A and reframing for growth, my approach connects captivating portfolios to drive relevance in evolving markets.
            </p>
            <p>
            To set a standard, you have to innovate. I'll help you do just that, and, together, we'll create a brand that is most recognized for its brand values.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Branding;