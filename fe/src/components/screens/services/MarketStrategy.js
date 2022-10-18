import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MarketingStrategy = () => {
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
                      Go To Market Strategy
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
                        <Breadcrumb.Item active> Go To Market Strategy</Breadcrumb.Item>
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
              <em>A <span>Customer-Centric</span><br/> Approach To Success</em>
              </div>
            </div>
            </div>
            <div className="title-section">
              <h2>Go-To-Market Strategy</h2>
            </div>
            <div className="inner-line-img">
              <img
                src="../img/bg/Mask-Group-3.jpg"
                alt=""
              />
            </div>
            <div className="inner-txt">
              <p>
                The go-to-market strategy clarifies how best to reach and appeal
                to the product's target audience, usually formulated by the
                product marketing team. GTM strategies may seem simple on the
                surface, but in practice, they involve extensive research and
                creating a comprehensive plan that touches on many parts of the
                business, such as sales, pricing, and marketing.
              </p>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default MarketingStrategy;