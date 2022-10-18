import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BusinessConsulting = () => {
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
                      Business Consulting
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
                        <Breadcrumb.Item active>Business Consulting</Breadcrumb.Item>
                      </Breadcrumb>
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="inner-wrap">
        <div className="container">
          <div className="quote-icon">
            <img src="http://vardhanworld.com/themes/frontend/images/quote.png" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="inner-top-title">
                <em>
                  Ambitious 
                   <span>Vision & Strategy </span><br /> Leading The Way To Success
                </em>
              </div>
            </div>
            </div>
            <div className="title-section">
              <h2>Business Consulting
</h2>
            </div>
            <div className="inner-line-img">
              <img
                src="http://vardhanworld.com/uploads/banners/original/banner_2431620253340.jpg"
                alt=""
              />
            </div>
            <div className="inner-txt">
              <p>
              My business consulting services bring in deep, functional expertise: I capture value across boundaries and between the silos of any organization. My expertise brings in investors, entrepreneurs, corporate innovation, and venture capitalists. I intend to forge mutually cost-effective relationships to launch the latest ventures and collaborate with the merited partners to apprehend growth opportunities.


              </p>
              <p>
                We will teach you the difference between a startup and a
                business and which one will suit your business requirement. You
                will also learn about different types of business modules.
              </p>
            </div>
          
        </div>
      </div> */}

      <div className="inner-wrap">
        <div className="container">
          <div className="quote-icon">
            <img src="/images/quote.png" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="inner-top-title">
                <em>
                  Ambitious <span>Vision &amp; Strategy</span> Leading The Way
                  To Success
                </em>
              </div>
            </div>
          </div>
          <div className="title-section">
            <h2>Business Consulting</h2>
          </div>
          <div className="inner-line-img">
            <img src="../img/bg/Mask-Group-1.jpg" alt="" />
          </div>
          <div className="inner-txt">
            <p>
              My business consulting services bring in deep, functional
              expertise: I capture value across boundaries and between the silos
              of any organization. My expertise brings in investors,
              entrepreneurs, corporate innovation, and venture capitalists. I
              intend to forge mutually cost-effective relationships to launch
              the latest ventures and collaborate with the merited partners to
              apprehend growth opportunities.
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
              I'll help you determine distant innovative approaches and
              strategies, align leadership and other key stakeholders, create a
              roadmap for your launch, and help you connect with admissible
              players in the global corporate ecosystem.
            </p>
            <p>
              I start by analyzing your current innovation activities and
              organizational keenness. Eventually, I'll help you define your
              innovation ambition and your commencing portfolio of approaches. I
              also work meticulously with you to prioritize the modernization
              spaces you'll seek and map disruptors' markets in respective
              spaces. And I help you organize by addressing talent necessitates
              and operating model deliberations.
            </p>
            <p>
            The typical rules of business don't cut-off when it comes to sustainability and corporate liability. Pragmatic solutions still constitute. So does ROI.
            </p>
            <p>That's the reason I ensure that your strategy, operations, and customer value overture don't quietly address sustainability concerns but augment the opportunities they present.</p>
            <p>Together, we'll make sure that your outlook on sustainability is:</p>
            <ul style={{listStyle:'none'}}>
				<li>Entrenched in your core strategy, I help you advance an approach to sustainability that reinforces your core business.</li>
				<li>ROI-driven, my experience demonstrates that the actions that ride out are those that produce the fair business gains. </li>
				<li>Tailored to a multi-stakeholder world, I foresee that the most confronting sustainability issues can't be fixed alone, so I'll help you foster the collaboration and partnerships along your value chain and with ancillary stakeholders indispensable to success. </li>
			</ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessConsulting;