import React from 'react'

export default function Header() {
    const logo = require('../images/logo.png')
  return (
    <header>
      <div className="header-top">
        <img src={logo} alt="" className='logo' />
        <div className="header-btns">
            <button className="admission-btn" type="button">CLICK HERE FOR ADMISSIONS</button>
            <button className="student-login-btn" type="button">STUDENT - ERP LOGIN</button>
        </div>
      </div>
      <div className="header-news">
        <marquee behavior="" direction="">News Updates || News Updates || News Updates || News Updates || News Updates || News Updates || News Updates ||</marquee>
      </div>
    </header>
  )
}
