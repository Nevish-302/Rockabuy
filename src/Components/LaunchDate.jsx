import React from 'react'
import moon from './images/moon-build.png'
import earth from './images/earth.png'
import rocket from './images/rocket.png'
import path from './images/arrow.png'

import Button from "./Button";
import "./LaunchDate.css";

const LaunchDate = () => {
  return (
    <div className='build-launch'>
        <img className='earth' src= {earth} alt="" />
        <img className='rocket' src= {rocket} alt="" />
        <img className='path' src= {path} alt="" />
      <div className="launch-window">
        <h2>PICK A LAUNCH DATE</h2>

        <h3>SELECT A YEAR</h3>
        <Button className = "option" >2022</Button>
        <Button className = "option">2023</Button>
        <h3>SELECT A QUARTER</h3>
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <Button className = "option">Q1</Button>
        <Button className = "option">Q2</Button>
        <Button className = "option">Q3</Button>
        <Button className = "option">Q4</Button>
        </div>
        
        <div className='launch' style={{float: "right"}}><Button>Build & Launch</Button></div>
      </div>
      <img className='moon' src= {moon} alt="" />
    </div>
  )
}

export default LaunchDate
