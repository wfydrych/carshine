import './Footer.sass'
import {NavLink} from 'react-router-dom'
import phone from './img/phone.png'
import mail from './img/mail.png'
import logo from './img/logo_footer.png'
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'

export default function Footer() {
  return (
    <>
      <div className='footer'>
          <img alt='logo' src={logo} className='footer__logo' />
          <div className='footer__contact'>
              <span><img alt='phone' src={phone} /> +41 700 700 700</span>
              <span><img alt='mail' src={mail} /> carshine@gmail.com</span>
          </div>
          <div className='footer__space'></div>
          <div className='footer__menu'>
              <NavLink to='/main'>
                  <div className='footer__menu__button'>Home page</div>
              </NavLink>
              <NavLink to='/gallery'>
                  <div className='footer__menu__button'>Gallery</div>
              </NavLink>
              <NavLink to='/pricing'>
                  <div className='footer__menu__button'>Pricing</div>
              </NavLink>
              <NavLink to='/contact'>
                  <div className='footer__menu__button'>Contact</div>
              </NavLink>
          </div>
          <div className='footer__social'>
              <img alt='facebook' src={facebook} />
              <img alt='instagram' src={instagram} />
          </div>
      </div>
      <div className='author'>Coded by Wojciech Fydrych, designed by Dawid Wojtyczka, Copyright 2021</div>
    </>
  )
}
