import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CareerCounsling = () => {
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
                     Career Councling
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
                        <Breadcrumb.Item active>Career Counselling</Breadcrumb.Item>
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
                  Laying A <span>Trodden Path</span> For You To Succeed
                </em>
              </div>
            </div>
          </div>
          <div className="title-section">
            <h2>Career Counselling</h2>
          </div>
          <div className="inner-line-img">
            <img src="../img/bg/Group-113.jpg" alt="" />
          </div>
          <div className="inner-txt">
            <p>
              Understanding yourself is a crucial component of career and
              educational exploration and planning. Knowing your career
              interests, values, skills, personality type, and preferences will
              help you identify the career fields, major areas of study, and
              education paths that are compatible with your characteristics. The
              Vardhan World team will help you develop an accurate
              self-assessment of your personal qualities.
            </p>
            <p>
              With career counseling, you’ll learn a wide range of skills that
              will help you to succeed when it comes to applying for jobs,
              attending interviews, and excelling in the corporate world.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerCounsling;