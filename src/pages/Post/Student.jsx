import axios from 'axios';
import React, { useState } from 'react'

const Student = () => {
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
				First Name:
				<input value={inputs.firstName || ''} name='firstName' onChange={handleIInput} />
			</label>
			<label>
				Last Name:
				<input value={inputs.lastName || ''} name='lastName' onChange={handleIInput} />
			</label>
			<label>
				Email:
				<input value={inputs.email || ''} name='email' onChange={handleIInput} />
			</label>
			<label>
				Password:
				<input value={inputs.password || ''} name='password' type='password' onChange={handleIInput} />
			</label>
			<label>
				Contact:
				<input value={inputs.contact || ''} name='contact' onChange={handleIInput} />
			</label>
			<button
				onClick={(e) => {
					axios.post('http://localhost:2121/students', inputs)
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

export default Student
