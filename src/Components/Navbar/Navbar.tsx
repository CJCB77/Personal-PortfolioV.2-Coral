import { useState } from 'react'
import { useSpring, animated} from 'react-spring'
//Components
import MobileMenu from './MobileMenu'
import Hamburguer from './Hamburguer'
//Custom Hooks
import useIsMobile from '../../CustomHooks/useIsMobile'
//Icons
import LinkedinIcon from '../../assets/icons/linkedin.svg'
import GitHubIcon from '../../assets/icons/github.svg'
//CSS
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Navbar(): JSX.Element {
  //State for toggling the menu on mobile devices
  const [openMenu,setOpenMenu] = useState<boolean>(false)

  //Spring animation properties for navbar
  const springProps = useSpring({ 
    //Make nav appear
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    config: { duration: 1000 }
  })

  //Toggle the menu on mobile devices
  function toggleMenu(){
    setOpenMenu(!openMenu)
  }

  return (
    <header id='home'>
      {/*If mobile viewport display hamburguer menu icon wich is fixed */}
      {useIsMobile() &&  <Hamburguer openMenu={openMenu} toggleMenu={toggleMenu}/>}

      <animated.nav style={springProps} className="nav"> 
            <div className='nav__primary-section'>
              <h1 className='logo'>
                <Link to='/'>JC Dev</Link>
              </h1>
              {!useIsMobile() && <ul className='nav__list'>
                <li className='nav__list--item'>
                  <HashLink to="/#about">About</HashLink>
                </li>
                <li className='nav__list--item'>
                  <HashLink to="/#skills">Skills</HashLink>
                </li>
                <li className='nav__list--item'>
                  <HashLink to="/#projects">Projects</HashLink>
                </li>
              </ul>}
            </div>

            {!useIsMobile() && <div className='nav__secondary-section'>
              <div className='nav__link-icons'>
                <a href="https://github.com/CJCB77" target={"_blank"}>
                  <img src={GitHubIcon} className="nav__icon"/> 
                </a>
                <a href="https://www.linkedin.com/in/johnny-coral/" target={"_blank"}>
                  <img src={LinkedinIcon} className="nav__icon"/> 
                </a>
              </div>

              <HashLink to="/#contact" className='nav__btn-contact  btn--light'>Contact me</HashLink>        
            </div>
            } 
      </animated.nav>
      {/*If mobile viewport display mobile menu */}
      {useIsMobile() && <MobileMenu openMenu={openMenu} toggleMenu={toggleMenu} />}
    </header>
  )
}

export default Navbar