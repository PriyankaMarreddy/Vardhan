import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TechnologyServices = () => {
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
                      Technology Services
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
                        <Breadcrumb.Item active>Technology Services</Breadcrumb.Item>
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
                  Unleash The <span>Power of Technology.</span>
                </em>
              </div>
            </div>
          </div>
          <div className="title-section">
            <h2>Technology Services</h2>
          </div>
          <div className="inner-line-img">
            <img src="../img/bg/Mask-Group-16.jpg" alt="" />
          </div>
          <div className="inner-txt">
            <p>
              As a technology service provider, I offer Software-as-a-Service
              (SaaS) to market segments or industries delivering numerous
              clients. I have experience and expertise to help your business
              engage your goals and objectives rapidly, with less risk.
            </p>
            <p>
              Whether you are looking at Wireless Networking, Data Backup, other
              IT services, or want to understand your current entourage
              exceedingly, I can furnish the expertise to help you build a
              strategy that is best suited for you. With my Program and Project
              Management Services, I administer the drill of planning and
              organizing details, motivating staff, and regulating resources.
            </p>
            <p>
              I stay proficient with the latest technologies and hold industry
              expertise such as Amazon Web Services, HP, Microsoft, VMWare, and
              many others. Over time, my technology business has thrived. I
              provide an assortment consultation, from workstations, networks,
              servers (on-premise or cloud-based), Office 365, data security
              solutions, and hardware-software procurement.
            </p>
            <p>
              Modern applications dispatch the experience customers to seek and
              the results they need. I can help you accelerate to a secure,
              digital, data-driven enterprise. I employ advanced technologies
              and methods to expedite the creation, alteration, delivery, and
              maintenance of high-quality, secure applications granting you to
              innovate faster while reducing risk, turn to the market, and total
              cost of ownership.
            </p>
            <p>
              I provide the potential and scale to deliver secure applications
              across various cloud platforms, including private, speed, and
              quality, using the contemporary delivery approach and DevOps to
              enrich the user experience, expedite business results and drive
              customer loyalty. I address the entire lifecycle from product
              ideation and innovation for unique digital products, from
              bottlenecks and constraints that limit velocity, through
              swift-cycle development, to realize real business value from
              modern cloud platforms. I monitor this through a concise and
              straight forward lexicon of Design, Digitize, and Scale.
            </p>
            <p>
              My mission is to help businesses get the most out of their
              technology investment.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechnologyServices;