import React, { useEffect, useState } from 'react'
import useFetch from '../useFetch'
import Loader from '../Components/Loader'
import { Carousel } from 'react-responsive-carousel'
import Slider from 'react-slick'
export default function Recruiters() {
  const { data: recruiters, isPending } = useFetch("http://localhost:5000/Recruiters/recruiters_Display")


  let recruitersChunks = []
  let i = 0
  const count = 3
  recruiters && (

    recruiters.forEach(() => {
      let res = recruiters.slice(i, i + count)
      if (res.length === 0) return
      recruitersChunks.push(res)
      i = i + count
    })

  )

  return (
    <section className='recruiters'>
      <h1 data-aos="fade-right"> OUR RECRUITERS</h1>
      <div className="recruiters-container" id='rec-container'>

        {isPending && <Loader />}

        {recruitersChunks &&
          <Carousel 
          autoPlay = {true}
          interval={4000}
          transitionTime={1000}
          >
            {recruitersChunks.map((recruiters) => {
              return (
                <div>
                  <div className="recruiters-item">
                    {recruiters.map((recruiter) => {
                      return (
                        <div className="recruiter-img">
                          <img src={`http://localhost:5000/Recruiters/Recruiter_Image_Display/${recruiter._id}`} key={recruiter._id} alt="cant load" data-aos="fade-right" />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        }

      </div>
    </section >
  )
}
