import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Welcome() {

  return (
    <section className="welcome"
    >
      <motion.div className="welcome-img"
        initial="hidden"
        animate="visible"
        viewport={{
          once: true
        }}
        transition={{
          type: "spring"
        }}
        variants={{
          visible: {
            scale: 1
          },
          hidden: {
            scale: 0
          },
        }}
      >
        <img src={require("../images/gtbji.png")} alt="" />
      </motion.div>
      <div className='welcome-text'>
        <h1>
          Welcome to SGTBIMIT
        </h1>
        <p>
          SGTBIMIT ascertains, preserves and disseminates knowledge. Since the establishment of SGTBIMIT in 2008, it has aimed to promote excellence in professional education and inspire research and extension work in the emerging areas of higher education in Management, Banking, Insurance and Information Technology. "A" degree level institute, approved by Directorate of Higher Education (Govt of NCT of Delhi) certified by ISO 9001:2015 and affiliated to Guru Gobind Singh Indraprastha University, Delhi. Located in the heart of the city, adjoining Gurudwara Nanak Piao, hardly 1 km away from North Campus (DU) and Model town Metro Station. Ever since its inception, SGTBIMIT has consistently shaped students who have outshined in academics and professional endeavors.

        </p>
        <button className="develop-skills-btn" type="button">

          <Link to="/skills" className="skills-text">
            Develop your skills with SGTBIMIT
          </Link>
          <img src={require("../images/VectorskillsArrow.png")} alt="cant load" className="skill-arrow" />

        </button>
      </div>
    </section>

  )
}
