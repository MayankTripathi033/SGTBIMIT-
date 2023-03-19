import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  const arrow = require("../images/down.png")


  return (
    <nav>
      <NavLink to="/" className='nav-item'>HOME</NavLink>
      <div className="nav-item">
      <NavLink to="/about"> ABOUT US</NavLink><img src={arrow} alt="" />
        <div className="dropdown about-dropdown">
          <NavLink to="about/governing-body" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">GOVERNING BODY</div>
          </NavLink>
          <NavLink to="about" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">ABOUT SGTBIMIT</div>
          </NavLink>
          <NavLink to="about/vission-and-mission" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">VISSION AND MISSION</div>
          </NavLink>
        </div>
      
      </div>
      <div className="nav-item">
      <NavLink to="/academics">ACADEMICS</NavLink><img src={arrow} alt="" />
        <div className="dropdown about-dropdown">
          <NavLink to="academics/courses" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">COURSES</div>
          </NavLink>
          <NavLink to="academics/examinations" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">EXAMINATIONS</div>
          </NavLink>
          <NavLink to="academics/prev-year-papers" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">PREVIOUS YEAR PAPERS</div>
          </NavLink>
          <NavLink to="academics/syllabus" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">SYLLABUS</div>
          </NavLink>
          <NavLink to="academics/academic-calender" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">ACADEMIC CALENDAR</div>
          </NavLink>
          <NavLink to="academics/e-resources" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">E-RESOURCES</div>
          </NavLink>
          <NavLink to="academics/co-po-mapping" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">CO-PO MAPPING</div>
          </NavLink>
          <NavLink to="academics/research" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">RESEARCH</div>
          </NavLink>
          <NavLink to="academics/faculty" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">FACULTY MEMBERS</div>
          </NavLink>
        </div>
      
      </div>
      <div className="nav-item">
      <NavLink to="/admission">ADMISSION</NavLink><img src={arrow} alt="" />
        <div className="dropdown about-dropdown">
          <NavLink to="admission/governing-body" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">FEES</div>
          </NavLink>
          <NavLink to="admission/courses-eligibility" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">COURSES ELIGIBILITY</div>
          </NavLink>
          <NavLink to="admission/notices" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">NOTICES</div>
          </NavLink>
        </div>
      
      </div>
      <div className="nav-item">
      <NavLink to="/alumini">ALUMINI</NavLink><img src={arrow} alt="" />
        <div className="dropdown about-dropdown">
          <NavLink to="alumini/alumini-meet" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">ALUMINI MEET</div>
          </NavLink>
          <NavLink to="alumini/testimonials" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">TESTIMONIALS</div>
          </NavLink>
          <NavLink to="alumini/gallery" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">GALLERY</div>
          </NavLink>
          <NavLink to="alumini/registration" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">REGISTRATION</div>
          </NavLink>
        </div>
      
      </div>
      <div className="nav-item">
      <NavLink to="/society">SOCIETY</NavLink><img src={arrow} alt="" />
        <div className="dropdown about-dropdown">
          <NavLink to="society/nss-cell" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">NSS CELL</div>
          </NavLink>
          <NavLink to="society/literary" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">LITERARY SOCIETY</div>
          </NavLink>
          <NavLink to="society/fine-art" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">FINE ART SOCIETY</div>
          </NavLink>
          <NavLink to="society/cultural" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">CULTURAL SOCIETY</div>
          </NavLink>
          <NavLink to="society/smart-youth" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">SMART YOUTH SOCIETY</div>
          </NavLink>
          <NavLink to="society/divinity" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">DIVINITY SOCIETY</div>
          </NavLink>
          <NavLink to="society/soch" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">SOCH - THE DRAMATIC SOCIETY</div>
          </NavLink>
          <NavLink to="society/saarang" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">SAARANG MUSIC SOCIETY</div>
          </NavLink>
          <NavLink to="society/eco-club" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">ECO CLUB</div>
          </NavLink>
          <NavLink to="society/swachh-bharat" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">SWACHH BHARAT ABHIYAAN</div>
          </NavLink>
        </div>
      
      </div>
      <div className="nav-item">
      <NavLink to="/events">EVENTS</NavLink><img src={arrow} alt="" />
        <div className="dropdown about-dropdown">
          <NavLink to="events/past" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">PAST EVENTS</div>
          </NavLink>
          <NavLink to="events/upcoming" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">UPCOMING EVENTS</div>
          </NavLink>
          <NavLink to="events/past" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">GALLERY</div>
          </NavLink>
        </div>
      
      </div>
      <div className="nav-item">
      <NavLink to="/industry-interface">INDUSTRY INTERFACE</NavLink><img src={arrow} alt="" />
        <div className="dropdown about-dropdown">
          <NavLink to="industry-interface/industrial-visit"  className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">INDUSTRIAL VISIT</div>
          </NavLink>
          <NavLink to="industry-interface/placements"  className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">PLACEMENTS</div>
          </NavLink>
          <NavLink to="industry-interface/summer-internship"  className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">SUMMER INTERNSHIP</div>
          </NavLink>
          <NavLink to="industry-interface/corporate-speak"  className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">CORPORATE SPEAK</div>
          </NavLink>
        </div>
      
      </div>
      <div className="nav-item">
      <NavLink to="/naac"> ABOUT US</NavLink><img src={arrow} alt="" />
        <div className="dropdown about-dropdown">
          <NavLink to="naac/r&d" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">R&D</div>
          </NavLink>
          <NavLink to="naac/iqac" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">IQAC</div>
          </NavLink>
          <NavLink to="naac/student-welfare" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">STUDENT WELFARE</div>
          </NavLink>
          <NavLink to="naac/edic" className={({isActive})=>isActive? 'dropdown-active-item' : 'non-active'}>
            <div className="dropdown-item">EDIC</div>
          </NavLink>
        </div>
      
      </div>
    </nav>
  )
}
