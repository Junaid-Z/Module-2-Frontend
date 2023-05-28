import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResponsiveDrawer from '../components/ResponsiveDrawer'
import '../Post.css'
import '../Navbar.css'

import Courses from '../pages/Get/Course'
import Teachers from '../pages/Get/Teacher'
import Institutes from '../pages/Get/Institute'
import Students from '../pages/Get/Student'

import AddStudent from '../pages/Put-Post/Student'
import AddCourse from '../pages/Put-Post/Course'
import AddTeacher from '../pages/Put-Post/Teacher'
import AddInstitute from '../pages/Put-Post/Institute'

import links from './NavLinks.json'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ResponsiveDrawer sideLinks={links} />} >
          <Route path='/students' element={<Students />} />
          <Route path='/addStudent' element={<AddStudent />} >
            <Route path='/addStudent/'></Route>
            <Route path='/addStudent/:_id'></Route>
          </Route>

          <Route path='/courses' element={<Courses />} />
          <Route path='/addCourse' element={<AddCourse />} >
            <Route path='/addCourse/'></Route>
            <Route path='/addCourse/:_id'></Route>
          </Route>

          <Route path='/teachers' element={<Teachers />} />
          <Route path='/addTeacher' element={<AddTeacher />} >
            <Route path='/addTeacher/'></Route>
            <Route path='/addTeacher/:_id'></Route>
          </Route>

          <Route path='/institutes' element={<Institutes />} />
          <Route path='/addInstitute' element={<AddInstitute />} >
            <Route path='/addInstitute/'></Route>
            <Route path='/addInstitute/:_id'></Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
