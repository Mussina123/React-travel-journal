import React from "react";
import LocationLogo from '../images/location-logo.png'

export default function MainContent() {
    return(
        <div className="Main-content-container">
           <div className="main-content-section">
                <div className="img-container">
                    <img class='main-img' src="https://source.unsplash.com/WLxQvbMyfas" alt= 'main-logo'/>
                </div> 
                <section className="section-main">
                    <img src= {LocationLogo} alt='location-logo' /> 
                    <span className="location-text">JAPAN</span><span className="google-text">View on Google Maps</span>
                    <h1>Mount Fuji</h1> 
                    <h4>12 Jan, 2021 - 24 Jan, 2021</h4>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                     </section>
           </div>
        </div>
    ) 
}