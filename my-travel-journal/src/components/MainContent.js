import React from "react";
import LocationLogo from '../images/location-logo.png'

export default function MainContent(props) {
    console.log(props)
    return(
        <div className="Main-content-container">
           <div className="main-content-section">
                <div className="img-container">
                    <img class='main-img' src= {props.item.imageUrl} alt= 'main-logo'/>
                </div> 
                <section className="section-main">
                    <img src= {LocationLogo} alt='location-logo' /> 
                    <span className="location-text">{props.item.location}</span><a href = {props.item.googleMapsUrl} target = '_blank' rel="noreferrer" > <span className="google-text"> View on Google Maps</span></a>
                    <h1>{props.item.title}</h1> 
                    <h4>{props.item.startDate} - {props.item.endDate}</h4>
                    <p>{props.item.description}</p>
                     </section>
           </div>
        </div>
    ) 
}
