import React from 'react'
import { Link } from 'react-router-dom'
export default function DirectorMsg() {


  return (
    <section className="director-msg">
      <h1 className='director-heading' data-aos="zoom-in" data-aos-offset="300" data-aos-duration="3000">
        Director's Note.
      </h1>
      <div className='director-container'>
        <img src={require("../images/quote.png")} alt="" className="dir-quote" />
        <p data-aos="zoom-in" className='dr-note'>
          “Those who walk on the path of truth shall be praised throughout the world”
          <b data-aos="zoom-out" className='dir-bold'>
            &nbsp; Sri Guru Granth Sahib Ji &nbsp;
          </b>
           We at Sri Guru Tegh Bahadur Institute of Management & Information Technology endeavor to follow Gurbani in letter and spirit. The management and staff of SGTBIMIT work on a mission and treat students with utmost love & compassion.
        </p>
        <div className="director-position">
          Prof. Dr. Navneet Kaur - Director, SGTBIMIT
        </div>
        <div className="director-img">
          <img src={require("../images/director.jpg")} alt="" data-aos="fade-up" />

        </div>
      </div>
    </section>
  )
}
