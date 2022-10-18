import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

function About2() {
  return (
    <>
      <section id="about" className=" ab2">
        <div className="section-block-title">
          <div className="bg-dark"></div>
          <div className="container">
            <div className="section-sub-title center">
              <article className="section-title-body white">
                <h1 className="head-title">
                  {/* A Little <span>About</span> us */}
                  Never Stopped &amp; Never Will, <br />
                  <span>High-On Energy, Strategy to Slay.</span>
                </h1>
              </article>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2 d-flex align-items-center">
                <div className="widget-block relative">
                  <div className="h100 d-none d-lg-block"></div>
                  <h4 className="widget-title">Wondering who this gentleman is?</h4>
                  {/* <p style={{color:'#fff', fontFamily:"JosefinSans, sans-serif"}}>Hi, I am <span style={{color:'#b46e3c'}}>Harshavardhan Jain.</span></p> */}
                  <p>
                  Hi, I am{" "}
                  <span style={{ color: "#b46e3c" }}>Harshavardhan Jain.</span>
                </p>
                <p>
                  I am a human playing multiple characters in this play called
                  life. At night I am a Script Writer, on weekends, I turn into
                  a Motivational Speaker, every morning I wake up as an
                  Entrepreneur, and in the afternoon, I wear my Business
                  Consulting Suit on!
                </p>
                <p>
                  When I work with a Business Consulting Team, my mind works
                  like a salesman trying to sell products. All I can think about
                  is the monthly target and a strategy to outscore the previous
                  month's targets.
                </p>
                <p>
                  When I meet the Founders of Budding Startups, my brain
                  automatically filters out investor pitch, monetization model,
                  sales & marketing strategies, and Go-To-Market Strategy.
                </p>
                <p>
                  Whenever I visit colleges or institutions, I transform into a
                  career counselor, spreading out motivational messages &
                  knowledge that I have gathered over the years.
                </p>
                <p>
                  Working alongside digital marketers, I turn into a Brand &
                  Content Specialist, giving them ideas on how to plan their
                  content strategy, brand their product online, and, most
                  importantly, change their tactics with changing user needs.
                </p>
                <p>
                  And, last but not least, when I see turmoil & confusion in
                  people's eyes, I turn into their personal counselor. And, if
                  by any chance I have some time left or probably a time stolen
                  from my sleep, my ink gives birth to stories waiting to be
                  turned into awe-inspiring movies.
                </p>
                <p>
                  I am an extension of your team, a buffer to fill the gap, a
                  mind to initiate ideas, and an executor to take it forward.
                  <span style={{ color: "#b46e3c" }}>Harshavardhan Jain</span>,
                  always at your disposal!
                </p>
                  {/* <div className="block-feature d-lg-none d-xl-block">
                    <i className="ion-calendar"></i>
                    <a href="/">Deadline ready</a>
                    <p>
                      Duis aute irure dolor quis dolor quis nostrud exercitation
                      ullamco laboris nisi ut in. Eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="block-feature d-lg-none d-xxl-block">
                    <i className="ion-image"></i>
                    <a href="/">Photo Design</a>
                    <p>
                      Duis aute irure dolor quis dolor quis nostrud exercitation
                      ullamco laboris nisi ut in. Eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 order-lg-1 d-flex align-items-center">
                <div className="relative  d-flex">
                  <div className="card-block  lax lax_preset_fadeIn:50:150  lax_preset_slideY:4500:700">
                    <div className="card-info">
                      <h2>100%</h2>
                      <h4>Verified</h4>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="img/bg/about-img.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block color-scheme-1">
          <div className="container">
            <div className="welcome-article-block">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="welcome-article dark y-50">
                    <img
                      className="img-fluid"
                      alt=""
                      src="img/preview/services-bg.jpg"
                    />
                    <div className="welcome-article-text">
                      <h4>All Services</h4>
                      <p>
                      Our goal is to provide you with the best services with maximum efficiency.
                      </p>
                      <Link
                        to="/services"
                        className="btn-default white btn-move"
                        smooth={false}
                        duration={800}
                      >
                        Visit Services
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="welcome-article dark">
                    <img
                      className="img-fluid"
                      alt=""
                      src="img/preview/vardhantips-bg.jpg"
                    />
                    <div className="welcome-article-text">
                      <h4>Creative Tips</h4>
                      <p>
                      Vardhan World is a Business Consulting firm that aims at improving customer acquisition, conversion, and retention with Vardhan Tips
                      </p>
                      <Link
                        to="/vardhan-tips"
                        className="btn-default white btn-move t1"
                        smooth={false}
                        duration={800}
                      >
                        Vardhan Tips
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="welcome-article dark y-50">
                    <img
                      className="img-fluid"
                      alt=""
                      src="img/preview/blog-bg.jpg"
                    />
                    <div className="welcome-article-text">
                      <h4>Last News</h4>
                      <p>
                      Home to Business Consulting Advice, Latest News, Our expertise in Startup Training, and more about Vardhan World.  
                      </p>

                      <Link
                        to="/blog"
                        className="btn-default white btn-move t2"
                        smooth={false}
                        duration={800}
                      >
                        Visit Blogs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h50 d-none d-lg-block"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About2;
