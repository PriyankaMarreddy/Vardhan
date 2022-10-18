import React from 'react'
import SliderClients from './Sliders/Slick-clients'
function Clients() {
  
    return (
        <>
        <section>
            <div className="block2 color-scheme-1">
                <div className="container">
                    <div className="section-sub-title center">
                        <article className="section-title-body white">
                            <h1 className="head-title">Our best Partners</h1>
                        </article>
                    </div>
                    <div id="owl-partners"  className="owl-carousel">
                        <SliderClients/>
                    </div>
                </div>

            </div>          

        </section>
        </>
    )
}

export default Clients
