import React from 'react'
import useFetch from '../useFetch'
import { Carousel } from 'react-responsive-carousel'
import './adminis.css'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
export default function AdminisCarousel() {
  const { data: adminisArray, isPending } = useFetch("http://localhost:5000/Administration/Administration_Display")

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <section className='adminis-section'>
        {isPending && <div className="loading">Loading...</div>}
        <Carousel
          infiniteLoop={true}
          interval={4000}
          emulateTouch={true}
          className='adminis-carousel'
          autoPlay={true}

        >
          {adminisArray && adminisArray.map((adminis) => (
            <div className="adminis" key={adminis._id}>
              <img src={`http://localhost:5000${adminis.image}`} alt="cant load" className='adminis-img' />
              <h2 className="adminis-heading" >{adminis.name}
                <strong className='position'> {adminis.position}</strong>
              </h2>
              <strong className="short-note">WAHEGURU JI KA KHALSA, WAHEGURU JI KI FATEH!!
                <strong>{adminis.shortNote}</strong>
              </strong>
              <p className="long-note"> {adminis.longNote} </p>
            </div>
          ))}
        </Carousel>
      </section>
      <Footer></Footer>
    </>
  )
}
