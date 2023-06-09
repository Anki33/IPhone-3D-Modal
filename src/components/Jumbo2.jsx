import React from "react";
import Logo from '../assets/images/logo.svg'
import Iphone from '../assets/images/iphone-14.jpg'   
import iphonehand from '../assets/images/iphone-hand.png'    
function Jumbo2() {

    const handleLearnMore = () =>{
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })

    } 
    return (
        <div className="jumbotron-section wrapper">
            <h2 title="title">New</h2>
            <img className="logo" src={Iphone} alt="Iphone 14 pro "></img>
            <p className="text"> Big and bigger.</p>
            <span className="description">
            From $41.62/mo. for 24 mo. or $999 before trade-in
            </span>
            <ul className="links">
            <li>
               <button className="button"> Buy</button> 
            </li>
            <li>
               <a className="link" onClick={handleLearnMore}> Learn More</a> 
            </li>
            </ul>
            &nbsp;
            <img className="iphone-img" src={iphonehand} alt="Iphone hand "></img>
        </div>
    );
}

export default Jumbo2;