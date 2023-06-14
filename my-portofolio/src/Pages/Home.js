import React from 'react'
import "../Styles/Home.css"

const Home = () => {
  return (
    <div className='home'>
    <div className='about'>
      <h2> Hi, my name is Junior</h2>
      <div className='prompt'>
      <p> A newbi in the I.T. with a passion for learning and creating </p>
      </div>
    </div>
    <div className='skills'>

    <ol className='list'>
      <li className='item'>
      <h2> Front-End</h2>
      <span>HTML,CSS,Jacascript,Typescript and React</span>

      </li>
      <li className='item'>
      <h2> CompTIA A+ </h2>
        <span>Hardware and software troubleshooting,
              Operating system installation and configuration,
              Networking fundamentals,
              Mobile device support and troubleshooting and
              Security concepts and best practices. I have not finished this course yet.</span>

      </li>
    </ol>

    </div>





    </div>
  )
}

export default Home