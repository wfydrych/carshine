import './Contact.sass'
import React from 'react'
import facebook from './img/facebook-black.png'
import instagram from './img/insta-black.png'
import pic from './img/logo_menu.png'

const Contact = () => {
  return (
    <>
        <div className='logo'>
            <div className='logo__txt'>KONTAKT</div>
        </div>
        <div className='contact'>
            <div className='contact__map'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.4467529120434!2d8.96325941602051!3d47.4617229791754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aeb2d92234bf7%3A0x57289272ac772615!2sHilagstrasse%2026%2C%208360%20Eschlikon!5e0!3m2!1sen!2sch!4v1641487131797!5m2!1sen!2sch"
                    title="ShineFactory"
                    width="100%"
                    height="550px"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
            </div>
            <div className='contact__info'>
                <div className='contact__info__text'>
                    <div className='contact__info__text__title'>
                        SHINE FACTORY
                    </div>
                    <div className='contact__info__text__address'>
                        Jimmy Strzecha <br />
                        Hilagstrasse 26 <br />
                        8360 Eschlikon Tg <br />
                        Handy: 078 302 47 11  <br />
                        Email: info@shinefactorych.com <br />
                    </div>
                    <div className='contact__info__text__social'>
                        <a href='https://www.facebook.com/shinefactorych' target='_blank' rel='noreferrer' alt='facebook'><img alt='facebook' src={facebook} /></a>
                        <a href='https://www.instagram.com/shinefactorych/' target='_blank' rel='noreferrer' alt='instagram'><img alt='instagram' src={instagram} /></a>
                    </div>
                </div>
                <img alt='contact-pic' src={pic} className='contact__info__pic'/>
            </div>
        </div>
    </>
  )
}

export default Contact