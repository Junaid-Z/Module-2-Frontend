import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddStudent from '../pages/Post/Student'
import Student from '../pages/Get/Student'
import Courses from '../pages/Get/Course'
import AddCourse from '../pages/Post/Course'
import TeacherPage from '../pages/Get/Teacher'
import Teacher from '../pages/Post/Teacher'
import LinkList from '../pages/LinkList'
import '../listPage.css'
import '../addForm.css'
import '../LinkListPage.css'
import EditCourse from '../pages/Put/Course'
import EditTeacher from '../pages/Put/Teacher'
import EditStudent from '../pages/Put/Student'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LinkList />} />
        <Route path='/addStudent' element={<AddStudent />} />
        <Route path='/editStudent/:_id' element={<EditStudent />} />
        <Route path='/students' element={<Student />} />

        <Route path='/addCourse' element={<AddCourse />} />
        <Route path='/editCourse/:_id' element={<EditCourse />} />
        <Route path='/courses' element={<Courses />} />

        <Route path='/addTeacher' element={<Teacher />} />
        <Route path='/editTeacher/:_id' element={<EditTeacher />} />
        <Route path='/teachers' element={<TeacherPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
