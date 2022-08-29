import React from 'react'
import './styles/Projects.css'
import Flower from './images/flowershop.PNG'
import Bike from './images/bike.PNG'
import Foto from './images/rubino.PNG'
import Port from './images/portfolio.PNG'

const Projects = () => {
  return (
    <div className='projects' id='Projects'>
      <h1 className='ph1'>Projects</h1>
      <div className='project'>
        <ul>
        <li><img src={Port} alt='portfolio' className='proimg'/>
          My Portfolio
          <div className='prolinks' id='portfolio'><a href='https://github.com/MglGrd95/Portfolio' >Source Code</a></div>
          </li>
          <li><img src={Flower} alt='Flower' className='proimg'/>
          Flower Website
          <div className='prolinks'><a href='https://mglgrd95.github.io/lilysflowershop/' >Website</a><a href='https://github.com/MglGrd95/lilysflowershop' >Source Code</a></div>
          </li>
          <li><img src={Bike} alt='Bike' className='proimg'/>
          Bike Website
          <div className='prolinks'><a href='https://mglgrd95.github.io/bikeshop/' >Website</a><a href='https://github.com/MglGrd95/bikeshop' >Source Code</a></div>
          </li>
          <li><img src={Foto} alt='foto' className='proimg'/>
          Photo Portfolio
          <div className='prolinks'><a href='https://mglgrd95.github.io/Photographyportfolio/' >Website</a><a href='https://github.com/MglGrd95/Photographyportfolio' >Source Code</a></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Projects