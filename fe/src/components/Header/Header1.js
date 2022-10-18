import React, {useState} from 'react'
import Navbar1 from './../Navbar/Navbar1'
import {Link} from 'react-scroll'
function Header1() {
    const [fixHeader, setFixed] = useState(false);
    //let winHeight = window.innerHeight;
    const fixedHeader = () =>{
        
        if (window.innerWidth>768){
            if (window.scrollY>=(window.innerHeight-100)){
                setFixed(true);
            }
            else{
                setFixed(false);
                 
            }
        }
        else {
            setFixed(false);
        }
        

    }

    window.addEventListener('scroll', fixedHeader);

    return (
        <>
         
        <Link to='home'  id="totop"  className={fixHeader?'d-block':'d-none'} smooth={false} duration={800}>
            <i className="ion-ios-arrow-thin-up"></i>
        </Link>
        <header id="header" className={fixHeader?'header-top-fixed':''}>
            <div className="full-screen-block">
                <div className={fixHeader?'header-body header-body-fixed':'header-body'} id="header-body-fixed">
                    <div id="container-fixed">
                        <Navbar1/>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header1
