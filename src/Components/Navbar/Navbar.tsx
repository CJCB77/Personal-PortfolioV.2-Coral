import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
//Custom Hooks
import useIsMobile from '../../CustomHooks/useIsMobile'
//Icons
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import GitHubIcon from '../../assets/icons/github.svg'
import LinkedinIcon from '../../assets/icons/linkedin.svg'
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
    config: { duration: 1200 }
  })

  //Toggle the menu on mobile devices
  function toggleMenu(){
    setOpenMenu(!openMenu)
  }

  return (
    <animated.nav style={springProps} className="nav"> 
          <div className='nav__primary-section'>
            <h1 className='logo'>JC Dev</h1>
            <ul className='nav__list'>
              <li className='nav__list--item'>
                <a href="#">About</a>
              </li>
              <li className='nav__list--item'>
                <a href="#">Skills</a>
              </li>
              <li className='nav__list--item'>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          <div className='nav__secondary-section'>
            <div className='nav__link-icons'>
              <a href="#">
                <img src={GitHubIcon} className="nav__icon"/>
              </a>
              <a href="#">
                <img src={LinkedinIcon} className="nav__icon"/> 
              </a>
            </div>

            <button className='nav__btn-contact  btn--light'>Contact me</button>        
          </div>

          {/* Use custom hook to check if the device is mobile */}
          {useIsMobile()  &&  (openMenu ? <AiOutlineClose className='nav__menu--icon' onClick={toggleMenu}/> :
            <BiMenuAltRight className='nav__menu--icon' onClick={toggleMenu}/>)
          } 
    </animated.nav>
  )
}

export default Navbar