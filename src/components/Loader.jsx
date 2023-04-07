import React from "react";
import loader from '../assets/images/logo-animated.gif'   
function Loader() {
    return (  
        <div className="loader">
            <img className="logo" src={loader} alt='logoo'></img>
        </div>
    );
}

export default Loader
