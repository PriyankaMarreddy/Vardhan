import React from "react";
import ContactForm from "./../Contact/ContactForm";
import {
  FacebookShareButton,
  PinterestShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  InstapaperShareButton,
} from "react-share";
import {
  FacebookIcon,
  PinterestIcon,
  TelegramIcon,
  LinkedinIcon,
  TwitterIcon,
  InstapaperIcon,
  Instagram,
} from "react-share";

function Contact1() {
  return (
    <>
      <section id="contact" className="light">
        <div className="bg-light"></div>
        <div className="bg-50-l"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12  order-md-1 justify-content-center d-flex align-items-center">
              <div className="pad-l-45 pad-r-45">
                <div className="section-block-title">
                  <div className="section-title">
                    <article className="section-title-body mobile-mb-0">
                      <h1
                        className="head-title wow fadeInDown animated"
                        data-wow-duration="1.5s"
                      >
                        Contact
                      </h1>
                      <div
                        className="section-col wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      ></div>
                      <p
                        className="head-text wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      >
                        We wait you with happy time. Contact us with socials
                      </p>
                      <div className="h25"></div>
                      <div
                        className="contact-icon wow fadeInUp animated"
                        data-wow-duration="1.5s"
                      >
                        <ul className="list-unstyled">
                          <li>
                            <FacebookShareButton
                              url="https://www.facebook.com/vardhanworld0"
                              quote="Anema"
                              hashtag="#anema"
                            >
                              <FacebookIcon
                                round={true}
                                size={38}
                              ></FacebookIcon>
                            </FacebookShareButton>
                          </li>
                          {/* <li>
                            <PinterestShareButton
                              url="https://youtu.be/3aSb1WPK4Kg"
                              media="https://youtu.be/3aSb1WPK4Kg"
                            >
                              <PinterestIcon
                                round={true}
                                size={38}
                              ></PinterestIcon>
                            </PinterestShareButton>
                          </li> */}
                          {/* <li>
                            <LinkedinShareButton url="https://youtu.be/3aSb1WPK4Kg">
                              <LinkedinIcon
                                round={true}
                                size={38}
                              ></LinkedinIcon>
                            </LinkedinShareButton>
                          </li> */}
                          <li>
                            <TwitterShareButton url="https://twitter.com/VardhanWorld">
                              <TwitterIcon round={true} size={38}></TwitterIcon>
                            </TwitterShareButton>
                          </li>
                          
                          {/* <li>
                            <TelegramShareButton url="https://youtu.be/3aSb1WPK4Kg">
                              <TelegramIcon
                                round={true}
                                size={38}
                              ></TelegramIcon>
                            </TelegramShareButton>
                          </li> */}
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="pad-l-45 pad-r-45 block">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="widget-block mobile-center">
                      <h4 className="widget-title">
                        <i className="ion-android-pin"></i>Adress:
                      </h4>
                      <p>
                      3rd floor, 5-109/3/B/1, road, opp. J R C,
                        <br /> Jubilee Hills, Rai Durg
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="widget-block mobile-center">
                      <h4 className="widget-title">
                        <i className="ion-android-call"></i>Phone:
                      </h4>
                      <p>
                        (10 808) 321-1785-952
                        <br />
                        (10 808) 321-1785-953
                      </p>
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact1;
