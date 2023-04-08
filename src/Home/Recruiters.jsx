import React, { useEffect, useState } from 'react'
import useFetch from '../useFetch'
import Loader from '../Components/Loader'
import { Carousel } from 'react-responsive-carousel'
export default function Recruiters() {
  const { data: recruiters, isPending } = useFetch("http://localhost:5000/Recruiters/recruiters_Display")


   let recruitersChunks = []
   let i = 0
   const count = 3
   recruiters && (
     recruiters.forEach((element) => {
       let res = recruiters.slice(i, i + count)
       if (res.length === 0) return
       recruitersChunks.push(res)
       i = i + count
     })
 
   )
   recruitersChunks && console.log(recruitersChunks)



  return (
    <section className='recruiters'>
      <h1 data-aos="fade-right"> OUR RECRUITERS</h1>
      <div className="recruiters-container" id='rec-container'>

        {isPending && <Loader />}

         {recruitersChunks &&
          <Carousel
          
          
          autoPlay={true}
          interval={6000}
          transitionTime={6000}
          infiniteLoop={true}
          showArrows = {false}
          >
            {recruitersChunks.map((recruiters) => {
              return (<div className="recruiters-item">
                {recruiters.map((recruiter) => {
                  return (
                    <div className="recruiter-img">
                      <img src={`http://localhost:5000/Recruiters/Recruiter_Image_Display/${recruiter._id}`} key={recruiter._id} alt="cant load" data-aos="fade-right" />
                    </div>
                  )
                })}
              </div>)
            })}
          </Carousel>
        } 

      </div>
    </section >
  )
}
