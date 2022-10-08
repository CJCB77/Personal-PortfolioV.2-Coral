//React Spring animation
import { useSpring, animated} from 'react-spring'
//Icons
import LinkedinIcon from '../../assets/icons/linkedinMobile.svg'
import GitHubIcon from '../../assets/icons/githubMobile.svg'
//CSS
import "./MobileMenu.css"
import { useRef } from 'react'
//Animation Components
import DownToTop from '../Animations/DownToTop'
import LeftToRight from '../Animations/LeftToRight'


interface Props {
  openMenu: boolean
}

function MobileMenu({openMenu}: Props): JSX.Element {

  const counter = useRef(1)

  //Animation for appearing link from left to right
  const leftRight = useSpring({
    //Make title appear
    to: { transform: "translateX(0px)", opacity: 1 },
    from: { transform: "translateX(-30px)", opacity: 0 },
    config: { duration: 1000 },
    reset: openMenu,
    reverse:!openMenu
  })

  return (
    <div className={openMenu ? 'mobile-menu-outer active' : 'mobile-menu-outer'}>
      <aside className={"mobile-menu"}>
        <DownToTop delay={0} openMenu={openMenu}>
          <h1 className="mobile-logo">
            <span>JC Dev</span>
          </h1>
        </DownToTop>
        <ul className='mobile-menu__list'>
          <li className='mobile-menu__list--item'>
            <a href="#">
              <DownToTop delay={300} openMenu={openMenu}>
                  <span>About</span>
              </DownToTop>
            </a>
          </li>
          <li className='mobile-menu__list--item'>
            <a href="#">
                <DownToTop delay={600} openMenu={openMenu}>
                    <span>Skills</span>
                </DownToTop>
              </a>
          </li>
          <li className='mobile-menu__list--item'>
            <a href="#">
                <DownToTop delay={900} openMenu={openMenu}>
                    <span>Projects</span>
                </DownToTop>
              </a>
          </li>
        </ul>

        <div className="mobile-menu__socials">
          <a href="https://github.com/CJCB77" target={"_blank"}>
            <LeftToRight delay={1200} openMenu={openMenu}>
              <img src={GitHubIcon} className="mobile-menu__icon"/>
            </LeftToRight>
          </a>
          <a href="https://www.linkedin.com/in/johnny-coral/" target={"_blank"}>
            <LeftToRight delay={1200} openMenu={openMenu}>
              <img src={LinkedinIcon} className="mobile-menu__icon"/>
            </LeftToRight>
          </a>
        </div>

        <button className='mobile-menu__btn  btn--light'>Contact me</button>
      </aside>
    </div>
    
  )
}

export default MobileMenu