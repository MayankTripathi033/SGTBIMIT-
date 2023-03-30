import React from 'react'
import '../society.css'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

export default function SwachhBharat() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='society'>
        <h1>SWACHH BHARAT ABHIYAN</h1>
        <img src={require("../../images/swachbharat.jpg")}  alt="cant load" data-aos="fade-up" />
        <p>
          In response to the call given by the Honourable Prime Minister Shri Narendra Modi, the Swachh Bharat Abhiyan campaing was launched at Sri Guru Tegh Bahadur Institute Of Management & Information Technology by the  Director Dr.Navneet Kaur & an enthusiastic bunch of students and faculty members became a part of this campaing on February 23, 2017. Massive awareness drive was undertaken through posters and word of mouth in the college.

          On the 23rd morning, alot of students actively participated in this campaing and they personally cleaned every nook and corner of the college. Special attention went into ensuring cleanliness of areas like the canteen, library, toilets and the college lawns which are the favourite haunts of students and therefore more prone to littering. Apart from cleanliness drive within premises of the institution, the nearby areas & roads were also cleaned by the students and staff members.
        </p>
      </div>
      <Footer />
    </>
  )
}
