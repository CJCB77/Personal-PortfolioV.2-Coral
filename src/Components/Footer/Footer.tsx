//Css
import './Footer.css'
//Hooks
import useIsMobile from '../../CustomHooks/useIsMobile'
//Images
import gears from '../../assets/icons/logo-gears.svg'
import gearsDesktop from '../../assets/icons/logo-gears-desktop.svg'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
  
  const isMobile = useIsMobile(); 

  return (
    <section className='footer'>
      <div className='footer__main'>
        <div className='footer__logo'>
          <img src={isMobile ? gears : gearsDesktop} alt="" />
          <h2>
            <Link to='/'>JC Dev</Link>
          </h2>
        </div>
        <div className='footer__links'>
          <ul className='links__col'>
            <li className='links__col--title'>Links</li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <HashLink to="/#skills">Skills</HashLink>
            </li>
            <li>
              <HashLink to="/#projects">Projects</HashLink>
            </li>
          </ul>
          <ul className='links__col'>
            <li className='links__col--title'>Social</li>
            <li>
              <a href="https://www.linkedin.com/in/johnny-coral/" target="_blank" >Linkedin</a>
            </li>
            <li>
              <a href="https://github.com/CJCB77" target="_blank" >Github</a>
            </li>
          </ul>
          <ul className='links__col'>
            <li className='links__col--title'>Contact</li>
            <li>coral.johnny.2@gmail.com</li>
            <li>+593 99 414 45 69</li>
          </ul>
        </div>
      </div>
      <div className='footer__copyright'>
        <hr />
        <span>© 2022 - Johnny Coral. All Rights Reserved</span>
      </div>
    </section>
  )
}

export default Footer
