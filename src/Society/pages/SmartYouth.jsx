import React from 'react'
import '../society.css'
import NavBar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

export default function SmartYouth() {
  return (<>
    <Header></Header>
    <NavBar></NavBar>
    <div className='society'>
      <h1>SMART YOUTH SOCIETY</h1>
      <img src={require("../../images/smartyouth.png")} alt="cant load" data-aos="fade-up" />
      <h2>“Anger at your bay: Control Your Anger before It Controls You”.</h2>
      <p>Adolescent years is a period of the transitional phase where rapid psychological and physiological changes occurs in the body. These changes may lead to creating disequilibrium in the emotional level of an individual. The demand of this crucial fragile stage and by keeping in mind the trend of the competitive era this society has been established.College years play a vital role in establishing a career which is considered the need of this stage even it is essential for the holistic development and their survival in this competitive world. Various workshops and seminars are conducted by this Society with an aim to focus on personal analysis to bring alignment by understanding how reflection informs personal growth and to discover oneself. </p>
    </div>
    <Footer></Footer>
  </>
  )
}
