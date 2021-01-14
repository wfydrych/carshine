import './Contact.sass'
import React from 'react'
import facebook from './img/facebook-black.png'
import instagram from './img/insta-black.png'
import Map from './map/Map'
import pic from './img/contact_pic.png'

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

export default function Contact() {
    
  return (
    <>
        <div className='logo'>
            <div className='logo__txt'>CONTACT</div>
        </div>
        <div className='contact'>
            <div className='contact__map'>
                <Map location={location} zoomLevel={17} />
            </div>
            <div className='contact__info'>
                <div className='contact__info__text'>
                    <div className='contact__info__text__title'>
                        SHINE FACTORY
                    </div>
                    <div className='contact__info__text__address'>
                        Andrzej Drzewiecki <br />
                        ul. Andrzeja drzewieckiego 21 <br />
                        Chrząszczyżewoszyce <br />
                        Powiat łękołody <br />
                        Tel: +41 847 272 272 <br />
                        Email: carshine@gmail.com <br />
                    </div>
                    <div className='contact__info__text__social'>
                        <img alt='facebook' src={facebook} />
                        <img alt='instagram' src={instagram} />
                    </div>
                </div>
                <img alt='contact-pic' src={pic} className='contact__info__pic'/>
            </div>
        </div>
    </>
  )
}