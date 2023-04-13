import React from 'react'

export default function Committees() {
  const committees = [
    {
      name: "ANTI-RAGGING",
      image: require("../images/anti-ragging.png"),
      pdf: "../Assets/anti_ragging_poster.pdf",
      detail: "Ragging is a punishable offence as per Hon'ble Supreme Court order."
    },
    {
      name: "QUALITY POLICY",
      image: require("../images/quality-policy.png"),
      pdf: "../Assets/anti_ragging_poster.pdf",
      detail: "Top Recruiters having placement drives at SGTBIMIT."
    },
    {
      name: "SEXUAL HARRASMENT",
      image: require("../images/sexual-harrassment.png"),
      pdf: "../Assets/anti_ragging_poster.pdf",
      detail: "Ragging is a punishable offence as per Hon'ble Supreme Court order."
    },
    {
      name: "FEMALE FOETICIDE COMMITTEE",
      image: require("../images/foeticide.png"),
      pdf: "../Assets/anti_ragging_poster.pdf",
      detail: "Caste Discrimination Complaint."
    }

  ]
  return (
    <section className="committees">
      <div className="committees-container" >
        {committees.map(committee => (
          <div className="committee-item" >
            <div className="committee-img">
              <img src={committee.image} alt="cant load" />
            </div>
            <a href={committee.pdf} download>
              <img src={require("../images/pdf-icon.png")} alt="" />
              <span>Download PDF</span>
            </a>
            <div className="committee-content">
              <h1>
                {committee.name}
              </h1>
              <p>
                {committee.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
