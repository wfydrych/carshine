import './Footer.sass'
import phone from './img/phone.png'
import mail from './img/mail.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer__contact'>
            <span><img alt='phone' src={phone} /> +41 700 700 700</span>
            <span><img alt='mail' src={mail} /> carshine@gmail.com</span>
        </div>
    </div>
  )
}
