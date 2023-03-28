import React from 'react'
import { calInfo } from './Calinfo'
import './academiccal.css'
import Navbar from '../../Components/Navbar.jsx'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'

export default function AcademicCal() {
    return (<>
        <Header />
        <Navbar />
        <section className='acad-cal'>
            <h1>ACADEMIC CALENDAR</h1>
            <div className="cal-grid heading">
                <div className="cal-date">
                    PROPOSED DATE
                </div>
                <div className="cal-event">
                    EVENT
                </div>
            </div>
            {calInfo.map((cal) => {
                return (<div className="cal-grid">
                    <div className="cal-date">
                        {cal.date}

                    </div>
                    <div className="cal-event">
                        {cal.event}
                    </div>
                </div>)
            })}



        </section>
        <Footer />
    </>
    )
}
