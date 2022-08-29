import React from 'react'
import './styles/Home.css'
import Github from './images/Github.png'
import LinkedIn from './images/LinkInd.png'
import Resume from './images/resume.png'

const Home = () => {
  return (
    <div className='home' id='Home'>
      <h1 className='h1'>Hello I'm Miguel</h1>
      <h3>Welcome to my portfolio!</h3>
      <div className='footLinks'>
        <ul>
          <li><a href='https://github.com/MglGrd95' className='linka'><img src={Github} alt='github' className='linkimg' /> GitHub </a></li>
          <li><a href='https://www.linkedin.com/in/miguel-gerardo'><img src={LinkedIn} alt='linkedin' className='linkimg' />LinkedIn</a></li>
          <li><a href='/files/resume.docx' download><img src={Resume} alt='resume' className='linkimg'/>Resume</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Home