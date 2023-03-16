import React from 'react'
import useFetch from '../useFetch'
import { Carousel } from 'react-responsive-carousel'

export default function AdminisCarousel() {
  const adminisArray = useFetch("http://localhost:5000/Administration/Administration_Display")

  return (

    <section className='adminis-section'>
      <Carousel
        infiniteLoop={true}
        emulateTouch={true}
        className='adminis-carousel' 

      >
        {adminisArray && adminisArray.map((adminis) => (
          <div className="adminis">
            <img src={adminis.image} alt="cant load" />
            <h2 className="adminis-heading" key={adminis._id}>{adminis.name}
              <strong className='position'> {adminis.position}
              </strong>
            </h2>
            <strong className="short-note">WAHEGURU JI KA KHALSA, WAHEGURU JI KI FATEH!!
              <strong>{adminis.shortNote}</strong>
            </strong>


            <p className="long-note"> {adminis.longNote} </p>
          </div>
        ))}
      </Carousel>
    </section>

  )
}
