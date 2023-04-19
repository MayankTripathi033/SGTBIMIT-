import React, { useEffect } from 'react'
import Admission from './Admission'
import "./components.css"
import useFetch from '../useFetch'
import { Link } from 'react-router-dom'

export default function Header() {
  const { data: notices } = useFetch("http://localhost:5000/Notice/Notice_Data_Display")
  const filteredNotices = notices ? notices.filter((notice)=>(
    notice.Categories === "Important"
  )) : null

  const logo = require('../images/sgtbimit.png')
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
        <div className="logo">
        <img src={logo} alt="" />
        </div>
        
        <div className="clg-heading-wrapper">
          <p className="clg-heading">SRI GURU TEGH BAHADUR INSTITUTE OF MANAGEMENT AND INFORMATION TECHNOLOGY</p>
          <p className="clg-sub-heading">
            (AFFILIATED TO GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY)
          </p>
          <p className="clg-committee">
            (UNDER THE MANAGEMENT OF DELHI SIKH GURUDWARA MANAGEMENT COMMITTEE)
          </p>
        </div>
        <div className="desktop header-btns">
          <button className="admission-btn" type="button">CLICK HERE FOR ADMISSIONS</button>
          <button className="student-login-btn" type="button">STUDENT - ERP LOGIN</button>
        </div>
        <div className="mobile">
          <img src={require("../images/menu.png")} alt="" height={"50px"} className="menu" />
        </div>
      </div>
      <div className="header-news">
        <marquee direction="left">
          {notices && filteredNotices.map((notice)=>(
            <span key={notice._id}>
              <Link to = {`/admission/notices/${notice._id}`}>{` ${notice.Name} ||`}</Link>
            </span>
          ))}
        </marquee>
      </div>
    </header>
  )
}
