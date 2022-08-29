import './styles/Navbar.css'
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <div className='navbar'>
          <nav>
            <ul>
            <li><Link to='Home' spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
            <li><Link to='About' spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
            <li><Link to='Projects' spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></li>
            <li><Link to='Contact' spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
            </ul>
            </nav>
    </div>
  )
}

export default Navbar