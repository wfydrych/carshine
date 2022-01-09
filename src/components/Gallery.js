import './Gallery.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import p1 from './img/gallery/1.jpeg'
import p2 from './img/gallery/2.jpeg'
import p3 from './img/gallery/3.jpeg'
import p4 from './img/gallery/4.jpeg'
import p5 from './img/gallery/5.jpeg'
import p6 from './img/gallery/6.jpeg'
import p7 from './img/gallery/7.jpeg'
import p8 from './img/gallery/8.jpeg'
import p9 from './img/gallery/9.jpeg'
import p10 from './img/gallery/10.jpeg'
import p11 from './img/gallery/11.jpeg'
import p12 from './img/gallery/12.jpeg'
import p13 from './img/gallery/13.jpeg'
import p14 from './img/gallery/14.jpeg'
import p15 from './img/gallery/15.jpeg'
import p16 from './img/gallery/16.jpeg'
import p17 from './img/gallery/17.jpeg'
import p18 from './img/gallery/18.jpeg'
import p19 from './img/gallery/19.jpeg'
import p20 from './img/gallery/20.jpeg'
import p21 from './img/gallery/21.jpeg'
import p22 from './img/gallery/22.jpeg'
import p23 from './img/gallery/23.jpeg'
import p24 from './img/gallery/24.jpeg'
import p25 from './img/gallery/25.jpeg'
import p26 from './img/gallery/26.jpeg'
import p27 from './img/gallery/27.jpeg'
import p28 from './img/gallery/28.jpeg'

const Gallery = () => {
  return (
      <>
        <div className='logo'>
            <div className='logo__txt'>GALERIE</div>
        </div>
        <div className='gallery'>
            <div className='gallery__title'>GALERIE</div>
            <div className='gallery__container'>
                <div className='gallery__container__div'>
                    <Carousel dynamicHeight={true} showArrows={true}>
                        <div>
                            <img src={p1} alt="Audi A6"/>
                        </div>
                        <div>
                            <img src={p2} alt="Audi A6"/>
                        </div>
                        <div>
                            <img src={p3} alt="Audi A6"/>
                        </div>
                        <div>
                            <img src={p4} alt="Audi A6"/>
                        </div>
                        <div>
                            <img src={p5} alt="Audi A6"/>
                        </div>
                        <div>
                            <img src={p6} alt="Audi A6"/>
                        </div>
                        <div>
                            <img src={p7} alt="Audi A6"/>
                        </div>
                        <div>
                            <img src={p8} alt="Audi A6"/>
                        </div>
                    </Carousel>
                </div>
                <div className='gallery__container__div'>
                    <Carousel dynamicHeight={true} showArrows={true}>
                        <div>
                            <img src={p9} alt="BMW 5-er"/>
                        </div>
                        <div>
                            <img src={p10} alt="BMW 5-er"/>
                        </div>
                        <div>
                            <img src={p11} alt="BMW 5-er"/>
                        </div>
                        <div>
                            <img src={p12} alt="BMW 5-er"/>
                        </div>
                        <div>
                            <img src={p13} alt="BMW 5-er"/>
                        </div>
                        <div>
                            <img src={p14} alt="BMW 5-er"/>
                        </div>
                    </Carousel>
                </div>
                <div className='gallery__container__div'>
                    <Carousel dynamicHeight={true} showArrows={true}>
                        <div>
                            <img src={p15} alt="BMW 5-er"/>
                        </div>
                        <div>
                            <img src={p16} alt="BMW 5-er"/>
                        </div>
                        <div>
                            <img src={p17} alt="BMW 5-er"/>
                        </div>
                        <div>
                            <img src={p18} alt="BMW 5-er"/>
                        </div>
                        <div>
                            <img src={p19} alt="BMW 5-er"/>
                        </div>
                    </Carousel>
                </div>
                <div className='gallery__container__div'>
                    <Carousel dynamicHeight={true} showArrows={true}>
                        <div>
                            <img src={p20} alt="Ford Focus"/>
                        </div>
                        <div>
                            <img src={p21} alt="Ford Focus"/>
                        </div>
                        <div>
                            <img src={p22} alt="Ford Focus"/>
                        </div>
                        <div>
                            <img src={p23} alt="Ford Focus"/>
                        </div>
                    </Carousel>
                </div>
                <div className='gallery__container__div'>
                    <Carousel dynamicHeight={true} showArrows={true}>
                        <div>
                            <img src={p24} alt="Mercedes E-Class"/>
                        </div>
                        <div>
                            <img src={p25} alt="Mercedes E-Class"/>
                        </div>
                        <div>
                            <img src={p26} alt="Mercedes E-Class"/>
                        </div>
                        <div>
                            <img src={p27} alt="Volkswagen Golf"/>
                        </div>
                        <div>
                            <img src={p28} alt="Volkswagen Golf"/>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery