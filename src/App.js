import React from 'react'
import AOS from 'aos'
import Home from './Home/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
import AdminisCarousel from './About/GoverningBody/AdminisCarousel.jsx'
import About from './About/About'
import Vision from './Vision/Vision'
import DirectorReadMore from './DirectorReadMore/DirectorReadMore'
import Divinity from './Society/pages/Divinity'
import SmartYouth from './Society/pages/SmartYouth'
import Literary from './Society/pages/Literary'
import Nss from './Society/pages/Nss'
import Fineart from './Society/pages/Fineart'
import Cultural from './Society/pages/Cultural'
import Soch from './Society/pages/Soch'
import Saarang from './Society/pages/Saarang'
import Eco from './Society/pages/Eco'
import SwachhBharat from './Society/pages/SwachhBharat' 
import Faculty from './Faculty/Faculty'
import EResources from './Academics/EResources/EResources.jsx'
import Examination from './Academics/Examination/Examination'
import Syllabus from './Academics/Syllabus/Syllabus.jsx'
import Fees from './Fees/Fees'
import Admin from "../src/Admin/Admin"
import Testimonials_ADD from './Pages/Testimonials/Testimonials_ADD/Testimonials_ADD.jsx'
import Testimonial_Display from './Pages/Testimonials/Testimonials_Display/Testimonial_Display.jsx'
import Society_Add from "../src/Pages/Society/Society_Add/Society_Add"
import Society_Display from './Pages/Society/Society_Display/Society_Display.jsx'
import Eligibility from './Course-Eligibility/Eligibility.jsx'
import Notice from './Notices/Notices.jsx'
import Bba from './Academics/Courses/Bba'
import BbaBI from './Academics/Courses/BbaBI'
import Bca from './Academics/Courses/Bca'
import Bcom from './Academics/Courses/Bcom'
import Testimonial_Update from './Pages/Testimonials/Testimonial_Update/Testimonial_Update.jsx'
import Society_Update from './Pages/Society/Society_Update/Society_Update.jsx'
import Questionpaper from './Academics/Questionpaper/Questionpaper'
import AcademicCal from './Academics/AcademicCalendar/AcademicCal.jsx'
import AlumniMeet from './Alumni/AlumniMeet/AlumniMeet.jsx'
import TestimonialsAL from './Alumni/Testimonials/TestimonialsAL.jsx'
import FacultyAdd from './Pages/Faculty/Faculty_Add/FacultyAdd.jsx'
import FacultyDisplay from './Pages/Faculty/Faculty_Display/FacultyDisplay.jsx'
import FacultyUpdate from './Pages/Faculty/Faculty_Update/FacultyUpdate.jsx'
import AdministrationAdd from './Pages/Administration/Administration_Add/AdministrationAdd.jsx'
import AdministrationDisplay from './Pages/Administration/Administration_Display/AdministrationDisplay.jsx'
import AdministrationUpdate from "./Pages/Administration/Administration_Update/AdministrationUpdate.jsx"
function App() {
  AOS.init({
    startEvent: 'load'
  })
  return (
    <Router>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path='about/governing-body' element={<AdminisCarousel />} />
        <Route path="about/vision-and-mission" element={<Vision />} />
        <Route path="director-readmore" element={<DirectorReadMore />} />
        <Route path="society/divinity" element={<Divinity />} />
        <Route path="society/smart-youth" element={<SmartYouth />} />
        <Route path="society/literary" element={<Literary />} />
        <Route path="society/nss-cell" element={<Nss />} />
        <Route path="society/fine-art" element={<Fineart />} />
        <Route path="society/cultural" element={<Cultural />}/>
        <Route path="society/soch" element={<Soch />}/>
        <Route path="society/saarang" element={<Saarang />}/>
        <Route path="society/eco-club" element={<Eco />}/>
        <Route path='society/swachh-bharat' element={<SwachhBharat />}/>
        <Route path='academics/faculty' element={<Faculty />}/>
        <Route path='academics/e-resources' element={<EResources />}/>
        <Route path='academics/examinations' element={<Examination />}/>
        <Route path='admission/fees' element={<Fees />}/>
        <Route path='academics/syllabus' element={<Syllabus />}/>
        <Route path='admission/courses-eligibility' element = {<Eligibility />}/>
        <Route path='admission/notices' element = {<Notice />}/>
        <Route path='/admin' element = {<Admin/>}/>
        <Route path='/admin/Testimonials_Add' element = {<Testimonials_ADD/>}/>
        <Route path='/admin/Testimonials_Display' element = {<Testimonial_Display/>}/>
        <Route path='/admin/Testimonials_Update/:id' element = {<Testimonial_Update/>}/>
        <Route path='/admin/Society_Add' element = {<Society_Add/>}/>
        <Route path='/admin/Society_Display' element = {<Society_Display/>}/>
        <Route path='/admin/Society_Update/:_id' element = {<Society_Update/>}/>
        <Route path='/admin/Faculty_Add' element = {<FacultyAdd/>}/>
        <Route path='/admin/Faculty_Display' element = {<FacultyDisplay/>}/>
        <Route path='/admin/Faculty_Update/:_id' element = {<FacultyUpdate/>}/>
        <Route path='/admin/Administration_Add' element = {<AdministrationAdd/>}/>
        <Route path='/admin/Administration_Display' element = {<AdministrationDisplay/>}/>
        <Route path='/admin/Administration_Update/:_id' element = {<AdministrationUpdate/>}/>
        <Route path='/academics/courses/bba' element={<Bba />}/>
        <Route path='/academics/courses/bbab&i' element={<BbaBI />}/>
        <Route path='/academics/courses/bca' element={<Bca />}/>
        <Route path='/academics/courses/bcom' element={<Bcom />}/>
        <Route path='/academics/prev-year-papers' element={<Questionpaper />}/>
        <Route path='/academics/academic-calender' element={<AcademicCal />}/>
        <Route path='/alumini/alumini-meet' element={<AlumniMeet />} />
        <Route path='/alumini/testimonials' element={<TestimonialsAL/>}/>
        </Routes>
    </Router>
  );
}

export default App;
