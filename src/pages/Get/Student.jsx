import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const StudentPage = () => {
  let navigation = useNavigate()
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:2121/students')
      .then((res) => {
        setData(res.data.data)
      }).catch((e) => {
        console.log(e.message)
      })
  }, [])
  return (
    <div className='studentPageContainer'>
      {data.map((d) => <div className='student' key={d._id}>
        <div>First Name: {d.firstName}</div>
        <div>Last Name: {d.lastName}</div>
        <div>Email: {d.email}</div>
        <div>Password: {d.password}</div>
        <div>Contact: {d.contact}</div>
        <button onClick={() => {
          axios.delete('http://localhost:2121/students/' + d._id)
          setData((prev) => {
            prev = prev.filter((course) => course._id !== d._id)
            console.log(prev)
            return [...prev]
          })
        }}>Delete</button>
        <button onClick={() => {
          navigation('/editStudent/' + d._id)
        }}>Update</button>
      </div>)}
    </div>
  )
}

export default StudentPage
