import './Menu.sass'
import {NavLink} from 'react-router-dom'
import Main_m from './img/main-m.png'
import Gallery_m from './img/gallery-m.png'
import Price_m from './img/price-m.png'
import Phone_m from './img/phone-m.png'

export default function Menu() {
  return (
    <div className='menu'>
        <NavLink to='/main'>
            <div className='menu__button'>
                {(window.innerWidth<1000) ? <img alt='main' src={Main_m} /> : 'MAIN PAGE'}
            </div>
        </NavLink>
        <NavLink to='/gallery'>
            <div className='menu__button'>
                {(window.innerWidth<1000) ? <img alt='gallery' src={Gallery_m} /> : 'GALLERY'}
            </div>
        </NavLink>
        <NavLink to='/pricing'>
            <div className='menu__button'>
                {(window.innerWidth<1000) ? <img alt='price' src={Price_m} /> : 'PRICING'}
            </div>
        </NavLink>
        <NavLink to='/contact'>
            <div className='menu__button'>
                {(window.innerWidth<1000) ? <img alt='contact' src={Phone_m} /> : 'CONTACT'}
            </div>
        </NavLink>
    </div>
  )
}