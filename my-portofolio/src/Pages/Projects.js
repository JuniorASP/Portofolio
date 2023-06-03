import React from 'react'
import projectItem from '../components/projectItem';
import { projectList } from '../projectList.js';
import '../Styles/Project.css'

const Project = () => {
  return (
    <div className='projects'>
    <h1>My Projects</h1>
    <div className='projectList'>
    {projectList.map((project)=>{
      return <projectItem name={project.Name} image={project.Image}/>
    })}
    </div>

    </div>
  )
}

export default Project