import React, { useEffect } from 'react'
import Admission from './Admission'
import "./components.css"
import logo from '../images/sgtbimit.png'
import { FiLogIn } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'

export default function Header() {
  useEffect(() => {
    document.querySelector(".admission-btn").addEventListener("click", (e) => {
      document.querySelector(".admission-dialog").classList.add("show")
      document.querySelector(".admission-bg").classList.add("show-bg")
    })
  }, [])
  return (


    <header>
      <Admission />
      <div className="header-top">
        <div className="desktop header-btns">
          <button className="admission-btn" type="button">
            <SiGooglescholar />
            <span>Enroll for Admissions</span>
          </button>
        </div>

        <div className="clg-heading-wrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div>
          <p className="clg-heading">SRI GURU TEGH BAHADUR INSTITUTE OF MANAGEMENT AND INFORMATION TECHNOLOGY</p>
          <p className="clg-sub-heading">
            (AFFILIATED TO GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY)
          </p>
          <p className="clg-committee">
            (UNDER THE MANAGEMENT OF DELHI SIKH GURUDWARA MANAGEMENT COMMITTEE)
          </p>
          </div>
        </div>
        <div className="desktop header-btns">
          <button className="admission-btn" type="button">
            <FiLogIn />
            <span>Student - ERP Login</span>
          </button>
        </div>
        <div className="mobile">
          <img src={require("../images/menu.png")} alt="" height={"50px"} className="menu" />
        </div>
      </div>
      <div className="header-news">
        <marquee direction="left">News Updates || News Updates || News Updates || News Updates || News Updates || News Updates || News Updates ||</marquee>
      </div>
    </header>
  )
}
