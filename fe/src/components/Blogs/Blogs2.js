import React from 'react'
import BlogItem from './BlogItem'

const blogs = [
    {
        _id:'001',
        title:'What is a Go To Market strategy? Significant Steps to Build a Go-To-Market Strategy?',
        text:'Launching a new product in the market can be daunting, especially with a vast number of competitors and even more discerning customers. A Go To Market strategy or a GTM strategy, as the name suggests, is the plan you follow to go into the market with a new product, service, or even a new brand. A GTM strategy a straightforward step-by-step plan of introducing introduce your product in the market. It provides a clear and concise path to be followed to bring your product to the attention of your customers and prompt them to buy.',
        text1 : "Many great products have failed due to lack of planning and strategizing before going into the market. Reasons are numerous, like bad product-market fit, improper pricing, poor timing of the launch, bad advertising strategy, and the list goes on and on. A GTM ensures that such fallacies are avoided and that the product or service gets the expected market response.",
        url:'/',
        src:'img/preview/about-bg2.jpg',
        day:'01',
        month:'Jan',
        author:'Jhone',
        comments:'2'
    },
    {
        _id:'002',
        title:'Why startups need consulting',
        text:"A start-up is defined as Investopedia as a company that's in the initial stages of business. So this phase is typically full of uncertainties. It is also generally funded by the founders of the company. It’s a colossal project in itself getting the company’s business strategies, hiring the right employees, bagging new projects, researching the market, mining for funds, etc. One of these also becomes a reason why most startups fold in the very first year. So here is why startup consulting comes in handy. ",
        // text1: "",
        url:'/',
        src:'img/preview/about-bg1.jpg',
        day:'13',
        month:'Jan',
        author:'Anna',
        comments:'12'
    },
    {
        _id:'003',
        title:'Vardhan World Entrepreneurship start-up training',
        text:'I’m sure you are here for a purpose. It is; you either want to be an entrepreneur and start a new business or are already at it and want someone to guide you with it. But again, the question arises, do you want to create a small business, or do you want to start a start-up? What is the difference, really? Well, a small business is something that one starts with the intent of earning profits but not necessarily expanding or growing or even causing much stir in the market. However, a start-up has a different purpose; it looks to grow, expand, disrupt the market, and beat competitors. It has a repeatable and scalable business model and is extremely dynamic in nature.',
        url:'/',
        src:'img/preview/about-bg3.jpg',
        day:'29',
        month:'Jan',
        author:'Admin',
        comments:'15'
    },
    // {
    //     _id:'004',
    //     title:'Anema  features and specification',
    //     text:'Cum  amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro',
    //     url:'/',
    //     src:'img/preview/blog3.jpg',
    //     day:'03',
    //     month:'Feb',
    //     author:'Admin',
    //     comments:'33'
    // },
    // {
    //     _id:'005',
    //     title:'React Multipurpose One page template',
    //     text:'Lorem to error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro',
    //     url:'/',
    //     src:'img/preview/blog4.jpg',
    //     day:'15',
    //     month:'Feb',
    //     author:'Jhone',
    //     comments:'22'
    // },
    // {
    //     _id:'006',
    //     title:'Smartphones Ui and design ratings',
    //     text:' Cum expedita voluptatibus in ab consequatur ratione facere porro Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. expedita voluptatibus in ab consequatur ratione facere porro Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Ullam eius provident amet nulla quam dicta andae dolor, expedita voluptatibus in ab consequatur ratione facere porro',
    //     url:'/',
    //     src:'img/preview/blog5.jpg',
    //     day:'04',
    //     month:'Mar',
    //     author:'Tom',
    //     comments:'7'
    // }
]

function Blogs2() {
    return (
        <>
        <section  id="blog" className="single-bg">
            <div className="section-block-title">
                <div className="bg-dark"></div>

                    <div className="container">
                        <div className="section-sub-title center">
                            <article className="section-title-body white">
                                <h1 className="head-title">Last <span>News</span> from Anema</h1>
                            </article>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {
                                blogs.map((blog)=>(
                                    <div className="col-md-6 col-xl-4" key={blog._id}>
                                        <BlogItem 
                                        title={blog.title} 
                                        text={blog.text}
                                        url={blog.url}
                                        src={blog.src}
                                        day={blog.day}
                                        month={blog.month}
                                        author={blog.author}
                                        comments={blog.comments} />
                                    </div>
                                ))}
                            
                        </div>
                    </div>
                <div className="h50"></div>
            </div>       
        </section>
        </>
    )
}

export default Blogs2
