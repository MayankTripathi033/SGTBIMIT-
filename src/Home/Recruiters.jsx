import React from 'react'

export default function Recruiters() {
  return (
    <>
      <h1 className='recr-heading' data-aos="fade-left" data-aos-offset="300"> OUR RECRUITERS</h1>
      <div className='recruiters' data-aos="fade-right" data-aos-offset="300">
        <img src={require("../images/idbi.jpg")} alt="" />
        <img src={require("../images/Sharekhan.jpg")} alt="" />
        <img src={require("../images/firstnaukri.jpg")} alt="" />
      </div>
    </>
  )
}
