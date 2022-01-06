import './Menu.sass'
import {NavLink} from 'react-router-dom'
import Media from 'react-media'
import Main_m from './img/main-m.png'
import Gallery_m from './img/gallery-m.png'
import Price_m from './img/price-m.png'
import Phone_m from './img/phone-m.png'
import logo from './img/logo_menu.png'

export default function Menu() {
  return (
    <div className='menu'>
        <Media query={{ maxWidth: 1000 }}>
            {matches =>
                matches ? (
                <>
                    <NavLink to='/main'>
                        <div className='menu__button'><img alt='main' src={Main_m} /></div>
                    </NavLink>
                    <NavLink to='/gallery'>
                        <div className='menu__button'><img alt='gallery' src={Gallery_m} /></div>
                    </NavLink>
                    <NavLink to='/pricing'>
                        <div className='menu__button'><img alt='price' src={Price_m} /></div>
                    </NavLink>
                    <NavLink to='/contact'>
                        <div className='menu__button'><img alt='contact' src={Phone_m} /></div>
                    </NavLink>
                </>
                ) : (
                <>
                    <img alt='logo' src={logo} className='menu__logo' />
                    <NavLink to='/main'>
                        <div className='menu__button'>HAUPTSEITE</div>
                    </NavLink>
                    <NavLink to='/gallery'>
                        <div className='menu__button'>GALERIE</div>
                    </NavLink>
                    <NavLink to='/pricing'>
                        <div className='menu__button'>PREISE</div>
                    </NavLink>
                    <NavLink to='/contact'>
                        <div className='menu__button'>KONTAKT</div>
                    </NavLink>
                </>
              )
            }
        </Media>
    </div>
  )
}