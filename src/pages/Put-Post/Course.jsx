import React from 'react'
import PostPage from '../../components/PostPage'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const AddCourse = () => {
	return (
		<PostPage
			title={"Add Course"}
			inputFields={
				[
					{
						displayName: "Name",
						name: "name"
					},
					{
						displayName: "Duration",
						name: "duration"
					},
					{
						displayName: "Fees",
						name: "fees"
					},
					{
						displayName: "Short Name",
						name: "shortName"
					}
				]
			}
			endpoint={"courses"}
			logo={<AutoStoriesIcon className='studentLogo' />} />
	)
}

export default AddCourse