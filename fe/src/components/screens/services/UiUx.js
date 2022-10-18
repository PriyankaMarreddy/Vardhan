import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UiUx = () => {
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
                      UI And UX
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
                        <Breadcrumb.Item active>UI/UX</Breadcrumb.Item>
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
                  Let User Experience <span>Dominate Your Design Choices.</span>
                  ”
                </em>
              </div>
            </div>
          </div>
          <div className="title-section">
            <h2>UI & UX</h2>
          </div>
          <div className="inner-line-img">
            <img src="../img/bg/Mask-Group-17.jpg" alt="" />
          </div>
          <div className="inner-txt">
            <p>
              We offer comprehensive consultancy for application development,
              testing, and UX design. By developing digital solutions that stand
              the test of time, we assist ambitious firms in identifying,
              exploring, and taking advantage of new opportunities.
            </p>
            <p>
              Our UI/UX design skills extend beyond web applications, mobile
              apps, and cross-platform digital experiences. Our goods and
              services are created with your brand's individuality in mind while
              yet offering exceptional usability.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UiUx;