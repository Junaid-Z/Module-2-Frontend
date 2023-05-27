import axios from 'axios';
import React, { useState } from 'react'

const Teacher = () => {
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
        Course:
        <input value={inputs.course || ''} name='course' onChange={handleIInput} />
      </label>
      <label>
        Contact:
        <input value={inputs.contact || ''} name='contact' onChange={handleIInput} />
      </label>
      <button
        onClick={(e) => {
          axios.post('http://localhost:2121/teachers', inputs)
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
  </div>)
}

export default Teacher
