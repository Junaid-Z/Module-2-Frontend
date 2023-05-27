import React from 'react'
import { Link } from 'react-router-dom'

const LinkList = () => {
  return (
    <div className='linksHolder'>
      <Link to={'/addStudent'}>
        Add Student
      </Link>
      <Link to={'/students'}>
        Student List
      </Link>
      <Link to={'/addCourse'}>
        Add Course
      </Link>
      <Link to={'/courses'}>
        Courses List
      </Link>
      <Link to={'/addTeacher'}>
        Add Teacher
      </Link>
      <Link to={'/teachers'}>
       Teachers List
      </Link>
    </div>
  )
}

export default LinkList
