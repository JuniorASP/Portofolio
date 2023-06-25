 import React from 'react'
 import{useParams }from 'react-router-dom'
 import {projectList} from '../projectList'
 import { GoMarkGithub } from "react-icons/go";
 import '../Styles/ProjectDisplay.css'

 
 const ProjectDisplay = () => {
    const {id}= useParams()
    const project = projectList[id]

    
    const goToGithub =() =>{
      window.open(project.Github, '_blank');

    }
   return (
     <div className='project'>
     <h1>{project.Name}</h1>
     <img src={project.Image}/>
     <p><b>Skills:</b> {project.Skills}</p>
     <h3>See the code bellow </h3>
     <GoMarkGithub onClick={()=> goToGithub()} size={50} className='git'/>
    



     </div>
   )
 }
 
 export default ProjectDisplay