import React from 'react'

export default function Welcome() {

  return (
    <section className="welcome">
      <div className="welcome-wrapper">
        <img src="https://assets.nicepagecdn.com/c86f032b/4353070/images/guruteghbahadur.jpg" alt="" className='welcome-img' data-aos="flip-right" data-aos-offset="300" />
        <div className='welcome-text' data-aos="flip-left" data-aos-offset="300">
          <h1>
            Welcome to SGTBIMIT
          </h1>
          <p>
            SGTBIMIT ascertains, preserves and disseminates knowledge. Since the establishment of SGTBIMIT in 2008, it has aimed to promote excellence in professional education and inspire research and extension work in the emerging areas of higher education in Management, Banking, Insurance and Information Technology. "A" degree level institute, approved by Directorate of Higher Education (Govt of NCT of Delhi) certified by ISO 9001:2015 and affiliated to Guru Gobind Singh Indraprastha University, Delhi. Located in the heart of the city, adjoining Gurudwara Nanak Piao, hardly 1 km away from North Campus (DU) and Model town Metro Station. Ever since its inception, SGTBIMIT has consistently shaped students who have outshined in academics and professional endeavors.

          </p>
          <button className="develop-skills-btn" type="button" data-aos="zoom-in" data-aos-offset="300">Develop your skills with SGTBIMIT</button>
          <button className="learn-more-btn" type="button">
            <a href="/">Learn More</a>
          </button>
        </div>
      </div>
    </section>

  )
}
