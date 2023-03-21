import React from 'react'
import "./components.css"


export default function Header() {
    const logo = require('../images/logo.png')
  return (
    <header>
      <div className="header-top">
        <img src={logo} alt="" className='logo' />
        <div className="desktop header-btns">
            <button className="admission-btn" type="button">CLICK HERE FOR ADMISSIONS</button>
            <button className="student-login-btn" type="button">STUDENT - ERP LOGIN</button>
        </div>
        <div className="mobile">
          <img src={require("../images/menu.png")} alt="" height={"50px"} className="menu"/>
        </div>
      </div>
      <div className="header-news">
        <marquee direction="left">News Updates || News Updates || News Updates || News Updates || News Updates || News Updates || News Updates ||</marquee>
      </div>
    </header>
  )
}
