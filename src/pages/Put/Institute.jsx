import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditInstitute = () => {
  let params = useParams()
  let [refresh, setRefresh] = useState(false)
  let [data, setData] = useState({})
  function handleIInput(e) {
    setData((prev) => {
      prev[e.target.name] = e.target.value;
      return { ...prev }
    })
  }
  useEffect(() => {
    axios.get('http://localhost:2121/institutes/' + params._id)
      .then((res) => {
        setData(res.data.data)
        console.log(res.data.data)
      }).catch((e) => {
        console.log(e.message)
      })
  }, [params, refresh])
  return (
    <div className='studentPageContainer'>
      <div className='student' key={data._id}>
        <div>Name:<input value={data.name} name='name' onChange={handleIInput} /> </div>
        <div>Duration:<input value={data.duration} name='duration' onChange={handleIInput} /></div>
        <div>Short Name: <input value={data.shortName} name='shortName' onChange={handleIInput} /></div>
        <div>Telephone: <input value={data.tel} name='tel' onChange={handleIInput} /></div>
      </div>
      <button onClick={() => {
        axios
          .put('http://localhost:2121/institutes/' + data._id, data)
        setRefresh((prev) => !prev)
      }}>Update</button>
    </div>
  )
}

export default EditInstitute
