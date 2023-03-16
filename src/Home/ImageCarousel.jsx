import React from 'react'
import { Carousel } from 'react-responsive-carousel'

export default function ImageCarousel() {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        emulateTouch={true}
        >

        <div className="carousel-item">
          <img src={require("../images/1.png")} alt="carousel-1" />
        </div>
        <div className="carousel-item">
          <img src={require("../images/2.png")} alt="carousel-2" />
        </div>
        <div className="carousel-item">
          <img src={require("../images/3.png")} alt="carousel-2" />
        </div>
      </Carousel>
    </div>
  )
}
