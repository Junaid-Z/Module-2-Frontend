import axios from 'axios';
import React, { useState } from 'react'

const Institute = () => {
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
        Address:
        <input value={inputs.address || ''} name='address' onChange={handleIInput} />
      </label>
      <label>
        Short Name:
        <input value={inputs.shortName || ''} name='shortName' onChange={handleIInput} />
      </label>
      <label>
        Telephone:
        <input value={inputs.tel || ''} name='tel' onChange={handleIInput} />
      </label>
      <button
        onClick={(e) => {
          axios.post('http://localhost:2121/institutes', inputs)
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

export default Institute
