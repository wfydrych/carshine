import './Footer.sass'
import {NavLink} from 'react-router-dom'
import phone from './img/phone.png'
import mail from './img/mail.png'
import logo from './img/logo_footer.png'
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'

const Footer = () => {
  return (
    <>
      <div className='footer'>
          <img alt='logo' src={logo} className='footer__logo' />
          <div className='footer__contact'>
              <span><img alt='phone' src={phone} /> 078 302 47 11</span>
              <span><img alt='mail' src={mail} /> info@shinefactorych.com</span>
          </div>
          <div className='footer__space'></div>
          <div className='footer__menu'>
              <NavLink to='/main'>
                  <div className='footer__menu__button'>Hauptseite</div>
              </NavLink>
              <NavLink to='/gallery'>
                  <div className='footer__menu__button'>Galerie</div>
              </NavLink>
              <NavLink to='/pricing'>
                  <div className='footer__menu__button'>Preise</div>
              </NavLink>
              <NavLink to='/contact'>
                  <div className='footer__menu__button'>Kontakt</div>
              </NavLink>
          </div>
          <div className='footer__social'>
                <a href='https://www.facebook.com/shinefactorych' target='_blank' rel='noreferrer' alt='facebook'><img alt='facebook' src={facebook} /></a>
                <a href='https://www.instagram.com/shinefactorych/' target='_blank' rel='noreferrer' alt='instagram'><img alt='instagram' src={instagram} /></a>
          </div>
      </div>
      <div className='author'>Coded by <a target="_blank" rel='noreferrer' href="http://wojciechfydrych.com/">Wojciech Fydrych</a>, designed by Dawid Wojtyczka, Copyright 2021</div>
    </>
  )
}

export default Footer