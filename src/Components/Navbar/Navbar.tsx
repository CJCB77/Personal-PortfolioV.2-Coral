import React, { useState } from 'react'
import { useSpring, animated} from 'react-spring'
//Components
import MobileMenu from './MobileMenu'
//Custom Hooks
import useIsMobile from '../../CustomHooks/useIsMobile'
//Icons
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import LinkedinIcon from '../../assets/icons/linkedin.svg'
import GitHubIcon from '../../assets/icons/github.svg'
//CSS
import './Navbar.css'

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
    <React.Fragment>
    {/*If mobile viewport display hamburguer menu icon fixed */}
    {useIsMobile() &&  <animated.div style={springProps} className="hamburguer-wrap">
      {/* Toggle menu icon open or close */}
      {openMenu ? <AiOutlineClose className="hamburguer" onClick={toggleMenu} color={"#6CD0E7"}/> : 
        <HiMenuAlt4 className="hamburguer" onClick={toggleMenu} />}
        
    </animated.div>}
    <animated.nav style={springProps} className="nav"> 
          <div className='nav__primary-section'>
            <h1 className='logo'>JC Dev</h1>
            {!useIsMobile() && <ul className='nav__list'>
              <li className='nav__list--item'>
                <a href="#">About</a>
              </li>
              <li className='nav__list--item'>
                <a href="#">Skills</a>
              </li>
              <li className='nav__list--item'>
                <a href="#">Projects</a>
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

            <button className='nav__btn-contact  btn--light'>Contact me</button>        
          </div>
          } 
    </animated.nav>
    {/*If mobile viewport display mobile menu */}
    {useIsMobile() && <MobileMenu openMenu={openMenu} />}
    </React.Fragment>
  )
}

export default Navbar