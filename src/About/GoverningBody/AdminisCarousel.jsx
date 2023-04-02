import React, { useEffect } from 'react'
import useFetch from '../../useFetch'
import { Carousel } from 'react-responsive-carousel'
import './adminis.css'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Loader from '../../Components/Loader'
export default function AdminisCarousel() {
  const { data: adminisArray, isPending } = useFetch("http://localhost:5000/Administration/Administration_Display")

  useEffect(() => {
    document.querySelector(".about-nav-link").classList.remove("dropdown-active-item")
  }, [])

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <section className='adminis-section'>


        {isPending && <Loader />}
        <Carousel
          infiniteLoop={true}
          interval={4000}
          className='adminis-carousel'
          autoPlay={true}
        >
          {adminisArray && adminisArray.map((adminis) => (
            <div className="adminis" key={adminis._id}>
              <img src={`http://localhost:5000/Administration/AdministrationImageDisplay/${adminis._id}`} alt="cant load" className='adminis-img' />
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