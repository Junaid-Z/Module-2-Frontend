import React from 'react'
import PostPage from '../../components/PostPage'
import DomainAddIcon from '@mui/icons-material/DomainAdd';

const AddInstitute = () => {
  return (
    <PostPage
      title={"Add Institute"}
      inputFields={
        [
          {
            displayName: "Name",
            name: "name"
          },
          {
            displayName: "Address",
            name: "address"
          },
          {
            displayName: "Short Name",
            name: "shortName"
          },
          {
            displayName: "Telephone",
            name: "tel"
          },
        ]
      }
      endpoint={"institutes"}
      logo={<DomainAddIcon className='studentLogo' />} />
  )
}

export default AddInstitute