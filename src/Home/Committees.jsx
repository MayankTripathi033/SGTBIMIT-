import React from 'react'

export default function Committees() {
  return (
    <section className = "committees">
      <div className="committees-container">
        <div className="committee-item">
            <img src={require("../images/anti-ragging.png")} alt="cant load" />
            <div className="committee-content">
                <h1>ANTI-RAGGING</h1>
                <p>Ragging is a punishable offence as per Hon'ble Supreme Court order.</p>
            </div>
        </div>
        <div className="committee-item">
            <img src={require("../images/quality-policy.png")} alt="cant load" />
            <div className="committee-content">
                <h1>QUALITY POLICY</h1>
                <p>Top Recruiters having placement drives at SGTBIMIT.</p>
            </div>
        </div>
        <div className="committee-item">
            <img src={require("../images/sexual-harrassment.png")} alt="cant load" />
            <div className="committee-content">
                <h1>SEXUAL HARRASMENT</h1>
                <p></p>
            </div>
        </div>
        <div className="committee-item">
            <img src={require("../images/foeticide.png")} alt="cant load" />
            <div className="committee-content">
                <h1>FEMALE FOETICIDE COMMITTEE</h1>
                <p>Caste Discrimination Complaint.</p>
            </div>
        </div>
      </div>
    </section>
  )
}
