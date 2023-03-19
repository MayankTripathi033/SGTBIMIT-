import React from 'react'


export default function Collaboration() {
  const img = require("../images/Sharekhan.jpg")
  return (
    <section className='collab'>
        <div className="collab-container">
          <h1>Collaborations</h1>
          <div className="collab-grid">
            <div><img src={img} alt="cant load"/></div>
            <div><img src={img} alt="cant load"/></div>
            <div><img src={img} alt="cant load"/></div>
            <div><img src={img} alt="cant load"/></div>
            <div><img src={img} alt="cant load"/></div>
            <div><img src={img} alt="cant load"/></div>
          </div>
        </div>
    </section>
  )
}
