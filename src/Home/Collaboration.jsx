import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { CustomArrow, CustomArrowNotActive } from '../Components/Carousel'
import { motion } from 'framer-motion'
export default function Collaboration() {
  const img = require("../images/Sharekhan.jpg")
  const collabs = [
    {
      image: img
    },
    {
      image: img
    },
    {
      image: img
    },
    {
      image: img
    },
    {
      image: img
    },
    {
      image: img
    },
  ]

  let collabsChunks = []
  let i = 0
  const count = 4
  collabs && (

    collabs.forEach(() => {
      let res = collabs.slice(i, i + count)
      if (res.length === 0) return
      collabsChunks.push(res)
      i = i + count
    })
  )
  const [currentS, setCurrentS] = useState(0)
  const handleSlideChange = (index) => {
    setCurrentS(index)
  }
  const total = collabs ? collabsChunks.length : 0
  return (
    <section className='collab'>
      <div className="collab-container">
        <motion.h1
        initial={{
          x: 400
        }}
        whileInView={{
          x: 0
        }}
        transition={{
          duration: 0.5,
          type: 'spring'
        }}
        >
          Collaborations.
        </motion.h1>

        <motion.div 
        className="collab-grid-container"
        initial={{
          x: -400
        }}
        whileInView={{
          x: 0
        }}
        transition={{
          duration: 0.5,
          type: 'spring'
        }}
        >
          <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            onChange={handleSlideChange}
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
            {collabsChunks && collabsChunks.map((collabs, i) => (
              <div className="collab-grid" key={`${i}collabgrid`}>
                {collabs.map((collab, i) => (
                  <div className="collab-img" key={`${i}collabimg`}>
                    <img src={collab.image} alt="" />
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
          <div className="custom-status">
            {currentS + 1} / {total}
          </div>
          <div className="bottom-border"></div>
        </motion.div>

      </div>
    </section>
  )
}
