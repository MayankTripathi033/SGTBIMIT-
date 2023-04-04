import React from 'react'
import './testAl.css'
import { Header, Navbar, Footer } from '../../Components'


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
                                <img src={""}className="card-img" alt='placeholder for images' />
                                <div className="card-info">
                                    <p className="text-body">I put some random interesting text here of more than 2 lines.</p>
                                    <p className="text-title">Author</p>
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