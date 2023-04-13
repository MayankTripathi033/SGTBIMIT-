import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { CustomArrow, CustomArrowNotActive } from '../Components/Carousel'
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
    const handleSlideChange = (index)=>{
      setCurrentS(index)
    }
    const total = collabs ? collabsChunks.length : 0
  return (
    <section className='collab'>
      <div className="collab-container">
        <h1>Collaborations.</h1>

        <div className="collab-grid-container">
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
            {collabsChunks && collabsChunks.map(collabs => (
              <div className="collab-grid">
                {collabs.map(collab => (
                  <div className="collab-img">
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
        </div>

      </div>
    </section>
  )
}
