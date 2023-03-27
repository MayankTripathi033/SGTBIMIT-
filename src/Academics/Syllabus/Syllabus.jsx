import React from 'react'
import './syllabus.css'
import Navbar from '../../Components/Navbar.jsx'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'
import BCA from '../../Assets/BCA-SYLLABUS .pdf';
import BCOM from '../../Assets/B.com_Syllabus.pdf';
import BBABI from '../../Assets/BBA-BI-Syllabus.pdf';
import BBA from '../../Assets/BBA-SYLLABUS.pdf';

export default function Syllabus() {
    return (
        <>
            <Header />
            <Navbar />
                <div className='syllabus'>
                    <h1>SYLLABUS</h1>
                    <div className="btn">
                        <a href={BCA} download>BCA</a>
                        <a href={BBA} download>BBA(G)</a>
                        <a href={BBABI} download>BBA(B&I)</a>
                        <a href={BCOM} download>B.Com</a>
                    </div>
                </div>
            <Footer />
        </>
     )
}
