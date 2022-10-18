import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  PinterestShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import {
  FacebookIcon,
  PinterestIcon,
  TelegramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

function Footer1() {
  return (
    <>
      <footer id="footer">
        <div className="pad-l-45 pad-r-45">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <article className="footer-info-block">
                  <div className="section-sub-title">
                    <article className="section-title-body white">
                      <h4 className="head-title">VARDHAN WORLD</h4>
                    </article>
                  </div>
                  <p style={{fontFamily:'JosefinSans, sans-serif'}}>
                    We are a leading UX agency that is known for solving the
                    most complex user experience challenges. For over 20 years,
                    we have been helping global customer-focused companies and
                    organizations improve UX of websites to increase
                    conversions, sales, and engagement by over 30%. This is how
                    we will deliver Results on Internet® (ROI) on your project.
                  </p>
                </article>
              </div>
              <div className="col-xl-3 col-md-6">
                <article className="footer-info-block">
                  <div className="section-sub-title">
                    <article className="section-title-body white">
                      <h4 className="head-title">Services</h4>
                    </article>
                  </div>
                  <ul className="list-unstyled">
                    {/* <li><a href="/">Mosaic Design Web studio</a></li>
                                    <li><a href="/">Terms & Conditions of Uses</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Sate Map</a></li> */}
                    <li>
                      <Link to="/startup-consulting">STARTUP CONSULTING</Link>
                    </li>
                    <li>
                      <Link to="/monetization-models">MONETIZATION MODELS</Link>
                    </li>
                    <li>
                      <Link to="/go-to-market-strategy">
                        GO TO MARKET STRATEGY
                      </Link>
                    </li>
                    <li>
                      <Link to="/investor-pitch-models">
                        INVESTOR PITCH MODELS
                      </Link>
                    </li>
                    <li>
                      <Link to="/sales-and-marketing-consulting">
                        SALES AND MARKETING CONSULTING
                      </Link>
                    </li>
                    <li>
                      <Link to="/branding">BRANDING</Link>
                    </li>
                    <li>
                      <Link to="/image-consulting">IMAGE CONSULTING</Link>
                    </li>
                    <li>
                      <Link to="/personal-counselling">
                        PERSONAL COUNSELLING
                      </Link>
                    </li>
                    <li>
                      <Link to="/career-counselling">CAREER COUNSELLING</Link>
                    </li>
                    <li>
                      <Link to="/digital-marketing">DIGITAL MARKETING</Link>
                    </li>
                    <li>
                      <Link to="/technology-services">TECHNOLOGY SERVICES</Link>
                    </li>
                    <li>
                      <Link to="/UI-UX">UI/UX</Link>
                    </li>
                    <li>
                      <Link to="/business-consulting">BUSINESS CONSULTING</Link>
                    </li>
                  </ul>
                </article>
              </div>
              <div className="col-xl-3 col-md-6">
                <article className="footer-info-block">
                  <div className="section-sub-title">
                    <article className="section-title-body white">
                      <h4 className="head-title">STARTUPs</h4>
                    </article>
                  </div>

                  {/* <p>
                    <a href="/">#Mosaic</a> coming up with their blog theme{" "}
                    <a href="/">#Design</a> show yourself from the best side
                  </p>
                  <p>
                    <a href="/">http://t.co/b0V7taIgvv</a>
                  </p> */}
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/startup">FLAPLIVE</Link>
                    </li>
                    <li>
                      <Link to="/startup">Thaliva</Link>
                    </li>
                    <li>
                      <Link to="/startup">Offbg</Link>
                    </li>
                    <li>
                      <Link to="/">DOOR TAXI</Link>
                    </li>
                    <li>
                      <Link to="/">GYMLEY</Link>
                    </li>
                    <li>
                      <Link to="/">FHOKUS</Link>
                    </li>
                    <li>
                      <Link to="/">AUTOHONA</Link>
                    </li>
                  </ul>
                </article>
              </div>
              <div className="col-xl-3 col-md-6">
                <article className="footer-info-block">
                  <div className="section-sub-title">
                    <article className="section-title-body white">
                      <h4 className="head-title">VARDHAN STUDIOS</h4>
                    </article>
                  </div>
                  <ul className="list-unstyled">
                    {/* <li>
                      <a href="/">Showcase</a>
                    </li>
                    <li>
                      <a href="/">Print Materials</a>
                    </li>
                    <li>
                      <a href="/">Packaging</a>
                    </li>
                    <li>
                      <a href="/">Shipping</a>
                    </li> */}
                    <li>
                      <Link to="/">Best Ever Beer Review Show</Link>
                    </li>
                    <li>
                      <Link to="/">MTV Dropout</Link>
                    </li>
                    <li>
                      <Link to="/">Story Board</Link>
                    </li>
                    <li>
                      <Link to="/">Story Script</Link>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div className="h25"></div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-md-8 order-1 col-xs-12 col-sm-8">
                  <ul className="footer-icon list-unstyled">
                    <li>
                      <FacebookShareButton
                        url="https://www.facebook.com/vardhanworld0"
                        quote="vardhanworld"
                        hashtag="#vardhanworld"
                      >
                        <FacebookIcon round={true} size={32}></FacebookIcon>
                      </FacebookShareButton>
                    </li>
                    {/* <li>
                      <PinterestShareButton
                        url="https://youtu.be/3aSb1WPK4Kg"
                        media="https://youtu.be/3aSb1WPK4Kg"
                      >
                        <PinterestIcon round={true} size={32}></PinterestIcon>
                      </PinterestShareButton>
                    </li> */}
                    {/* <li>
                      <LinkedinShareButton url="https://youtu.be/3aSb1WPK4Kg">
                        <LinkedinIcon round={true} size={32}></LinkedinIcon>
                      </LinkedinShareButton>
                    </li> */}
                    <li>
                      <TwitterShareButton url="https://twitter.com/VardhanWorld">
                        <TwitterIcon round={true} size={32}></TwitterIcon>
                      </TwitterShareButton>
                    </li>
                    {/* <li>
                      <TelegramShareButton url="https://youtu.be/3aSb1WPK4Kg">
                        <TelegramIcon round={true} size={32}></TelegramIcon>
                      </TelegramShareButton>
                    </li> */}
                    <li><a href="https://www.instagram.com/vardhanworld/" target='_blank'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-xs-12 col-sm-4">
                  <div className="footer-logo">
                    {/* <img src="img/logo-big-shop1.png" alt="" /> */}
            <img src="images/logofinal.png" height="100px" width="100" alt="logo" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer1;
