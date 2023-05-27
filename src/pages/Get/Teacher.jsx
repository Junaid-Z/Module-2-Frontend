import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TeacherPage = () => {
  let navigation = useNavigate()
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:2121/teachers')
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
      }).catch((e) => {
        console.log(e.message)
      })
  }, [])
  return (
    <div className='studentPageContainer'>
      {data.map((d) => <div className='student' key={d._id}>
        <div>Name: {d.name}</div>
        <div>Course: {d.course}</div>
        <div>Contact: {d.contact}</div>
        <button onClick={() => {
          axios.delete('http://localhost:2121/teachers/' + d._id)
          setData((prev) => {
            prev = prev.filter((course) => course._id !== d._id)
            console.log(prev)
            return [...prev]
          })
        }}>Delete</button>
        <button onClick={() => {
          navigation('/editTeacher/' + d._id)
        }}>Update</button>
      </div>)}
    </div>
  )
}

export default TeacherPage
