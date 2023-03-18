import React from 'react'


export default function Collaboration() {

  return (
    <>
      <div className='for-color'>
        <h1 className='collab' data-aos="zoom-in" data-aos-offset="300">COLLABORATIONS</h1>

        <div className='collab-part1' data-aos="fade-down" data-aos-offset="300">

          <div className='collab1'>
            <img src={require("../images/Sharekhan.jpg")} alt="" />
          </div>
          <div className='collab2'>
            <img src={require("../images/Sharekhan.jpg")} alt="" />
          </div>
          <div className='collab3'>
            <img src={require("../images/Sharekhan.jpg")} alt="" />
          </div>
        </div>
        <div className='collab-part2' data-aos="fade-up" data-aos-offset="300">
          <div className='collab4'>
            <img src={require("../images/Sharekhan.jpg")} alt="" />
          </div>
          <div className='collab5'>
            <img src={require("../images/Sharekhan.jpg")} alt="" />
          </div>
          <div className='collab6'>
            <img src={require("../images/Sharekhan.jpg")} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
