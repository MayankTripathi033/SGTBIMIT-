import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import visionimage from "../images/vision.jpg"
import "./Vision.css";

export default function Vision() {
 
  return (
    <>
      <Header />
      <Navbar />
      <div className="Vision_Container">
        <h1>VISION AND MISSION</h1>
        <div className="Detail_ImageContainer">
          <div className="VisionDetail">
            <h3>OUR VISION</h3>
            <p>
              To facilitate integrated, secure, competitive and scalable digital
              learning in the long run by preparing young professionals to match
              the Global Standards of institute-industry interface with
              entrepreneurial capabilities of accepting new challenges with a
              holistic concern for a better life, environment and society.
            </p>
            <h3>OUR MISSION</h3>
            <ul>
              <li>
                To impart high quality educational content for development of
                perspective, talented and dynamic students as catalysts of
                social transformation.
              </li>
              <li>
                Sample Item 3To promote progressive spirit, innovative ideas and
                entrepreneurial platform.
              </li>
              <li>
                Our endeavour is to provide all possible support to promote
                research & development activities.
              </li>
              <li>
                To create competitive and cooperative environment and prepare
                the students to meet national and global challenges.
              </li>
            </ul>
          </div>
          <div className="VisionImage">
            <img src={visionimage} alt="Vision" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
