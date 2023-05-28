import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom'

const PostPage = ({ title, inputFields, endpoint, logo }) => {
  let params = useParams()
  let [type, setType] = useState('')
  let [refresh, setRefresh] = useState(false)

  let [inputs, setInputs] = useState({})
  function handleIInput(e) {
    setInputs((prev) => {
      prev[e.target.name] = e.target.value;
      return { ...prev }
    })
  }

  useEffect(() => {
    axios.get('http://localhost:2121/' + endpoint + "/" + params._id)
      .then((res) => {
        let { data } = res.data;
        if (data) {
          setInputs(data)
          setType('PUT')
        }
        else {
          setType("POST")
        }
      }).catch((e) => {
        console.log(e.message)
      })
  }, [params, refresh, endpoint])

  return (<div className='postPageContainer'>
    <h1 className='title'>{title}</h1>
    <div className="postLogo">
      {logo}
    </div>
    <div className='postForm'>
      {
        inputFields.map((inp) => {
          return <TextField
            key={inp.name}
            type={inp.password ? 'password' : 'text'}
            label={inp.displayName}
            variant="outlined"
            value={inputs[inp.name] || ''}
            name={inp.name}
            onChange={handleIInput} />
        })
      }
      <Button
        variant='contained'
        onClick={(e) => {
          if (type === "POST") {
            axios.post('http://localhost:2121/' + endpoint, inputs)
              .then(() => {
                setInputs({})
              })
              .catch((e) => {
                console.log(e)
              })
          }
          else if (type === "PUT") {
            axios.put('http://localhost:2121/' + endpoint + "/" + inputs._id, inputs)
          }
          setRefresh((prev) => !prev)
        }} >
        Submit
      </Button>
    </div>
  </div>)
}

export default PostPage
