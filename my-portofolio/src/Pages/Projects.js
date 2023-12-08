import React from 'react'
import { projectList } from '../projectList.js';
import '../Styles/Project.css'
import ProjectItem from '../components/projectItem.js'

const Project = () => {
  return (
    <div className='projects'>
    <h1>My Projects</h1>
    <div className='projectList'>
    {projectList.map((project)=>{
      return <ProjectItem name={project.Name} 
      image={project.Image} 
      id={project.id} /> 
    })}
    </div>

    </div>
  )
}

export default Project