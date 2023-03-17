import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Welcome from './Welcome'
import ImageCarousel from './ImageCarousel'
import Testimonials from './Testimonials'
import DirectorMsg from './DirectorMsg'

export default function Home() {
  


  return (
    <>
      <ImageCarousel />
      <Welcome />
      <Testimonials />
      <DirectorMsg />
    </>
  )
}
