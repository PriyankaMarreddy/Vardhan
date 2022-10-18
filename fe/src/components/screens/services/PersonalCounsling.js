import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PersonalCounsling = () => {
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
                      Personal Counsling
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
                        <Breadcrumb.Item active>Personal Counselling</Breadcrumb.Item>
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
              <em>Support That <span>Creates A Difference</span> To My Whole-Person Approach, Your Derivation <br/>For Personal Growth.”</em>
              </div>
            </div>
          </div>
          <div className="title-section">
            <h2>Personal Counselling</h2>
          </div>
          <div className="inner-line-img">
            <img src="../img/bg/Mask-Group-10.jpg" alt="" />
          </div>
          <div className="inner-txt">
            <p>
              One of the key benefits of individual therapy is that it aids in
              self-discovery. One of the most difficult and crucial things to
              achieve if you want to live a tranquil and prosperous life is
              self-knowledge. You can understand your genuine potential and
              worth with the aid of an online counseling session.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalCounsling;