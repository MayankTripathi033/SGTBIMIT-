import React from 'react'
import './courses.css'
import AdditionalDiploma from './AdditionalDiploma'
import Navbar from '../../Components/Navbar.jsx'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'

export default function BbaBI() {
  return (
  <>
    <Header></Header>
    <Navbar></Navbar>
    <div className='courses'>
    <img src='' alt="cant load" data-aos="fade-up" />
      <h1>BACHELORS OF BUSINESS ADMINISTRATION (BANKING & INSURANCE)</h1>
      <p>Bachelor of Computer Applications (BCA) at Sri Guruteg Bahadur Institute of Management and Information Technology is a three years full-time degree course affiliated to GGSIP University. This course is designed and structured with the intent to provide our students with a dynamically stimulating environment, where the students can get transformed into highly skilled IT specialists. The curriculum has been designed to give the students an in-depth knowledge of various subjects related to Information Technology along with the basic concepts of management.The objective of the BCA Program at SGTBIMIT is to produce outstanding IT professionals who can apply the theoretical knowledge into practice in the real world and develop stand-alone live projects themselves. The approach is more practical by the virtue of various value addition Labs and Clubs apart from the classroom studies.The evolution of teaching pedagogy applied at SGTBIMIT makes the curriculum more dynamic as it incorporates not just learning through lectures but also applying the concepts with the help of Role Plays, Case Studies and other creative exercises.This undergraduate program equips the students with an in-depth understanding of technical concepts coupled with intensive industry exposure. The course curriculum is designed after a deep analysis of the requisitions from the industry stakeholders and focusing on the industry expectations from IT professionals. The Program also offers tremendous flexibility and learning opportunities through a credit-based approach.The salient features of the program include an emphasis on enhancing the students’ soft skills and providing them with optimum industry interaction through varied initiatives.</p>


      <AdditionalDiploma />

    </div>
    <Footer></Footer>
    </>
    )
}
