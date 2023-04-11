import React from 'react'
import './placements.css'
import { Header, Navbar, Footer, Loader } from '../../Components'

export default function Placements() {
    return (
        <>
            <Header />
            <Navbar />
            <section className='placement-cell'>
                <div className="placement-cell-container">
                    <h1>
                        Placements Cell
                    </h1>
                </div>
            </section>
            <Footer />
        </>
    )
}
