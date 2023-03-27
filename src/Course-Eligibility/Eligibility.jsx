import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Eligibility.css";

export default function Eligibility() {

    const hidden = (e) => {
        document.querySelectorAll(".info1").forEach((info) => {
            if (info.style.display === "none") {
                info.style.display = "block"
                return
            }
            info.style.display = "none"
        })
    }

    const hiddenO = (e) => {
        document.querySelectorAll(".info2").forEach((info) => {
            if (info.style.display === "none") {
                info.style.display = "block"
                return
            }
            info.style.display = "none"
        })
    }

    const hiddenT = (e) => {
        document.querySelectorAll(".info3").forEach((info) => {
            if (info.style.display === "none") {
                info.style.display = "block"
                return
            }
            info.style.display = "none"
        })
    }

    const hiddenTh = (e) => {
        document.querySelectorAll(".info4").forEach((info) => {
            if (info.style.display === "none") {
                info.style.display = "block"
                return
            }
            info.style.display = "none"
        })
    }

    return (
        <>
            <Header />
            <Navbar />
            <div className="eli_container">
                <h1>ELIGIBILITY FOR COURSES</h1>
                <div className="information">
                    
                    <div className="btns">
                    <button onClick={(e)=>hidden(e)}>
                        BCA
                    </button>
                    {/* btn 1 info */}
                    <div className="info1">
                    <h3>BCA Eligibility Criteria:</h3>
                    <p>
                        Pass in 12th Class of 10+2 of CBSE or equivalent with a minimum of
                        50% marks in aggregate* with pass in English (core or elective or
                        functional). Mathematics or (Computer Science / Informatics Practice /
                        Computer Applications / Multimedia & Web Technology / Data
                        Management Application / Web Application as compulsory subject of
                        non-vocational stream with 50 theory and 50 practical ratio).
                        <br /><b>OR</b><br />
                        Three year Diploma in a branch of Engineering from a polytechnic
                        duly approved by All India Council for Technical Education and
                        affiliated to a recognized examining body with a minimum of 50%
                        marks in aggregate.
                    </p>
                    <h3>BCA Admission Criteria:</h3>
                    <p>
                        Admission shall be on the basis of the merit of the 
                        written test /CUET.
                    </p>
                    </div>

                    <button onClick={(e)=>hiddenO(e)}>
                        BBA(G)
                    </button>
                    {/* btn 2 info */}
                    <div className="info2">
                    <h3>BBA(G) Eligibility Criteria:</h3>
                    <p>
                        Pass in 12th Class of 10+2 of CBSE or equivalent with a minimum of
                        50% marks in aggregate* and must also have passed English (core or
                        elective or functional) as a subject.
                    </p>
                    <h3>BBA(G) Admission Criteria:</h3>
                    <p>
                        Admission shall be on the basis of the merit of the 
                        written test /CUET.
                    </p>
                    </div>

                    <button onClick={(e)=>hiddenT(e)}>
                        BBA(B&I)
                    </button>
                    {/* btn 3 info */}
                    <div className="info3">
                    <h3>BBA(B&I) Eligibility Criteria:</h3>
                    <p>
                        Pass in 12th Class of 10+2 of CBSE or equivalent with a minimum of
                        50% marks in aggregate* and must also have passed English (core or
                        elective or functional) as a subject.
                    </p>
                    <h3>BBA(B&I) Admission Criteria:</h3>
                    <p>
                        Admission shall be on the basis of the merit of the 
                        written test /CUET.
                    </p>
                    </div>

                    <button onClick={(e)=>hiddenTh(e)}>
                        B.Comm
                    </button>
                    {/* btn 4 info */} 
                    <div className="info4">                   
                    <h3>B.Comm Eligibility Criteria:</h3>
                    <p>
                        50% in aggregate in 10+2 examination / senior school certificate
                        examination of C.B.S.E. as minimum marks for admission to B.Com
                        with pass in five subjects (One language and four elective subjects) or
                        an examination recognized as equivalent to that.
                        (i) Pre-University Examination (Two years after ten years of
                        schooling) of an Indian school / college.
                        <br /><b>OR</b><br />
                        Intermediate Examination of an Indian University / Board or an
                        Examination recognized as equivalent to that (Pass in Five written
                        subjects)
                        (ii) Indian School Certificate Examination (12 years) conducted by the
                        Council for the Indian School Certificate Examination, New Delhi
                        (Pass in Five written subjects).
                        (iii) Examination of a foreign University / Board which is recognized
                        as equivalent to 10+2 CBSE examination/or Indian university.
                    </p>
                    <h3>B.Comm Admission Criteria:</h3>
                    <p>
                        Admission shall be on the basis of the merit of the 
                        written test /CUET.
                    </p>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}