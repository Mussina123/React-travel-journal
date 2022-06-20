import React from "react";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import MainData from './data'
console.log(MainData)


export default function App() {

  const cardinfo = MainData.map(item => {
    return (
      <MainContent 
        // key = {item.title}
        item = {item}
       /> 
      )
    })



  return(
    <div className="App-container"> 
      <NavBar /> 
      {/* <MainContent /> */}
        <section> 
          {cardinfo}
        </section>
    </div>
  )
}



