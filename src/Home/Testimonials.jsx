import Aos from 'aos'
import React from 'react'

export default function Testimonials() {
    Aos.init({
        startEvent: 'load'
    })
    return(

    <>
    <h1 className='t-heading'>TESTIMONIALS</h1>
    <div className="test">
        <div className="card" data-aos="zoom-in-up" data-aos-offset="300">
            <h1>Himanshu Upadhyay</h1>
            <p>"SGTBIMIT helps students excel in studies as well as extra curricular activities which includes sports , divinity society , placement cells etc."</p>
        </div>
        <div className="card card-2" data-aos="zoom-in-up" data-aos-delay="100" data-aos-offset="300">
            <h1>Himanshu Upadhyay</h1>
            <p>"SGTBIMIT helps students excel in studies as well as extra curricular activities which includes sports , divinity society , placement cells etc."</p>
        </div>
        <div className="card" data-aos="zoom-in-up" data-aos-delay="200" data-aos-offset="300">
            <h1>Himanshu Upadhyay</h1>
            <p>"SGTBIMIT helps students excel in studies as well as extra curricular activities which includes sports , divinity society , placement cells etc."</p>
        </div>
    </div>
    </>
    )
}