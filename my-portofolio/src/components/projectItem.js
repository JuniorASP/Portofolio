import React from 'react'

const projectItem = ({name, image}) => {
  return (
    <div className='projectItem'>
        <div style={{background: `url(${image})`}} className='bgImage'/>
        <h1>{name}</h1>
        
    </div>
  )
}

export default projectItem