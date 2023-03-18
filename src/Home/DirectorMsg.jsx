import React from 'react'

export default function DirectorMsg() {
  return (
    <div className="director-msg">
      <div className="bg-img"></div>
      <div className='director-container'>
        <h1 className='director-heading'>DIRECTOR'S MESSAGE</h1>
        <img src={require("../images/director.jpg")} alt="" />
        <h1 className='wmk'>WAHEGURU JI KA KHALSA, WAHEGURU JI KI FATEH!!</h1>
        <p className='dr-short-note'> “Those who walk on the path of truth shall be praised throughout the world”<br />
        <b>Sri Guru Granth Sahib Ji</b></p>
        <p className="dr-long-note">We at Sri Guru Tegh Bahadur Institute of Management & Information Technology endeavor to follow Gurbani in letter and spirit.</p>
        <a href="/">READ MORE</a>
      </div>



    </div>



  )
}
