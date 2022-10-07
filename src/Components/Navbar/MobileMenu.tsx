//Icons
import LinkedinIcon from '../../assets/icons/linkedinMobile.svg'
import GitHubIcon from '../../assets/icons/githubMobile.svg'
//CSS
import "./MobileMenu.css"

interface Props {
  openMenu: boolean
}

function MobileMenu({openMenu}: Props): JSX.Element {
  return (
    <div className={openMenu ? 'mobile-menu-outer active' : 'mobile-menu-outer'}>
      <aside className={"mobile-menu"}>
        <h1 className="mobile-logo">JC Dev</h1>

        <ul className='mobile-menu__list'>
          <li className='mobile-menu__list--item'>
            <a href="#">About</a>
          </li>
          <li className='mobile-menu__list--item'>
            <a href="#">Skills</a>
          </li>
          <li className='mobile-menu__list--item'>
            <a href="#">Projects</a>
          </li>
        </ul>

        <div className="mobile-menu__socials">
          <a href="#">
            <img src={GitHubIcon} className="mobile-menu__icon"/>
          </a>
          <a href="#">
            <img src={LinkedinIcon} className="mobile-menu__icon"/>
          </a>
        </div>

        <button className='mobile-menu__btn  btn--light'>Contact me</button>
      </aside>
    </div>
    
  )
}

export default MobileMenu