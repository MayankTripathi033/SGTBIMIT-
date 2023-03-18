import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Welcome from './Welcome'
import ImageCarousel from './ImageCarousel'
import Testimonials from './Testimonials'
import DirectorMsg from './DirectorMsg'
import Placements from './Placements'
import Collaboration from './Collaboration'
import Recruiters from './Recruiters'
import Map from './Map'
export default function Home() {
  


  return (
    <>
      <ImageCarousel />
      <Welcome />
      <Testimonials />
      <DirectorMsg />
      <Placements />
      <Collaboration />
      <Recruiters />
      <Map />
      
    </>
  )
}
