import React from 'react'


export default function Collaboration() {
  const img = require("../images/Sharekhan.jpg")
  return (
    <section className='collab'>
      <div className="block left-block"></div>
      <div className="block right-block"></div>
      <div className="collab-container">
        <h1>COLLABORATIONS</h1>
        <div className="collab-grid">
          <div><img src={img} alt="cant load" /></div>
          <div><img src={img} alt="cant load" /></div>
          <div><img src={img} alt="cant load" /></div>
          <div><img src={img} alt="cant load" /></div>
          <div><img src={img} alt="cant load" /></div>
          <div><img src={img} alt="cant load" /></div>
        </div>
      </div>
    </section>
  )
}
