import './Contact.sass'
import facebook from './img/facebook-black.png'
import instagram from './img/insta-black.png'

export default function Contact() {
  return (
    <>
        <div className='logo'>
            <div className='logo__txt'>CONTACT</div>
        </div>
        <div className='contact'>
        <div className='contact__map'></div>
        <div className='contact__info'>
            <div className='contact__info__title'>
                SHINEFACTORY
            </div>
            <div className='contact__info__address'>
                Andrzej Drzewiecki <br />
                ul. Andrzeja drzewieckiego 21 <br />
                Chrząszczyżewoszyce <br />
                Powiat łękołody <br />
                Tel: +41 847 272 272 <br />
                Email: carshine@gmail.com <br />
            </div>
            <div className='contact__info__social'>
                <img alt='facebook' src={facebook} />
                <img alt='instagram' src={instagram} />
            </div>
        </div>
        </div>
    </>
  )
}