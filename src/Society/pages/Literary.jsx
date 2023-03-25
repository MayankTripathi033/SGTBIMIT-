import React from 'react'
import '../society.css'
import NavBar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

export default function Literary() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <div className='society'>
        <h1>LITERARY SOCIETY</h1>
        <img src={require("../../images/Literary.jpg")} alt="cant load" data-aos="fade-up" />
        <p>The Debating Society is an egalitarian society dedicated to intellectual growth, thought provocation and public speaking. We seek to present a passionate debating environment on the foundations of free speech and critical thought and provide a politically and religiously neutral environment to discuss world issues. The society provides members and non-members an opportunity to indulge in intellectual discourse and acts as a platform for the emergence and fusion of diverse opinions.Debates, Extempore, On the Spot Speech Competition, and Quiz, etc. are some of the events organized under Literary Society.</p>
      </div>
      <Footer></Footer>
    </>
  )
}
