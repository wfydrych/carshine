import './Topbar.sass'
import phone from './img/phone.png'
import mail from './img/mail.png'
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbar__contact'>
            <span><img alt='phone' src={phone} /> 078 302 47 11</span>
            <span><img alt='mail' src={mail} /> info@shinefactorych.com</span>
        </div>
        <div className='topbar__social'>
            <a href='https://www.facebook.com/shinefactorych' target='_blank' rel='noreferrer' alt='facebook'><img alt='facebook' src={facebook} /></a>
            <a href='https://www.instagram.com/shinefactorych/' target='_blank' rel='noreferrer' alt='instagram'><img alt='instagram' src={instagram} /></a>
        </div>
    </div>
  )
}

export default Topbar