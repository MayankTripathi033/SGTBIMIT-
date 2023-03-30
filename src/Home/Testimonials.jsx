
import React from 'react'
import useFetch from '../useFetch'
import { Carousel } from 'react-responsive-carousel'
import Loader from '../Components/Loader'
export default function Testimonials() {
    const { data: testimonials, isPending } = useFetch("http://localhost:5000/Testimonial/Testimonial_Display")
    let testimonialsChunks = []
    let i = 0
    testimonials && (

        testimonials.forEach((element) => {
            let res = testimonials.slice(i, i + 3)
            if (res.length === 0) return
            testimonialsChunks.push(res)
            i = i + 3
        })

    )
    return (

        <section className="test-section">
            <div className="block left-block"></div>
            <div className="block right-block"></div>
            <h1 className='t-heading' data-aos="zoom-in-up" data-aos-offset="300">TESTIMONIALS</h1>
            {isPending && <Loader />}
            {testimonialsChunks &&
                <Carousel className='test-carousel'
                    swipeable={false}
                >

                    {testimonialsChunks.map((testimonials, i) => (
                        <div className="test">
                            {testimonials.map((testimonial, i) => {
                                return (
                                    <div className={`card card-${i}`} data-aos="zoom-in-up" data-aos-delay={`${i}00`} key={testimonial._id}>
                                        <h1>{testimonial.name}</h1>
                                        <p>{testimonial.detail}</p>
                                    </div>
                                )
                            })}
                        </div>
                    ))}

                </Carousel>
            }
        </section>
    )
}