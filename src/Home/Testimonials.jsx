
import React from 'react'
import useFetch from '../useFetch'
import { Carousel } from 'react-responsive-carousel'
import Loader from '../Components/Loader'
export default function Testimonials() {
    const { data: testimonials, isPending } = useFetch("http://localhost:5000/Testimonial/Testimonial_Display")
    /*     let testimonialsChunks = []
        let i = 0
        testimonials && (
    
            testimonials.forEach((element) => {
                let res = testimonials.slice(i, i + 3)
                if (res.length === 0) return
                testimonialsChunks.push(res)
                i = i + 3
            })
    
        ) */
    return (

        <section className="test-section">
            <h1 className='t-heading' data-aos="zoom-in-up" data-aos-offset="300">What students say about us.</h1>
            {isPending && <Loader />}
            {testimonials &&
                <Carousel
                    swipeable={false}
                    showStatus={false}
                    showThumbs={false}
                >

                    {testimonials.map((testimonial, i) => (
                        <div className="test-container">
                            <div className="test">
                                {/*                             {testimonials.map((testimonial, i) => {
                                return ( */}
                                <div className="card" data-aos="zoom-in-up" data-aos-delay={`${i}00`} key={testimonial._id}>
                                    <img src={require("../images/quote.png")} alt="" className="test-quote" />
                                    <div className="card-content">
                                        <p>{testimonial.detail}</p>
                                        <div className="testi-name">
                                            <h1>{testimonial.name}</h1>
                                            <div className="batch">BCA Batch 2014</div>
                                        </div>
                                    </div>
                                    <div className="testimonial-img">
                                        <img src={require("../images/diljit.png")} alt="" />
                                    </div>
                                </div>
                            </div>
                            {/*                                 )
                            })} */}
                        </div>
                    ))}

                </Carousel>
            }
        </section>
    )
}