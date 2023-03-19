import React from 'react'


export default function Collaboration() {
  const img = require("../images/Sharekhan.jpg")
  return (
    <section className='collab'>
        <div className="collab-container">
          <h1>Collaborations</h1>
          <div className="collab-grid">
            <img src={img} alt="cant load" />
            <img src={img} alt="cant load" />
            <img src={img} alt="cant load" />
            <img src={img} alt="cant load" />
            <img src={img} alt="cant load" />
            <img src={img} alt="cant load" />
          </div>
        </div>
    </section>
  )
}
