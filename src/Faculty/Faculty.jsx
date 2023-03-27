import React from 'react'
import './faculty.css'
import useFetch from '../useFetch'
import NavBar from '../Components/Navbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
export default function Faculty() {
    const { data: facultyData, isPending } = useFetch("http://localhost:5000/Faculty/Faculty_Display")

    return (
        <>
            <Header></Header>
            <NavBar></NavBar>
            <section className='faculty'>
                <div className="faculty-container">
                    <h1 className="faculty-title">Core Faculty</h1>
                    <p className="faculty-content">SGTBIMIT has very diversified and experienced faculties of their domains that works day in day out for their students to make them industry ready</p>
                    <div className="faculty-grid">
                        {[...Array(24)].map((x, i) => {
                            return (
                                <div className="faculty-card">
                                    <img src={require("../images/boy.png")} alt="cant load" />
                                    <h2 className="name">Jeffrey Brown</h2>
                                    <p className="position">creative leader</p>
                                    <p className="note">Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}
