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
                    <span className="location-text">{props.item.location}</span><a href = {props.item.googleMapsUrl}> <span className="google-text"> View on Google Maps</span></a>
                    <h1>{props.item.title}</h1> 
                    <h4>{props.item.startDate} - {props.item.endDate}</h4>
                    <p>{props.item.description}</p>
                     </section>
           </div>
        </div>
    ) 
}

// import React from 'react'
// import Star from '../images/Star.png'


// export default function Card(props) {
//     console.log(props)

//     let badgeText 
//     if (props.item.openSpots === 0){
//         badgeText = 'SOLD OUT'
//     } else if (props.item.location === "Online"){
//         badgeText = 'ONLINE'
//     }
//     return (
//         <div className="card">
//             {badgeText && <div className='card--badge'> {badgeText} </div> }
//             <img src = {props.item.coverImg} className="card--image" alt='Main-pic'/>
//             <div className="card--stats">
//                 <img src={Star} className="card--star" alt ='star'/>
//                 <span>{props.item.stats.rating} </span>
//                 <span className="gray">  ({props.item.stats.reviewCount}) • </span>
//                 <span className="gray">{props.item.location} .</span>
//             </div>
//             <p>{props.item.title}</p>
//             <p> <span className="bold"> From ${props.item.price}</span> / person</p>
//         </div>
//     )
// } 