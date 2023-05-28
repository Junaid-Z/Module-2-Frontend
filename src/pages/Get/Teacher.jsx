import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomizedTables from '../../components/Table'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BasicModal from '../../components/Modal';
import Button from '@mui/material/Button'

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

  let [modalData, setModalData] = useState({ state: false, data: {} })
  return (
    <div className='studentPageContainer'>
      <CustomizedTables rows={data}
        cols={[
          { displayName: "Name", value: "name", data: true },
          { displayName: "Course", value: "course", data: true },
          { displayName: "Contact", value: "contact", data: true },
          { displayName: "Delete", value: "delete", data: false },
          { displayName: "Update", value: "update", data: false },
        ]}
        extra={[
          (row) => {
            return <EditIcon className='myIcon' onClick={() => {
              navigation('/addTeacher/' + row._id)
            }} />
          },
          (row) => {
            return <DeleteIcon className='myIcon' onClick={() => {
              setModalData({
                state: true,
                data: row
              })
            }} />
          }
        ]}
      />
      <BasicModal open={modalData.state}
        handleClose={() => { setModalData((prev) => ({ ...prev, state: false })) }}
        heading={`Delete teacher ${modalData.data.name} ?`}
        main={<div className='modalButtonHolder'>
          <Button variant="contained" onClick={() => {
            setModalData((prev) => ({ ...prev, state: false }))
          }}>Cancel</Button>

          <Button variant="contained" onClick={() => {
            axios.delete('http://localhost:2121/teachers/' + modalData.data._id).catch((e) => { console.log(e) })
            setData((prev) => {
              prev = prev.filter((course) => course._id !== modalData.data._id)
              console.log(prev)
              return [...prev]
            })
            setModalData((prev) => ({ ...prev, state: false }))
          }}>Confirm</Button>

        </div>}
      />

      {/* {data.map((d) => <div className='student' key={d._id}>
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
      </div>)} */}
    </div>
  )
}

export default TeacherPage
