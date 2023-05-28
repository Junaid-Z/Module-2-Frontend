import React from 'react'
import PostPage from '../../components/PostPage'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const AddStudent = () => {
	return (
		<PostPage
			title={"Add Student"}
			inputFields={
				[
					{
						displayName: "First Name",
						name: "firstName"
					},
					{
						displayName: "Last Name",
						name: "lastName"
					},
					{
						displayName: "Email",
						name: "email"
					},
					{
						displayName: "Password",
						name: "password",
						password: true
					},
					{
						displayName: "Contact",
						name: "contact"
					}
				]
			}
			endpoint={"students"}
			logo={<PersonAddIcon className='studentLogo' />} />
	)
}

export default AddStudent