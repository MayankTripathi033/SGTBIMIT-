import React from 'react'
import './nss.css'
import { Header, Navbar, Footer } from '../../Components'
import nssImg from '../../images/nss-img.png'
import nssImg2 from '../../images/nss-img-2.png'
import { Carousel } from 'react-responsive-carousel'

export default function Nss() {
    const walkathon = [
        [
            {
                title: 'WALKATHON',
                detail: 'On Jan 29, 2023, Sri Guru Tegh Bahadur Institute of Management & Information Technology will be organizing  a “WALKATHON”.',
                date: "29 JAN 2023",
            },
            {
                title: 'WALKATHON',
                detail: 'On Jan 29, 2023, Sri Guru Tegh Bahadur Institute of Management & Information Technology will be organizing  a “WALKATHON”.',
                date: "29 JAN 2023",
            },
            {
                title: 'WALKATHON',
                detail: 'On Jan 29, 2023, Sri Guru Tegh Bahadur Institute of Management & Information Technology will be organizing  a “WALKATHON”.',
                date: "29 JAN 2023",
            },
            {
                title: 'WALKATHON',
                detail: 'On Jan 29, 2023, Sri Guru Tegh Bahadur Institute of Management & Information Technology will be organizing  a “WALKATHON”.',
                date: "29 JAN 2023",
            },
        ],
        [
            {
                title: 'WALKATHON',
                detail: 'On Jan 29, 2023, Sri Guru Tegh Bahadur Institute of Management & Information Technology will be organizing  a “WALKATHON”.',
                date: "29 JAN 2023",
            },
            {
                title: 'WALKATHON',
                detail: 'On Jan 29, 2023, Sri Guru Tegh Bahadur Institute of Management & Information Technology will be organizing  a “WALKATHON”.',
                date: "29 JAN 2023",
            },
            {
                title: 'WALKATHON',
                detail: 'On Jan 29, 2023, Sri Guru Tegh Bahadur Institute of Management & Information Technology will be organizing  a “WALKATHON”.',
                date: "29 JAN 2023",
            },
            {
                title: 'WALKATHON',
                detail: 'On Jan 29, 2023, Sri Guru Tegh Bahadur Institute of Management & Information Technology will be organizing  a “WALKATHON”.',
                date: "29 JAN 2023",
            },
        ],
    ]


    return (
        <>
            <Header />
            <Navbar />
            <section className='nss-section'>
                <div className="nss-header">
                    <img src={nssImg} alt="" />
                    <div className="nss-header-title">
                        <p>Home {">"} Societies {">"} NSS CLub</p>
                        <h1>NSS Club</h1>
                    </div>
                </div>
                <div className="about-nss-section">
                    <div className="about-nss">
                        <h1>About NSS Club</h1>
                        <p>This would be the our story text. Amet minim mollit noncription. Amnefjenfjeet minim mollit noncription. Amet minim mollit noncription. Amet minnfejfnjim mollit noncription. Amet minim mollit noncription. Amet minim jdbfjejfbmollit noncription. Amet minim mollit noncription. Amet minim mollit noncription. Amet minim mollit noncription. Amet minim fbmollit noncription. Amet minim mollit non iption. Amet minim fbmollit noncription. Amet minim mollit non</p>
                    </div>
                    <div className="about-nss-carousel">
                        <Carousel
                            showThumbs={false}
                            showIndicators={false}
                        >
                            {[...Array(3)].map(() => (
                                <div className="nss-carousel-img">
                                    <img src={nssImg2} alt="cant load" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                <section className="walkathon-section">
                    <button type='button'>Upcoming Events</button>
                    <Carousel
                        showThumbs={false}
                        showIndicators={false}
                        showStatus={false}
                    >
                        {walkathon.map(walk => (
                            <div className="walk-card">
                                {walk.map(wal => (
                                    <div className="walk-card-item">
                                        <h1> {wal.title} </h1>
                                        <p> {wal.detail} </p>
                                        <div className="walk-card-bottom">
                                            <div className="date-chip">
                                                {wal.date}
                                            </div>
                                            <div className="register-btn">
                                                <div>Register Now</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                </section>
            </section>
            <Footer />
        </>
    )
}
