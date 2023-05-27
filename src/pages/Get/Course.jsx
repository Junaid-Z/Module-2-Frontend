import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CoursesPage = () => {
  let navigation = useNavigate()
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:2121/courses')
      .then((res) => {
        setData(res.data.data)
        console.log(res.data.data)
      }).catch((e) => {
        console.log(e.message)
      })
  }, [])
  return (
    <div className='studentPageContainer'>
      {data.map((d) => <div className='student' key={d._id}>
        <div>Name: {d.name}</div>
        <div>Duration: {d.duration}</div>
        <div>Fee: {d.fees}</div>
        <div>Short Name: {d.shortName}</div>
        <button onClick={() => {
          axios.delete('http://localhost:2121/courses/' + d._id)
          setData((prev) => {
            prev = prev.filter((course) => course._id !== d._id)
            console.log(prev)
            return [...prev]
          })
        }}>Delete</button>
        <button onClick={() => {
          navigation('/editCourse/' + d._id)
        }}>Update</button>
      </div>)}
    </div>
  )
}

export default CoursesPage
