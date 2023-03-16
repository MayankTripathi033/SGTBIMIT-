import React from 'react'

export default function Navbar() {
  const arrow = require("../images/down.png")


  return (
    <nav>
      <div className='active'>HOME</div>
      <div>ABOUT US<img src={arrow} alt=""/></div>
      <div>ACADEMICS<img src={arrow} alt=""/></div>
      <div>ADMISSION<img src={arrow} alt=""/></div>
      <div>ALUMINI<img src={arrow} alt=""/></div>
      <div>SOCIETY<img src={arrow} alt=""/></div>
      <div>EVENTS<img src={arrow} alt=""/></div>
      <div>INDUSTRY INTERFACE<img src={arrow} alt=""/></div>
      <div>NAAC<img src={arrow} alt=""/></div>
    </nav>
  )
}
