import React from "react";
import { Link } from "react-router-dom";
const services = [
  {
    _id: "001",
    classIcon: "ion-ios-pie-outline",
    title: "STARTUP CONSULTING",
    text: "In order to save you money, time, and frustration, we, as startup consultants, can advise you on what to do and put your plan..",
    to: '/startup-consulting'
  },
  {
    _id: "002",
    classIcon: "ion-ios-printer-outline",
    title: "MONETIZATION MODELS",
    text: "A strategy for generating revenue from a particular platform, audience, or kind of content is known as monetization.",
    to: "/monetization-models"
  },
  {
    _id: "003",
    classIcon: "ion-ios-reverse-camera-outline",
    title: "GO TO MARKET STRATEGY",
    text: "The go-to-market strategy clarifies how best to reach and appeal to the product's target audience, usually formulated by the product marketing team.",
    to: "/go-to-market-strategy"
  },
  {
    _id: "004",
    classIcon: "ion-ios-telephone-outline",
    title: "INVESTOR PITCH MODELS",
    text: "Your present market share, your revenue strategy, and a financial breakdown outlining how you will use it should all be included..",
    to: "/investor-pitch-models"
  },
  {
    _id: "005",
    classIcon: "ion-ios-flask-outline",
    title: "SALES AND MARKETING CONSULTING",
    text: "Sales consulting is the procedure whereby a professional helps a salesperson or group of salespeople increase..",
    to: "/sales-and-marketing-consulting"
  },
  {
    _id: "006",
    classIcon: "ion-ios-settings",
    title: "BRANDING",
    text: "How do you become a merchandisable brand with boundless sales and raving admirers?",
    to: "/branding"
  },
  {
    _id: "007",
    classIcon: "ion-ios-settings",
    title: "IMAGE CONSULTING",
    text: "Image consultants help their clients improve their communication skills, refine their personal style, and develop a professional appearance.",
    to: "/image-consulting"
  },
  {
    _id: "008",
    classIcon: "ion-ios-settings",
    title: "PERSONAL COUNSELLING",
    text: "One of the key benefits of individual therapy is that it aids in self-discovery. One of the most difficult and crucial things to achieve..",
    to: "/personal-counselling"
  },
  {
    _id: "009",
    classIcon: "ion-ios-settings",
    title: "CAREER COUNSELLING",
    text: "Understanding yourself is a crucial component of career and educational exploration and planning. Knowing your career..",
    to: "/career-counselling"
  },
  {
    _id: "010",
    classIcon: "ion-ios-settings",
    title: "DIGITAL MARKETING",
    text: "What percentage of your audience spends time online? Most businesses today answer yes to this question. Reaching your target audience..",
    to: "/digital-marketing"
  },
  {
    _id: "011",
    classIcon: "ion-ios-settings",
    title: "TECHNOLOGY SERVICES",
    text: "As a technology service provider, I offer Software-as-a-Service (SaaS) to market segments or industries delivering numerous clients.",
    to: "/technology-services"
  },
  {
    _id: "012",
    classIcon: "ion-ios-settings",
    title: "UI/UX",
    text: "We offer comprehensive consultancy for application development, testing, and UX design. By developing digital solutions..",
    to: "/UI-UX"
  },
  {
    _id: "013",
    classIcon: "ion-ios-settings",
    title: "BUSINESS CONSULTING",
    text: "My business consulting services bring in deep, functional expertise: I capture value across boundaries and between the silos..",
    to: "/business-consulting"
  },
];
function Service4() {
  return (
    <>
      <section id="services" className="light">
        <div className="bg-light"></div>

        <div className="block">
          <div className="container">
            <div className="section-sub-title center">
              <article className="section-title-body">
                <h1 className="head-title">
                  All <span>Services</span> 
                </h1>
                {/* <p className="head-text">
                  Woident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p> */}
              </article>
            </div>
            <div className="row">
              {services.map((service) => (
                <div className="col-lg-4 col-md-6" key={service._id}>
                  <div className="block-feature-icon  center dark">
                    <Link to={service.to}>
                    <div className="icon hi-icon-color hi-icon-effect">
                      <span className="hi-icon">
                        <i className={service.classIcon}></i>
                      </span>
                    </div>
                    <div className="block-title">
                      <h4>{service.title}</h4>
                      <p>{service.text}</p>
                    </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service4;
