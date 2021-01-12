import './Main.sass'
import ad1 from './img/section1_1.png'
import ad2 from './img/section1_2.png'
import ad3 from './img/section1_3.png'

export default function Main() {
  return (
    <>
        <div className='main'></div>
        <div className='introduce'>
            <div className='corner'></div>
            <div className='introduce__title'>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING</div>
            <div className='introduce__advertbox'>
                <div className='introduce__advertbox__advert'>
                    <img alt='pic1' src={ad1} />
                    <div className='introduce__advertbox__advert__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
                    </div>
                </div>
                <div className='introduce__advertbox__advert'>
                    <img alt='pic1' src={ad2} />
                    <div className='introduce__advertbox__advert__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
                    </div>
                </div>
                <div className='introduce__advertbox__advert'>
                    <img alt='pic1' src={ad3} />
                    <div className='introduce__advertbox__advert__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
                    </div>
                </div>
            </div>
            <div className='corner'></div>
        </div>
        <div className='offer'>
            <div className='offer__backgr'>
                <div className='offer__backgr__title'>
                    LOREM IPSUM DOLOR SIT
                </div>
                <div className='offer__backgr__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, 
                    scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. 
                    Phasellus pharetra nulla ac diam.
                </div>
            </div>
            <div className='offer__textbox'>
                <div className='offer__textbox__title'>
                    LOREM IPSUM DOLOR SIT
                </div>
                <div className='offer__textbox__container'>
                    <div className='offer__textbox__container__box'>
                        <div className='offer__textbox__container__box__rectangle'></div>
                        <div className='offer__textbox__container__box__text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
                        </div>
                    </div>
                    <div className='offer__textbox__container__box'>
                        <div className='offer__textbox__container__box__rectangle'></div>
                        <div className='offer__textbox__container__box__text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
                        </div>
                    </div>
                    <div className='offer__textbox__container__box'>
                        <div className='offer__textbox__container__box__rectangle'></div>
                        <div className='offer__textbox__container__box__text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottomtext'>
            LOREM IPSUM DOLOR SIT
        </div>
    </>
  )
}
