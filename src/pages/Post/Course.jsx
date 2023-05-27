import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Course = () => {
  let [inputs, setInputs] = useState({})
  function handleIInput(e) {
    setInputs((prev) => {
      prev[e.target.name] = e.target.value;
      return { ...prev }
    })
  }
  return (<div className='studentFormHolder'>
    <form className='studentForm' onSubmit={(e) => { e.preventDefault() }}>
      <label>
        Name:
        <input value={inputs.name || ''} name='name' onChange={handleIInput} />
      </label>
      <label>
        Duration:
        <input value={inputs.duration || ''} name='duration' onChange={handleIInput} />
      </label>
      <label>
        Fees:
        <input value={inputs.fees || ''} name='fees' onChange={handleIInput} />
      </label>
      <label>
        Short Name:
        <input value={inputs.shortName || ''} name='shortName' onChange={handleIInput} />
      </label>
      <button
        onClick={(e) => {
          axios.post('http://localhost:2121/courses', inputs)
            .then(() => {
              setInputs({})
            })
            .catch((e) => {
              console.log(e)
            })
          e.preventDefault()
        }} >
        Submit
      </button>
    </form>
    <Link to={'/students'}>
      Student List
    </Link>
  </div>)
}

export default Course
