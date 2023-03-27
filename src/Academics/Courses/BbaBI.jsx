import React from 'react'
import './courses.css'
import Navbar from '../../Components/Navbar'
import AdditionalDiploma from './AdditionalDiploma'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'

export default function BbaBI() {
  return (
  <>
    <Header />
    <Navbar />
    <div className='courses'>
    <img src='' alt="cant load" data-aos="fade-up" />
      <h1>BACHELORS OF BUSINESS ADMINISTRATION (BANKING & INSURANCE)</h1>
      <p>
      A three-year full-time degree program in Bachelor of Business Administration 
      (Banking and Insurance) is presented by Sri Guru Tegh Bahadur Institute of 
      Management and Information Technology and is accredited by GGSIP University. 
      It seeks to help students gain fundamental expertise in important facets of 
      business management. It covers many business-related topics, including how to 
      communicate, analyse situations, present one's own viewpoints in front of a 
      large audience, make decisions using both quantitative and qualitative factors, 
      and create a comprehensive understanding of the various business environments' 
      functional domains. According to the curriculum, students participate in 
      internships or summer training programs to gain practical experience working 
      on real-world projects.
      Throughout the course of its three years, this banking and insurance curriculum covers 
      a wide range of topics, including IT (Information Technology), computer applications, 
      accounting, economics, banking operations, Treasury operations, investment banking, 
      rural finance, insurance, and loans. Six semesters make up the curriculum, of which 
      four are shared by all students and the remaining two are dependent on their chosen speciality. 
      The course will also give the students the opportunity to use cutting-edge methods to manage 
      banking-related tasks and deliver outcomes quickly. Graduates with a BBA in Banking and 
      Insurance can find employment in a wide range of industries and occupations. The majority 
      of candidates may find employment through government banks.
      Yet in order to apply for a post, they must forego a common position front exam. 
      Applicants for MBA or PGDM programmes in banking and insurance should be highly motivated 
      and have strong communication skills. Also, you may make a tonne of money with this degree. 
      Starting out is simple.
      </p>
      <AdditionalDiploma />
    </div>
    <Footer />
    </>
  )
}
