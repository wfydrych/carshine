import './Topbar.sass'
import phone from './img/phone.png'
import mail from './img/mail.png'
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbar__contact'>
            <span><img alt='phone' src={phone} /> +41 700 700 700</span>
            <span><img alt='mail' src={mail} /> carshine@gmail.com</span>
        </div>
        <div className='topbar__social'>
            <img alt='facebook' src={facebook} />
            <img alt='instagram' src={instagram} />
        </div>
    </div>
  )
}
