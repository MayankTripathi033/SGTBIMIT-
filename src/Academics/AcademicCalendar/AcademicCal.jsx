import React from 'react'
import './academiccal.css'
import { Header, Navbar, Footer, Loader } from '../../Components'
import useFetch from '../../useFetch'

export default function AcademicCal() {
    const { data: calendar, isPending } = useFetch("http://localhost:5000/Calendar/CalendarDisplay")
    console.log(calendar && calendar)

    return (
        <>
            <Header />
            <Navbar />
            {isPending && <Loader />}
            <section className='acad-cal'>
                <h1>Academic Calendar</h1>
                <div className="cal-container">
                    <div className="cal-grid heading">
                        <div className="cal-date">
                            Proposed Date
                        </div>
                        <div className="cal-event">
                            Event
                        </div>
                    </div>
                    {calendar && calendar.map((cal) => {
                        return (
                            <div className="cal-grid">
                                <div className="cal-date">
                                    {cal.Date}

                                </div>
                                <div className="cal-event">
                                    {cal.Event}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <Footer />
        </>
    )
}
