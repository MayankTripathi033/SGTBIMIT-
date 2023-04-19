import React from "react"
import { Header, Navbar, Footer, Loader } from '../Components'
import "./Notices.css"
import useFetch from "../useFetch"
import { Link } from "react-router-dom"

export default function Notice() {

    const { data: notices, isPending } = useFetch("http://localhost:5000/Notice/Notice_Data_Display")

    return (
        <>
            <Header />
            <Navbar />
            <>
                <section className="notices-section">
                    <h1>Notices.</h1>
                    {isPending && <Loader />}
                    <div className="notices-grid">
                        {notices && notices.map((notice) => (
                            <div className="notice-card" key={notice._id}>
                                <h1>{notice.Name}</h1>
                                <p> {notice.Detail} </p>
                                <div className="notice-file">
                                    <Link to={`/admission/notices/${notice._id}`}>Read More</Link>
                                </div>
                            </div>

                        ))}
                    </div>
                </section>
            </>
            <Footer />
        </>
    )
}
