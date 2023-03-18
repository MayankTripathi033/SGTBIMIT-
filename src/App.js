import React from 'react'
import Home from './Home/Home.jsx'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
import AdminisCarousel from './GoverningBody/AdminisCarousel.jsx'
import About from './About/About'
import Vision from './Vision'
function App() {

  return (
    <Router>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path= 'governingbody' element={<AdminisCarousel/>}/>
        <Route path= "about" element={ <About/> }/>
        <Route path = "vision"/>
      </Routes>
    </Router>
  );
}

export default App;
