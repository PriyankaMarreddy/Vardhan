import React from 'react'
import ContactForm from './../Contact/ContactForm'
import {FacebookShareButton,
    PinterestShareButton,
    TelegramShareButton,
    LinkedinShareButton,
    TwitterShareButton} from "react-share";
import {FacebookIcon,
    PinterestIcon,
    TelegramIcon,
    LinkedinIcon,
    TwitterIcon} from "react-share";
function Contact4() {
    return (
        <>
        <section  id="contact" className="light">
          <div className="bg-light"></div>
                <div className="block">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6">
                                <div className="section-sub-title">
                                    <article className="section-title-body">
                                        <h1 className="head-title">Meet with you </h1>
                                    </article>
                                </div>
                                <div className="widget-block dark">
                                    <h4 className="widget-title"><i className="ion-pound"></i>Vardhan Studio</h4>
                                    <h4 className="widget-title"><i className="ion-map"></i>3rd floor, 5-109/3/B/1, road, opp. J R C, Jubilee Hills, Rai Durg</h4>
                                    <br/>
                                    <FacebookShareButton url="https://www.facebook.com/vardhanworld0" 
                                    quote= "test" hashtag="#react">
                                        <FacebookIcon round={true} size={32}></FacebookIcon>
                                    </FacebookShareButton>
                                    &nbsp;
                                    {/* <PinterestShareButton url="https://www.pinterest.com/pin/665406913672282630/" media="https://assets.pinterest.com/ext/embed.html?id=665406913672282630">
                                        <PinterestIcon round={true} size={32}></PinterestIcon>
                                    </PinterestShareButton>    
                                    &nbsp;
                                    <LinkedinShareButton url="https://youtu.be/6bytsvX6gAM" >
                                        <LinkedinIcon round={true} size={32}></LinkedinIcon>
                                    </LinkedinShareButton>   
                                    &nbsp;  */}
                                    <TwitterShareButton url="https://twitter.com/VardhanWorld">
                                        <TwitterIcon round={true} size={32}></TwitterIcon>
                                    </TwitterShareButton> 
                                    &nbsp;   
                                    {/* <TelegramShareButton url="https://youtu.be/6bytsvX6gAM">
                                        <TelegramIcon round={true} size={32}></TelegramIcon>
                                    </TelegramShareButton>     */}
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="widget-block dark">
                                            <h4 className="widget-title"><i className="ion-android-call"></i>Phone:</h4>
                                            <p>(10 808) 321-1785-952<br/>
                                                (10 808) 321-1785-953
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="widget-block dark">
                                            <h4 className="widget-title"><i className="ion-email"></i>Email:</h4>
                                            <p> <br/>
                                                support@vardhanworld.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 align-items-center">
                                <div className="form-light">
                                    <ContactForm/>
                                </div>
                                
                            </div>                                  
                        </div>
                    </div>
                </div>
            
        </section>
        </>
    )
}

export default Contact4
