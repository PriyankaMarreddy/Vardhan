import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About2 from "./components/About/About2";
import Footer1 from "./components/Footer/Footer1";
import Header1 from "./components/Header/Header1";
import SimpleSlider1 from "./components/Sliders/Slick-slider1";
import Home1 from "./pages/Home1";
import Service4 from "./components/Service/Service4";
import VardhanTips from "./components/screens/VardhanTips";
import StartupConsulting from "./components/screens/services/StartupConsulting";
import Branding from "./components/screens/services/Branding";
import BusinessConsulting from "./components/screens/services/BusinessConsulting";
import CareerCounsling from "./components/screens/services/CareerCouncling";
import DigitalMarketing from "./components/screens/services/DigitalMarketing";
import ImageConsulting from "./components/screens/services/ImageConsulting";
import InvestorPitchModels from "./components/screens/services/InvestorPitchModels";
import MarketingStrategy from "./components/screens/services/MarketStrategy";
import MonetizationModels from "./components/screens/services/MonetizationModels";
import PersonalCounsling from "./components/screens/services/PersonalCounsling";
import SalesAndMarketing from "./components/screens/services/Sales-Marketing";
import TechnologyServices from "./components/screens/services/TechnologyServices";
import UiUx from "./components/screens/services/UiUx";
import Contact4 from "./components/Contact/Contact4";
import Blogs2 from "./components/Blogs/Blogs2";
import Startups from "./components/screens/startups";

const App = () => {
  const [path, setPath] = useState("/");
  useEffect(() => {
    window.scrollTo(0, 0);
    setPath(window.location.pathname);
  }, []);

  return (
    <>
      {/* {
    (window.location.pathname === '/') ?
    <div  id="home" className="full-screen-block">
      <Header1/>
      <SimpleSlider1/>
      </div>
      : <>
      <div  id="home" className="full-screen-block">
      <Header3/>
      <SimpleSlider1/>
      </div>
      </>
} */}

      {/* {path === "/" && (
        <div id="home" className="full-screen-block">
          {" "}
          <Header1 /> <SimpleSlider1 />{" "}
        </div>
      )}

      {path !== "/" && (
        <div id="home" className="full-screen-block">
          {" "}
          <Header3 /> <SimpleSlider1 />{" "}
        </div>
      )} */}

      <div id="home" className="full-screen-block">
        <Header1 />
        <SimpleSlider1 />
      </div>

      <Routes>
        {/* <Route path='*' element={<Error/>} /> */}
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<About2 />} />
        <Route path="/services" element={<Service4 />} />
        <Route path="/vardhan-tips" element={<VardhanTips />} />
        <Route path="/contact" element={<Contact4 />} />
        <Route path="/blog" element={<Blogs2 />} />
        <Route path="/startup" element={<Startups />} />






        <Route path="/startup-consulting" element={<StartupConsulting />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/business-consulting" element={<BusinessConsulting />} />
        <Route path="/career-counselling" element={<CareerCounsling />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/image-consulting" element={<ImageConsulting />} />
        <Route path="/investor-pitch-models" element={<InvestorPitchModels />} />
        <Route path="/go-to-market-strategy" element={<MarketingStrategy />} />
        <Route path="/monetization-models" element={<MonetizationModels />} />
        <Route path="/personal-counselling" element={<PersonalCounsling />} />
        <Route path="/sales-and-marketing-consulting" element={<SalesAndMarketing />} />
        <Route path="/technology-services" element={<TechnologyServices />} />
        <Route path="/UI-UX" element={<UiUx />} />


      </Routes>
      <Footer1 />
    </>
  );
};

export default App;
