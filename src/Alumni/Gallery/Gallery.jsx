import React, { useState } from 'react'
import './gallery.css'
import { Header, Navbar, Footer, Loader } from '../../Components'
import { Carousel } from 'react-responsive-carousel'

export default function Gallery() {
    const [isCarouselActive, setIsCarouselActive] = useState(false)
    return (
        <>
            <Header />
            <Navbar />
            <section className='gallery-section'>
                <div className="head1">GALLERY</div>
                <div className="gallery-box">
                    {[...Array(9)].map((x, i) => (
                        <>
                            <div className="gallery-box1" onClick={() => { setIsCarouselActive(true) }}>
                                <img src={require("../../images/p1.jpg")} alt="infra" className="pic" />
                                <p className="text">Infra</p>
                            </div>
                            {isCarouselActive && (
                                <section className="gallery-carousel-section">
                                    <div className="gallery-carousel-container">
                                        <img src={require("../../images/cancel.png")} className="carousel-close-btn" onClick={() => setIsCarouselActive(false)} />
                                        <Carousel>
                                            {[...Array(6)].map((x, i) => (
                                                <div className="gallery-carousel-item">
                                                    <img src={require("../../images/p1.jpg")} alt="infra" />
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                </section>
                            )}
                        </>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}
