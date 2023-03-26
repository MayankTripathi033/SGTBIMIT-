import React from 'react'
import './syllabus.css'
import Navbar from '../../Components/Navbar.jsx'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'

export default function Syllabus() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
                <div className='syllabus'>
                    <h1>SYLLABUS</h1>
                    <h2>BBA Syllabus</h2>
                    <a href="http://www.sgtbimit.com/public/pdf_file/BBA-SYLLABUS.pdf">http://www.sgtbimit.com/public/pdf_file/BBA-SYLLABUS.pdf</a>
                    <h2>BBA (BI) Syllabus</h2>
                    <a href="http://www.sgtbimit.com/public/pdf_file/BBA-BI-Syllabus.pdf">http://www.sgtbimit.com/public/pdf_file/BBA-BI-Syllabus.pdf</a>
                    <h2>BCA Syllabus</h2>
                    <a href="http://www.sgtbimit.com/public/pdf_file/BCA-SYLLABUS.pdf">http://www.sgtbimit.com/public/pdf_file/BCA-SYLLABUS.pdf</a>
                    <h2>BCOM Syllabus</h2>
                    <a href="http://www.sgtbimit.com/public/pdf_file/B.com_Syllabus.pdf">http://www.sgtbimit.com/public/pdf_file/B.com_Syllabus.pdf</a>

                </div>
            <Footer></Footer> 
        </>
     )
}
