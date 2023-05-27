import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const InstitutePage = () => {
  let navigation = useNavigate()
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:2121/institutes')
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
        <div>Address: {d.address}</div>
        <div>Short Name: {d.shortName}</div>
        <div>Telephone: {d.tel}</div>
        <button onClick={() => {
          axios.delete('http://localhost:2121/institutes/' + d._id)
          setData((prev) => {
            prev = prev.filter((course) => course._id !== d._id)
            console.log(prev)
            return [...prev]
          })
        }}>Delete</button>
        <button onClick={() => {
          navigation('/editInstitute/' + d._id)
        }}>Update</button>
      </div>)}
    </div>
  )
}

export default InstitutePage
