import React from 'react'
import './styles/About.css'
import {SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiGit, SiAngularjs, SiGithub} from 'react-icons/si'
import {AiFillApi} from 'react-icons/ai'
import Servicenow from './images/servicenow.png'

const About = () => {
  return (
    <div className='about' id='About'>
      <h1>About Me</h1>
        <p className='me'>Able to code web pages from the ground up using Html, CSS, 
          JavaScript, Node.js and the React framework.
        Fundamental understanding of Web design concepts, cross browser 
        development.
        10+ years of customer service experience grant me the ability to 
        communicate with clients and fellow developers to establish the 
        necessary requirements to complete projects in a professional and 
        timely manner.
        </p>
        <div className='skills'>
          <h3>Skills & Technology</h3>
          <ul>
          <li><SiHtml5 className='icon' id='html'/>Html</li>
          <li><SiCss3 className='icon'id='css'/>CSS</li>
          <li><SiJavascript className='icon' id='javascript'/>JavaScript</li>
          <li><SiReact className='icon' id='react'/>React</li>
          <li><SiNodedotjs className='icon' id='node'/>Node.js</li>
          </ul>
          <ul>
            <li><SiGit className='icon' id='git'/>Git</li>
            <li><SiGithub className='icon' id='github'/>Github</li>
            <li><AiFillApi className='icon' id='api'/>Rest Api's</li>
            <li><SiAngularjs className='icon' id='angular'/>Angular.js</li>
            <li><img src={Servicenow} alt='servicenow' className='service'/>ServiceNow</li>
          </ul>
      </div>
    </div>
  )
}

export default About