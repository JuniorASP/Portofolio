import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { IoIosSchool } from "react-icons/io";
import { FaUserSecret } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";



import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className='experience'>

    <VerticalTimeline lineColor='#040d22'>
      <VerticalTimelineElement 
      className="vertical-timeline-element--education"
      date='2006 - 2010'
      iconStyle={{background:'#040d22', color: '#fff'}}
      icon={<IoIosSchool/>}>
      <h3 className='vertical-timeline-element-title'> Pascal College Zuid, Noord-Holland Zaandam. </h3>
      <p>High School Diploma</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement 
      className="vertical-timeline-element--education"
      date='2011 - 2012'
      iconStyle={{background:'#040d22', color: '#fff'}}
      icon={<IoIosSchool/>}>
      <h3 className='vertical-timeline-element-title'> Roc van Amsterdam, Noord-Holland Zaandam. </h3>
      <p>College MBO Diploma</p>
      </VerticalTimelineElement>


      <VerticalTimelineElement 
      className="vertical-timeline-element--education"
      date='2016 - 2019'
      iconStyle={{background:'#040d22', color: '#fff'}}
      icon={<FaUserSecret/>}>
      <h3 className='vertical-timeline-element-title'> Security Superviser, Securitas </h3>
      <p>I worked at a Datacentre for 5 years  </p>
      </VerticalTimelineElement>


      <VerticalTimelineElement 
      className="vertical-timeline-element--education"
      date='2020 -'
      iconStyle={{background:'#FFD700', color: '#fff'}}
      icon={<FaBriefcase/>}>
      <h3 className='vertical-timeline-element-title'> Security and counselor </h3>
      <p>I have commenced working as a supervisor and security officer for homeless youth at various locations</p>
      </VerticalTimelineElement>


      <VerticalTimelineElement 
      className="vertical-timeline-element--education"
      date='2022 -'
      iconStyle={{background:'#FFD700', color: '#fff'}}
      icon={<IoIosSchool/>}>
      <h3 className='vertical-timeline-element-title'> Front end web Development, TeamThreeHouse </h3>
      <p>Techdegree in front end development. HTML Javascript Css and React.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement 
      className="vertical-timeline-element--education"
      date='2022 -'
      iconStyle={{background:'#040d22', color: '#fff'}}
      icon={<IoIosSchool/>}>
      <h3 className='vertical-timeline-element-title'> Comptia A+, Udemy </h3>
      <p>i acquired knowledge in Hardware and software troubleshooting,
              Operating system installation and configuration,
              Networking fundamentals,
              Mobile device support and troubleshooting and
              Security concepts and best practices</p>
      </VerticalTimelineElement>
      
    
      
    </VerticalTimeline>

    
    

    </div>
  )
}

export default Experience