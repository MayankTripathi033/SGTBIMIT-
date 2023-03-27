import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Fees.css";

export default function Fees() {

    return (
        <>
            <Header />
            <Navbar />
            <div className="Fees">
                <h1>FEES STRUCTURE</h1>
                <div className="structure">
                    <div className="box">
                        <div className="icon">
                            <h1>BCA</h1>
                        </div>
                        <div className="info">
                            <h3>Bachelor of Computer Applications</h3>
                            <p>
                                Fees(Per Year) : Rs. 68,400/- <br />
                                Duration: 3 Years And 120 seats in both shifts<br/>
                                Fee Noted: The mentioned fee structure is subject to change.
                            </p>
                        </div>
                        <div>
                            <button onClick={(e)=>{
                                window.location.href = "./courses-eligibility";
                            }} className="more">Learn More</button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <h1>BBA(G)</h1>
                        </div>
                        <div className="info">
                            <h3>Bachelor of Business Administration</h3>
                            <p>
                                Fees(Per Year) : Rs. 70,000/-<br />
                                Duration: 3 Years And 60 seats in both shifts<br/>
                                Fee Noted: The mentioned fee structure is subject to change.
                            </p>
                        </div>
                        <div>
                            <button onClick={(e)=>{
                                window.location.href = "./courses-eligibility";
                            }} className="more">Learn More</button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <h1>BBA(B&I)</h1>
                        </div>
                        <div className="info">
                            <h3>Bachelor of Business Administration(Banking & Insurance)</h3>
                            <p>
                                Fees(Per Year) : Rs. 70,000/-<br />
                                Duration: 3 Years And 120 seats in both shifts<br/>
                                Fee Noted: The mentioned fee structure is subject to change.
                            </p>
                        </div>
                        <div>
                            <button onClick={(e)=>{
                                window.location.href = "./courses-eligibility";
                            }} className="more">Learn More</button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <h1>B.Com(H)</h1>
                        </div>
                        <div className="info">
                            <h3>Bachelor of Commerce (Honours)</h3>
                            <p>
                                Fees(Per Year) : Rs. 70,000/-<br />
                                Duration: 3 Years And 60 seats in 1st Shift<br/>
                                Fee Noted: The mentioned fee structure is subject to change.
                            </p>
                        </div>
                        <div>
                            <button onClick={(e)=>{
                                window.location.href = "./courses-eligibility";
                            }} className="more">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}