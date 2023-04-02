import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Loader from '../../Components/Loader'
import Navbar from '../../Components/Navbar'
import useFetch from '../../useFetch'
import '../society.css'
export default function Society() {
    const { data } = useFetch("http://localhost:5000/Society/Society_Display")
    const { id } = useParams()
    const society = (data && data.filter((society) => {
        return society._id == id
    })[0])
    return (
        <>
            <Header />
            <Navbar />
            {!society && <Loader />}
            {society && <div className='society'>
                <h1>
                    {society.title}
                </h1>
                <img src={`http://localhost:5000/Society/Society_Image_Display/${society._id}`} alt="cant load" society-aos="fade-up" />
                <h2>
                    {society.subdetail}
                </h2>
                <p>
                    {society.detail}
                </p>
            </div>
            }
            <Footer />
        </>)
}
