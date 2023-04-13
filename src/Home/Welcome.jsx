import React from 'react'
import { Link } from 'react-router-dom'
export default function Welcome() {

  return (
    <section className="welcome">
      {/* <img src={require("../images/gurudwara.png")} className="welcome-bg"></img> */}
      <div className="welcome-img">
        <img src={require("../images/gtbji.png")} alt=""/>
      </div>
      <div className='welcome-text'>
        <h1>
          Welcome to SGTBIMIT
        </h1>
        <p>
          SGTBIMIT ascertains, preserves and disseminates knowledge. Since the establishment of SGTBIMIT in 2008, it has aimed to promote excellence in professional education and inspire research and extension work in the emerging areas of higher education in Management, Banking, Insurance and Information Technology. "A" degree level institute, approved by Directorate of Higher Education (Govt of NCT of Delhi) certified by ISO 9001:2015 and affiliated to Guru Gobind Singh Indraprastha University, Delhi. Located in the heart of the city, adjoining Gurudwara Nanak Piao, hardly 1 km away from North Campus (DU) and Model town Metro Station. Ever since its inception, SGTBIMIT has consistently shaped students who have outshined in academics and professional endeavors.

        </p>
        <button className="develop-skills-btn" type="button">

          <div className="skills-text">
            Develop your skills with SGTBIMIT
          </div>
          <img src={require("../images/VectorskillsArrow.png")} alt="cant load" className="skill-arrow" />

        </button>
        {/* <button className="learn-more-btn" type="button">
          <Link to="/about/governing-body">Learn More</Link>
        </button> */}
      </div>
    </section>

  )
}
