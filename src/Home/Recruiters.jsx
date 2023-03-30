import React from 'react'
import useFetch from '../useFetch'

export default function Recruiters() {
  const {data: recruiters, isPending} = useFetch("http://localhost:5000/Recruiters/recruiters_Display")

  return (
    <section className='recruiters'>
      <div className="recuiters-container">
        <h1 data-aos="fade-right"> OUR RECRUITERS</h1>
        {isPending && <div className="loading"></div> }
        {recruiters && <div className='recruiters-imgs'>
          {recruiters.map((recruiter, i) =>{
            return <img src={`http://localhost:5000/Recruiters/Recruiter_Image_Display/${recruiter._id}`} key={i} alt="cant load"  data-aos="fade-right" data-aos-delay={`${i}00`}/>
          })}
        </div>}
      </div>
    </section>
  )
}
