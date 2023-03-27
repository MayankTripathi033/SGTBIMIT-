
import React from 'react'
import useFetch from '../useFetch'
import { Carousel } from 'react-responsive-carousel'

export default function Testimonials() {
    const { data: testimonials, isPending } = useFetch("http://localhost:5000/Testimonial/Testimonial_Display")
    let testimonialsSecondSlide = []
    testimonials && (testimonialsSecondSlide = testimonials.splice(3))
    return (

        <section className="test-section">
            <div className="block left-block"></div>
            <div className="block right-block"></div>
            <h1 className='t-heading' data-aos="zoom-in-up" data-aos-offset="300">TESTIMONIALS</h1>
            {isPending && <div className="loading">Loading...</div>}
            {testimonials &&
                <Carousel className='test-carousel'
                    swipeable={false}
                >
                    <div className="test">
                        {testimonials.map((testimonial, i) => {
                            return (
                                <div className={`card card-${i}`} data-aos="zoom-in-up" data-aos-delay={`${i}00`} data-aos-offset="300" key={testimonial._id}>
                                    <h1>{testimonial.name}</h1>
                                    <p>{testimonial.detail}</p>
                                </div>)

                        })}
                    </div>
                    <div className="test">
                        {testimonialsSecondSlide.map((testimonial, i) => {
                            return (
                                <div className={`card card-${i}`} data-aos="zoom-in-up" data-aos-delay={`${i}00`} data-aos-offset="300" key={testimonial._id}>
                                    <h1>{testimonial.name}</h1>
                                    <p>{testimonial.detail}</p>
                                </div>)

                        })}
                    </div>
                </Carousel>
            }
        </section>
    )
}