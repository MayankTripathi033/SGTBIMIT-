import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './home.css'
import Welcome from './Welcome'
import ImageCarousel from './ImageCarousel'
import Testimonials from './Testimonials'
import DirectorMsg from './DirectorMsg'
import Placements from './Placements'
import Collaboration from './Collaboration'
import Recruiters from './Recruiters'
import Map from './Map'
import Admission from '../Components/Admission'
import { Header, Navbar, Footer, Loader2 } from '../Components'
import Committees from './Committees'
import { Helmet } from 'react-helmet'

export default function Home() {

  const [isPending, setIsPending] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsPending(false)
    }, 1000)
  }, [])

  return (

    <>
      <Helmet>
        <title>SGTBIMIT | Home</title>
      </Helmet>
      {isPending && <Loader2 />}
      {!isPending && (
        <>
          
          <Header />
          <Navbar />
          <ImageCarousel />
          <Welcome />
          <Testimonials />
          <DirectorMsg />
          <Committees />
          <Placements />
          <Collaboration />
          <Recruiters />
          <Map />
          <Admission />
          <Footer />
        </>
      )
      }
    </>

  )
}
