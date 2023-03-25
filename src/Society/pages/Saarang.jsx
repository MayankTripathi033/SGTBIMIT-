import React from 'react'
import '../society.css'
import NavBar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

export default function Saarang() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <div className='society'>
        <h1>SAARANG MUSIC SOCIETY</h1>
        <img src='' alt="cant load" data-aos="fade-up" />
        <h2>“Music is life that’s why our heart has beats”</h2>
        <p> <b> Where word’s fails, MUSIC Speaks……………</b> <br />

          Our institution believes in nurturing all aspects of a student’s life & in order to ensure this we took a step forward by establishing SAARANG, the music society which boasts of having its own band. This initiative has encouraged students’ participation in various competitive events. The members of this group have laid the foundation of a legacy by bringing laurels to the institution. It provides a platform for students to showcase their musical talents and interests. Different musical events are organized and special training is also given to the students for learning classical music.
        </p>
      </div>
      <Footer></Footer>
    </>
  )
}
