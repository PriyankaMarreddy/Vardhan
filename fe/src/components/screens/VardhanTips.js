import React, { useState } from "react";
import { Breadcrumb, li, a } from "react-bootstrap";
import { Link } from "react-router-dom";
// import styled from "styled-components";
// import AllTips from "../components/vardhan-tips/AllTips";
import { tips } from "../vardhan-tips/tips-content";
import AllTips from '../vardhan-tips/AllTips'

// const StyledList = styled(List)({
//     '.css-10hburv-MuiTypography-root':{
//       fontFamily:'rawlinemedium',
//     },
//     // selected and (selected + hover) states
//     '&& .selected, && .selected:hover': {
//       backgroundColor: '#D82533',
//       '&, & .MuiaIcon-root': {
//         color: '#fff',
//       },
//     },
//     // hover states
//     '& .listli:hover': {
//       backgroundColor: '#D82533',
//       '&, & .MuiaIcon-root': {
//         color: '#fff',
//       },
//     },
//   });




var sectionStyle = {
  justifyContent: "center",
};

const VardhanTips = () => {
    const [selectedIndex, setSelectIndex] = useState(0);
  const [allTips, setAlltips] = useState(tips); 




  const aClickHandler = (event, index) => {
    setSelectIndex(index);
    console.log(event.target.value)
  };

  return (
    <>
      {/* <div className="inner-banner">
        <img
          src="http://vardhanworld.com/themes/frontend/images/Mask-Group-22.jpg"
          alt=""
        />
        <div className="bredcum">
          <div className="container">
            <p variant="h2">Branding</p>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/vardhan-tips">Vardhan Tips</Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
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
                      Vardhan Tips
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
                        {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                          Library
                        </Breadcrumb.Item> */}
                        <Breadcrumb.Item active>Vardhan Tips</Breadcrumb.Item>
                      </Breadcrumb>
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="inner-wrap" > 
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="tips-cat-list" id="tip_cat">
              
              <div style={{ width: '100%', maxWidth: 360, backgroundColor:'#EFEFEF'  }}>
                <ul component="nav" >
                  {/* <StyledList style={{fontFamily:'rawlinemedium'}}> */}
                  <li selected={selectedIndex === 0} onClick={(event) => aClickHandler(event, 0)} >
                    <a className="button-a">All Tips</a>
                  </li>
                  {/* <Divider /> */}<hr></hr>
                  <li selected={selectedIndex === 1} onClick={(event) => aClickHandler(event, 1)}>
                    <a >Branding</a>
                  </li>
                  <li selected={selectedIndex === 2} onClick={(event) => aClickHandler(event, 2)}>
                    <a >Business Consulting</a>
                  </li>
                  <li selected={selectedIndex === 3} onClick={(event) => aClickHandler(event, 3)}>
                    <a >Career Counselling</a>
                  </li>
                  <li selected={selectedIndex === 4} onClick={(event) => aClickHandler(event, 4)}>
                    <a >Digital Marketing</a>
                  </li>
                  <li selected={selectedIndex === 5} onClick={(event) => aClickHandler(event, 5)}>
                    <a >Go-To-Market Strategy</a>
                  </li>
                  <li selected={selectedIndex === 6} onClick={(event) => aClickHandler(event, 6)}>
                    <a >Image Consulting</a>
                  </li>
                  <li selected={selectedIndex === 7} onClick={(event) => aClickHandler(event, 7)}>
                    <a >Investor Pitch Models</a>
                  </li>
                  <li selected={selectedIndex === 8} onClick={(event) => aClickHandler(event, 8)}>
                    <a >Monetization Models</a>
                  </li>
                  <li selected={selectedIndex === 9} onClick={(event) => aClickHandler(event, 9)}>
                    <a >Personal Counselling</a>
                  </li>
                  <li selected={selectedIndex === 10} onClick={(event) => aClickHandler(event, 10)}>
                    <a >Sales - Marketing Consulting</a>
                  </li>
                  <li selected={selectedIndex === 11} onClick={(event) => aClickHandler(event, 11)}>
                    <a >Startup Consulting</a>
                  </li>
                  <li selected={selectedIndex === 12} onClick={(event) => aClickHandler(event, 12)}>
                    <a >UI UX</a>
                  </li>
                  {/* </StyledList> */}
                </ul>
                </div>



                  

              </div>
            </div>
            <div className="col-md-9">
              {/* <div className="search-wrap">
                <form>
                  <input type="text" placeholder="Search for Vardhan Tips" />
                  <li type="submit">Search Now</li>
                </form>
              </div> */}
              <div marginTop='15px'>
                {
                  selectedIndex===0 ? <AllTips index={selectedIndex} />:null
                }
                {
                  selectedIndex===1 ? <AllTips index={selectedIndex} />:null
                }
                {
                  selectedIndex===2 ? <AllTips index={selectedIndex} />:null
                }{
                  selectedIndex===3 ? <AllTips index={selectedIndex} />:null
                }{
                  selectedIndex===4 ? <AllTips index={selectedIndex} />:null
                }{
                  selectedIndex===5 ? <AllTips index={selectedIndex} />:null
                }{
                  selectedIndex===6 ? <AllTips index={selectedIndex} />:null
                }{
                  selectedIndex===7 ? <AllTips index={selectedIndex} />:null
                }{
                  selectedIndex===8 ? <AllTips index={selectedIndex} />:null
                }{
                  selectedIndex===9 ? <AllTips index={selectedIndex} />:null
                }{
                  selectedIndex===10 ? <AllTips index={selectedIndex} />:null
                }{
                  selectedIndex===11 ? <AllTips index={selectedIndex} />:null
                }{
                  selectedIndex===12 ? <AllTips index={selectedIndex} />:null
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VardhanTips;
