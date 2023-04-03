import React from 'react'
import './events.css'
import { Header, Navbar, Footer } from '../Components'

export default function Events() {
    return (
        <>
            <Header />
            <Navbar />

            <section className='events-section'>
                <div className="events-container">
                    {[...Array(20)].map(() => (
                        <div className="event-wrapper">
                            <div className="event-img">
                                <img src={require("../images/essay.jpg")} alt="cant load" />
                            </div>
                            <div className="event-content">
                                <h1 className="event-title">
                                    ECO Club organized the essay writing competition on theme of “Eliminating Single Use Plastic”.
                                </h1>
                                <p className="event-note">
                                    On the occasion of "Earth Day", the Eco Club of our College organized an essay writing competition on 26th April 2022. The theme of the essay writing competition was “Eliminating Single-Use Plastic”.
                                </p>

                            </div>

                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    )
}
