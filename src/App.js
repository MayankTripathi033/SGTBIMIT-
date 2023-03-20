import React from 'react'
import Home from './Home/Home.jsx'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
import AdminisCarousel from './GoverningBody/AdminisCarousel.jsx'
import About from './About/About'
import Vision from './Vision/Vision'
import DirectorReadMore from './DirectorReadMore/DirectorReadMore'
import Divinity from './Society/pages/Divinity'
import SmartYouth from './Society/pages/SmartYouth'
import Literary from './Society/pages/Literary'
import Nss from './Society/pages/Nss'
import Footer from './Components/Footer'

function App() {

  return (
    <Router>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path='about/governing-body' element={<AdminisCarousel />} />
        <Route path="about/vission-and-mission" element={<Vision />} />
        <Route path="director-readmore" element={<DirectorReadMore />} />
        <Route path="society/divinity" element={<Divinity />} />
        <Route path="society/smart-youth" element={<SmartYouth />} />
        <Route path="society/literary" element={<Literary />} />
        <Route path="society/nss-cell" element={<Nss />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
