import React, { useState } from 'react'
import './Vision.css'

export default function Vision() {

  const [mission] =useState([
    "To impart high quality educational content for development of perspective, talented and dynamic students as catalysts of social transformation.",
    "To promote progressive spirit, innovative ideas and entrepreneurial platform.",
    "Our endeavour is to provide all possible support to promote research & development activities.",
    "To create competitive and cooperative environment and prepare the students to meet national and global challenges."
  ]);

  return (
    <div>
      <div className="heading">VISION AND MISSION</div>
      <div className="contents">
        <div className="con">
          <div className="ourv">
            <div className="vh">OUR VISION</div>
            <div className="vv"> To facilitate integrated, secure, competitive and 
            scalable digital learning in the long run by preparing young professionals
            to match the Global Standards of institute-industry interface with 
            entrepreneurial capabilities of accepting new challenges with a holistic 
            concern for a better life, environment and society.</div>
          </div>
          <div className="ourm">
            <div className="mh">OUR MISSION</div>
            <div className="mm">
              {mission.map((mission) =>
                <li>{mission}</li>)}
            </div>
          </div>
        </div>
        <div className="vimage">
            <img src={require("../images/vision.jpg")} alt="cannot load" />
        </div>
      </div>
    </div>
  )
}
