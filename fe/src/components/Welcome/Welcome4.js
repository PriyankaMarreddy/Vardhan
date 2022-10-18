import React from 'react'
import {Link} from 'react-scroll'
function Welcome4() {
    return (
        <section>
            <div className="block color-scheme-white light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-sub-title center">
                                <article className="section-title-body">
                                        <h1 className="head-title">Become a <span>StartUp Entrepreneur</span>   in just <span>90 Days.</span></h1>
                                        <p className="head-text"><span>Welcome Entrepreneurs!!</span><br/>
                                        We at Vardhan World are here to aid your journey to success in starting a start-up and establishing it as a flourishing business. Our training encompasses all aspects of building your start-up from scratch. Our industry experts will guide you through this course and train you in different modules. One of the most salient features of our course is the hands-on practical knowledge that you will get. Industry experts will guide and mentor you while working on ongoing projects. You will find our precisely designed curriculum is more complex and elaborate than most B schools. It has been designed to meet the needs of entrepreneurs looking to establish themselves as start-up founders in our ever-changing business landscape.


                                        </p>
                                        {/* <Link to='portfolio' className="btn-default  btn-move" smooth={false} duration={800}>Portfolio</Link>&nbsp; */}
                                        <Link to='contact' className="btn-default active btn-move t1" smooth={false} duration={800}>Register Now</Link>
                                </article>
                            </div>   
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Welcome4
