import React, { useEffect, useState } from 'react'
import useFetch from '../useFetch'
import Loader from '../Components/Loader'
import { Carousel } from 'react-responsive-carousel'
import { CustomArrow, CustomArrowNotActive } from '../Components/Carousel'
export default function Recruiters() {

  const { data: recruiters, isPending } = useFetch("http://localhost:5000/Recruiters/recruiters_Display")


  let recruitersChunks = []
  let i = 0
  const count = 4
  recruiters && (

    recruiters.forEach(() => {
      let res = recruiters.slice(i, i + count)
      if (res.length === 0) return
      recruitersChunks.push(res)
      i = i + count
    })

  )
  const [currentS, setCurrentS] = useState(0)
/*   const [total, setTotal] = useState(0) */
  const handleSlideChange = (index) => {
    setCurrentS(index)
  }
  const total = recruiters ? recruitersChunks.length : 0
  return (
    <section className='recruiters'>
      <h1 data-aos="fade-right">Our Recruiters.</h1>
      <div className="recruiters-container">

        {isPending && <Loader />}

        {recruiters &&
          <Carousel
            onChange={handleSlideChange}
            transitionTime={1000}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              <>
                {hasNext && (
                  <CustomArrow direction={"right"} onClick={onClickHandler} />
                )}
                {!hasNext && (
                  <CustomArrowNotActive direction={"right"} />
                )}
              </>
            )}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              <>
                {hasPrev && (
                  <CustomArrow direction={"left"} onClick={onClickHandler} />
                )}
                {!hasPrev && (
                  <CustomArrowNotActive direction={"left"} />
                )}
              </>
            )}
          >
            {recruitersChunks.map((recruiters) => {
              return (
                <div className="recruiters-item">
                  {recruiters.map((recruiter) => {
                    return (
                      <div className="recruiter-img">
                        <img src={`http://localhost:5000/Recruiters/Recruiter_Image_Display/${recruiter._id}`} key={recruiter._id} alt="cant load" data-aos="fade-right" />

                      </div>
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        }
        <div className="custom-status">
          {currentS + 1} / {total}
        </div>
        <div className="bottom-border"></div>

      </div>
    </section>
  )
}
