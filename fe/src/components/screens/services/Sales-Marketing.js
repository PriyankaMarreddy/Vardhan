import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SalesAndMarketing = () => {
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
                      Sales And Marketing Consulting
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
                        <Breadcrumb.Item active>Sales And Marketing Consulting</Breadcrumb.Item>
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
                  Frame An Organization Apt To Take On{" "}
                  <span>Industry Disruption</span>
                </em>
              </div>
            </div>
            </div>
            <div className="title-section">
              <h2>Sales and Marketing Consulting</h2>
            </div>
            <div className="inner-line-img">
              <img src="../img/bg/Mask-Group-12.jpg" alt="" />
            </div>
            <div className="inner-txt">
              <p>
                Sales consulting is the procedure whereby a professional helps a
                salesperson or group of salespeople increase their existing
                sales rates. Top sales consultants need to have a specific set
                of skills that help them succeed. These qualities include a
                confident and persuasive approach, a readiness to pursue sales
                prospects, and a fearless outlook. Some of these skills are
                innate, but all may be learned via practice.
              </p>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default SalesAndMarketing;