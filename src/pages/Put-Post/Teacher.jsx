import React from 'react'
import PostPage from '../../components/PostPage'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const AddTeacher = () => {
	return (
		<PostPage
			title={"Add Teacher"}
			inputFields={
				[
					{
						displayName: "Name",
						name: "name"
					},
					{
						displayName: "Course",
						name: "course"
					},
					{
						displayName: "Contact",
						name: "contact"
					}
				]
			}
			endpoint={"teachers"}
			logo={<AssignmentIndIcon className='studentLogo' />} />
	)
}

export default AddTeacher