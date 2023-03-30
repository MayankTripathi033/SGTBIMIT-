import React from 'react'
import './testAl.css'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'


export default function TestimonialsAL() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>

            <section className='test-al-section'>

                <div className="t-grid">
                    {[...Array(12)].map((x, i) => {
                        return (
                            <div className="t-card">
                                <div className="card-img"></div>
                                <div className="card-info">
                                    <p className="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?</p>
                                    <p className="text-title">Autor</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </section>

            <Footer></Footer>
        </>
    )
}