import React from 'react'
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";
import '../Styles/Footer.css'


const Footer = () => {

  const openGithubPage = () => {
    window.open('https://github.com/JuniorAsp', '_blank');
  };
  const linkinPage = () => {
    window.open('https://www.linkedin.com/in/junior-suarez-peralta-737134264/', '_blank');
  };
  return (
    <div className='footer'>
    <div className='socialMedia'>
    <GoMarkGithub onClick={openGithubPage} />
    <GrLinkedin onClick={linkinPage}/>
    </div>
    <p>
        &copy; 2023 Junior Alexander Suarez Peralta
    </p>
    </div>
  )
}

export default Footer