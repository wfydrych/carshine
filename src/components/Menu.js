import './Menu.sass'
import {NavLink} from 'react-router-dom'

export default function Menu() {
  return (
    <div className='menu'>
        <NavLink to='/main'>
            <div className='menu__button'>
                MAIN PAGE
            </div>
        </NavLink>
        <NavLink to='/gallery'>
            <div className='menu__button'>
                GALLERY
            </div>
        </NavLink>
        <NavLink to='/pricing'>
            <div className='menu__button'>
                PRICING
            </div>
        </NavLink>
        <NavLink to='/contact'>
            <div className='menu__button'>
                CONTACT
            </div>
        </NavLink>
    </div>
  )
}