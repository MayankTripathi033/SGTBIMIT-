import React from 'react'
import Home from './Home/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
import AdminisCarousel from './About/GoverningBody/AdminisCarousel.jsx'
import About from './About/About'
import Vision from './Vision/Vision'
import DirectorReadMore from './DirectorReadMore/DirectorReadMore'
import Society from './Society/pages/Society.jsx'
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
import AcademicCal from './Academics/AcademicCalendar/AcademicCal.jsx'
import AlumniMeet from './Alumni/AlumniMeet/AlumniMeet.jsx'
import TestimonialsAL from './Alumni/Testimonials/TestimonialsAL.jsx'
import Events from './Events/Events.jsx'

/* Admin imports */

import Testimonial_Update from './Pages/Testimonials/Testimonial_Update/Testimonial_Update.jsx'
import Society_Update from './Pages/Society/Society_Update/Society_Update.jsx'
import Questionpaper from './Academics/Questionpaper/Questionpaper'
import FacultyAdd from './Pages/Faculty/Faculty_Add/FacultyAdd.jsx'
import FacultyDisplay from './Pages/Faculty/Faculty_Display/FacultyDisplay.jsx'
import FacultyUpdate from './Pages/Faculty/Faculty_Update/FacultyUpdate.jsx'
import AdministrationAdd from './Pages/Administration/Administration_Add/AdministrationAdd.jsx'
import AdministrationDisplay from './Pages/Administration/Administration_Display/AdministrationDisplay.jsx'
import AdministrationUpdate from "./Pages/Administration/Administration_Update/AdministrationUpdate.jsx"
import PlacementDisplay from './Pages/Placement and Internship/Placement_Display/Placement_Display.jsx'
import PlacementUpdate from './Pages/Placement and Internship/Placement_Update/Placement_Update.jsx'
import PlacementAdd from './Pages/Placement and Internship/Placement_Add/Placement_Add.jsx'
import RecruitersAdd from './Pages/Recruiters/Recruiters_Add/Recruiters_Add.jsx'
import RecruitersDisplay from './Pages/Recruiters/Recruiters_Display/Recruiters_Display.jsx'
import RecruitersUpdate from './Pages/Recruiters/Recruiters_Update/Recruiters_Update.jsx'
import EResourcesAdd from './Pages/E_Resources/E_Resources_Add/E_Resources_Add.jsx'
import EResourcesDisplay from './Pages/E_Resources/E_Resources_Display/E_Resources_Display.jsx'
import EResourcesUpdate from './Pages/E_Resources/E_Resources_Update/E_Resources_Update.jsx'
import QuestionPaperDisplay from './Pages/QuestionPaper/QuestionPaperDisplay/QuestionPaperDisplay.jsx'
import QuestionPaperAdd from './Pages/QuestionPaper/QuestionPaperAdd/QuestionPaperAdd.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path='/about/governing-body' element={<AdminisCarousel />} />
        <Route path="/about/vision-and-mission" element={<Vision />} />
        <Route path="/director-readmore" element={<DirectorReadMore />} />
<<<<<<< HEAD
        <Route path='/society/:id' element={<Society />}/>
        <Route path='/academics/faculty' element={<Faculty />}/>
        <Route path='/academics/e-resources' element={<EResources />}/>
        <Route path='/academics/examinations' element={<Examination />}/>
        <Route path='/admission/fees' element={<Fees />}/>
        <Route path='/academics/syllabus' element={<Syllabus />}/>
        <Route path='/admission/courses-eligibility' element = {<Eligibility />}/>
        <Route path='/admission/notices' element = {<Notice />}/>
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
        <Route path='/admin/Placement_Add' element = {<PlacementAdd/>}/>
        <Route path='/admin/Placement_Display' element = {<PlacementDisplay/>}/>
        <Route path='/admin/Placement_Update/:_id' element = {<PlacementUpdate/>}/>
        <Route path='/admin/Recruiters_Add' element = {<RecruitersAdd/>}/>
        <Route path='/admin/Recruiters_Display' element = {<RecruitersDisplay/>}/>
        <Route path='/admin/Recruiters_Update/:_id' element = {<RecruitersUpdate/>}/>
        <Route path='/admin/EResources_Add' element = {<EResourcesAdd/>}/>
        <Route path='/admin/EResources_Display' element = {<EResourcesDisplay/>}/>
        <Route path='/admin/EResources_Update/:_id' element = {<EResourcesUpdate/>}/>
        <Route path='/admin/Prev_Year_Paper_Dislay' element = {<QuestionPaperDisplay/>}/>
        <Route path='/admin/Prev_Year_Paper_Add' element = {<QuestionPaperAdd/>}/>
        <Route path='/academics/courses/bba' element={<Bba />}/>
        <Route path='/academics/courses/bbab&i' element={<BbaBI />}/>
        <Route path='/academics/courses/bca' element={<Bca />}/>
        <Route path='/academics/courses/bcom' element={<Bcom />}/>
        <Route path='/academics/prev-year-papers' element={<Questionpaper />}/>
        <Route path='/academics/academic-calender' element={<AcademicCal />}/>
=======
        <Route path='/society/:id' element={<Society />} />
        <Route path='/academics/faculty' element={<Faculty />} />
        <Route path='/academics/e-resources' element={<EResources />} />
        <Route path='/academics/examinations' element={<Examination />} />
        <Route path='/admission/fees' element={<Fees />} />
        <Route path='/academics/syllabus' element={<Syllabus />} />
        <Route path='/admission/courses-eligibility' element={<Eligibility />} />
        <Route path='/admission/notices' element={<Notice />} />
        <Route path='/academics/courses/bba' element={<Bba />} />
        <Route path='/academics/courses/bbab&i' element={<BbaBI />} />
        <Route path='/academics/courses/bca' element={<Bca />} />
        <Route path='/academics/courses/bcom' element={<Bcom />} />
        <Route path='/academics/prev-year-papers' element={<Questionpaper />} />
        <Route path='/academics/academic-calender' element={<AcademicCal />} />
>>>>>>> 91932f9e0d62be30566961718ffc6c506a1efecc
        <Route path='/alumini/alumini-meet' element={<AlumniMeet />} />
        <Route path='/alumini/testimonials' element={<TestimonialsAL />} />
        <Route path="/events/past" element={<Events />}/>
        {/* Admin Routes */}

        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/Testimonials_Add' element={<Testimonials_ADD />} />
        <Route path='/admin/Testimonials_Display' element={<Testimonial_Display />} />
        <Route path='/admin/Testimonials_Update/:id' element={<Testimonial_Update />} />
        <Route path='/admin/Society_Add' element={<Society_Add />} />
        <Route path='/admin/Society_Display' element={<Society_Display />} />
        <Route path='/admin/Society_Update/:_id' element={<Society_Update />} />
        <Route path='/admin/Faculty_Add' element={<FacultyAdd />} />
        <Route path='/admin/Faculty_Display' element={<FacultyDisplay />} />
        <Route path='/admin/Faculty_Update/:_id' element={<FacultyUpdate />} />
        <Route path='/admin/Administration_Add' element={<AdministrationAdd />} />
        <Route path='/admin/Administration_Display' element={<AdministrationDisplay />} />
        <Route path='/admin/Administration_Update/:_id' element={<AdministrationUpdate />} />
        <Route path='/admin/Placement_Add' element={<PlacementAdd />} />
        <Route path='/admin/Placement_Display' element={<PlacementDisplay />} />
        <Route path='/admin/Placement_Update/:_id' element={<PlacementUpdate />} />
        <Route path='/admin/Recruiters_Add' element={<RecruitersAdd />} />
        <Route path='/admin/Recruiters_Display' element={<RecruitersDisplay />} />
        <Route path='/admin/Recruiters_Update/:_id' element={<RecruitersUpdate />} />
        <Route path='/admin/EResources_Add' element={<EResourcesAdd />} />
        <Route path='/admin/EResources_Display' element={<EResourcesDisplay />} />
        <Route path='/admin/EResources_Update/:_id' element={<EResourcesUpdate />} />

      </Routes>
    </Router>
  );
}

export default App;
