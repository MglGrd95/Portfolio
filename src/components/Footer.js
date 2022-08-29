import React from 'react'
import './styles/Footer.css'
import Github from './images/Github.png'
import LinkedIn from './images/LinkInd.png'
import Resume from './images/resume.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footLinks'>
        <ul>
          <li><a href='https://github.com/MglGrd95'><img src={Github} alt='github' className='footimg'/> GitHub </a></li>
          <li><a href='https://www.linkedin.com/in/miguel-gerardo'><img src={LinkedIn} alt='linkedin' className='footimg'/>LinkedIn</a></li>
          <li><a href='resume.docx' download><img src={Resume} alt='resume' className='footimg'/>Resume</a></li>
        </ul>
      </div>
      <p>&copy; 2022 Miguel Gerardo | Email: miguelgerardo86@gmail.com | Phone:(817) 484-7727</p>
    </div>
  )
}

export default Footer