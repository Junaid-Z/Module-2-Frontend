import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditTeacher = () => {
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
		axios.get('http://localhost:2121/teachers/' + params._id)
			.then((res) => {
				setData(res.data.data)
			}).catch((e) => {
				console.log(e.message)
			})
	}, [params, refresh])
	console.log(data)
	return (<div className='studentPageContainer'>
		<div className='student' key={data._id}>
			<div>Name:  <input value={data.name} name='name' onChange={handleIInput} /></div>
			<div>Course:  <input value={data.course} name='course' onChange={handleIInput} /></div>
			<div>Contact:  <input value={data.contact} name='contact' onChange={handleIInput} /></div>
			<button onClick={() => {
				axios.put('http://localhost:2121/teachers/' + data._id, data)
				setRefresh((prev) => !prev)
			}}>Update</button>
		</div>
	</div>)
}

export default EditTeacher
