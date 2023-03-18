import React from 'react'
import Home from './Home/Home.jsx'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
import AdminisCarousel from './GoverningBody/AdminisCarousel.jsx'
import About from './About/About'
import Vision from './Vision/Vision'
import  DirectorReadMore from './DirectorReadMore/DirectorReadMore'
import Divinity from './Society/Divinity'
import SmartYouth from './Society/SmartYouth'
import Literary from './Society/Literary'
import Nss from './Society/Nss'

function App() {

  return (
    <Router>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path= 'governingbody' element={ <AdminisCarousel/> }/>
        <Route path= "about" element={ <About/> }/>
        <Route path = "vision" element = { <Vision/> }/>
        <Route path= "director-readmore" element ={ <DirectorReadMore/>}/>
        <Route path= "divinity" element={ <Divinity/>}/>
        <Route path= "smartYouth" element={ <SmartYouth/>}/>
        <Route path= "literary" element={ <Literary/>}/>
        <Route path= "nss" element={ <Nss/>}/>        
      </Routes>
    </Router>
  );
}

export default App;
