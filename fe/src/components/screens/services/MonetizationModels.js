import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MonetizationModels = () => {
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
                      Monetization Models
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
                        <Breadcrumb.Item active>Monetization Models</Breadcrumb.Item>
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
                  Product-As-A-Service: Bridging The Gap <br />
                  Between <span>Creative and Commercial Thinking.</span>”
                </em>
              </div>
            </div>
            </div>
            <div className="title-section">
              <h2>Monetization Models</h2>
            </div>
            <div className="inner-line-img">
              <img src="../img/bg/Mask-Group-8.jpg" alt="" />
            </div>
            <div className="inner-txt">
              <p>
                A strategy for generating revenue from a particular platform,
                audience, or kind of content is known as monetization.
              </p>
              <p>
                Revenue growth is the main advantage of a monetization plan.
                Many publishers require more than just funding and donations to
                survive. Therefore, they must come up with creative solutions to
                accomplish their financial goals and make money from their
                readership. They can achieve this by constructing varied
                monetization strategies across platforms.
              </p>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default MonetizationModels;