import React from "react";
import MainLogo from '../images/Main-logo.png'

export default function NavBar(){
    return(
        <div className="Nav-bar-container"> 
            <img className='main-logo' src={MainLogo} alt="main-logo" /> 
            <h2> my travel journal </h2>
        </div>
    )
}