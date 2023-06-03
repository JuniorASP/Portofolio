import React from 'react'
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import '../Styles/Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
    <div className='socialMedia'>
    <GoMarkGithub/>
    <GrLinkedin/>
    </div>
    <p>
        &copy; 2023 Junior Alexander Suarez Peralta
    </p>
    </div>
  )
}

export default Footer