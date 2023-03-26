import React from 'react'
import './questionpaper.css'
import Navbar from '../../Components/Navbar'
import Header from '../../Components/Header.jsx'
import Footer from '../../Components/Footer.jsx'

export default function Questionpaper() {
    return (
        <>
        <Header></Header>
        <Navbar></Navbar>
            <div className='quespapers'>
                <h1> QUESTION PAPERS </h1>
                <div clasName='bbaques'>
                    <h2>BBA</h2>
                    <div className="sem-container">
                        <div className='sem'> <p>SEMESTER I</p> <a href="
                        https://drive.google.com/drive/folders/1Z2JeDHM-_laAdt_DwhcyHQ0zmBcjXUc-"> <img src={require("../../images/download.png")} alt=""   /> </a></div>
                        <div className='sem'> <p>SEMESTER II</p> <a href="https://drive.google.com/drive/folders/1bRGsW3gPul89vbbOBMm200QVORyrhZpH"><img src={require("../../images/download.png")} alt="" /> </a> </div>
                        <div className='sem'> <p>SEMESTER III</p> <a href='https://drive.google.com/drive/folders/19oJ2H3KLFZv4XSqij9o2eRWOaX8DVeab'> <img src={require("../../images/download.png")} alt="" /> </a></div>
                        <div className='sem'> <p>SEMESTER IV</p> <a href="https://drive.google.com/drive/folders/1h4NFi7He6hN2iDKj-UD8jgCqpQWJvd_8"> <img src={require("../../images/download.png")} alt="" />  </a></div>
                        <div className='sem'> <p>SEMESTER V</p> <a href="https://drive.google.com/drive/folders/1UqvL9m8-PfKnmkWsddngb4aZnOYdeq-e"> <img src={require("../../images/download.png")} alt="" /> </a></div>
                        <div className='sem'> <p>SEMESTER VI</p>  <img src={require("../../images/download.png")} alt="" /> </div>
                    </div>
                </div>
                <div clasName='bcaques'>
                    <h2>BCA</h2>
                    <div className="sem-container">
                        <div className='sem'> <p>SEMESTER I</p> <a href="https://drive.google.com/drive/folders/1e-Rvm0N7GSbmYZ4VnRmrU0EwWaZ07kwu"> <img src={require("../../images/download.png")} alt="" /> </a></div>
                        <div className='sem'> <p>SEMESTER II</p> <a href="https://drive.google.com/drive/folders/1fpujhb7NBJUPsX3btPWH1RFrP9kbl7uX"> <img src={require("../../images/download.png")} alt="" /> </a></div>
                        <div className='sem'> <p>SEMESTER III</p> <a href="https://drive.google.com/drive/folders/1fqdnTsT_495Xfd4BEuOoJWkcfB86eUk-"><img src={require("../../images/download.png")} alt="" /></a>  </div>
                        <div className='sem'> <p>SEMESTER IV</p> <a href="https://drive.google.com/drive/folders/1hmyhLRoaN0Y3OGoDz4t1l7ShRnxmwgHr"><img src={require("../../images/download.png")} alt="" /> </a> </div>
                        <div className='sem'> <p>SEMESTER V</p> <a href="https://drive.google.com/drive/folders/1hop10LcpfEK4ZwUPU1Q99Hb_qbi7eRQN"> <img src={require("../../images/download.png")} alt="" /> </a></div>
                        <div className='sem'> <p>SEMESTER VI</p> <a href="https://drive.google.com/drive/folders/10gshsyQZnZMOwbyaq2BcOTyu3Hjc4NNe"><img src={require("../../images/download.png")} alt="" /></a>  </div>
                    </div>
                </div>
                <div clasName='bbabiques'>
                    <h2>BBA B&I</h2>
                    <div className="sem-container">
                        <div className='sem'> <p>SEMESTER I</p> <a href="https://www.sgtbimit.com/academics/questions_papers"><img src={require("../../images/download.png")} alt="" /> </a> </div>
                        <div className='sem'> <p>SEMESTER II</p> <a href=""></a> <img src={require("../../images/download.png")} alt="" /> </div>
                        <div className='sem'> <p>SEMESTER III</p> <img src={require("../../images/download.png")} alt="" /> </div>
                        <div className='sem'> <p>SEMESTER IV</p> <img src={require("../../images/download.png")} alt="" /> </div>
                        <div className='sem'> <p>SEMESTER V</p> <img src={require("../../images/download.png")} alt="" /> </div>
                        <div className='sem'> <p>SEMESTER VI</p> <img src={require("../../images/download.png")} alt="" /> </div>
                    </div>
                </div>
                <div clasName='bcomques'>
                    <h2>BCOM</h2>
                    <div className="sem-container">
                        <div className='sem'> <p>SEMESTER I</p> <img src={require("../../images/download.png")} alt="" /> </div>
                        <div className='sem'> <p>SEMESTER II</p> <img src={require("../../images/download.png")} alt="" /> </div>
                        <div className='sem'> <p>SEMESTER III</p> <img src={require("../../images/download.png")} alt="" /> </div>
                        <div className='sem'> <p>SEMESTER IV</p> <img src={require("../../images/download.png")} alt="" /> </div>
                        <div className='sem'> <p>SEMESTER V</p> <img src={require("../../images/download.png")} alt="" /> </div>
                        <div className='sem'> <p>SEMESTER VI</p> <img src={require("../../images/download.png")} alt="" /> </div>
                    </div>
                </div>

                







            </div>
        <Footer></Footer>
        </>
    )
}
