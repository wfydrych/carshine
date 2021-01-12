import './Pricing.sass'

export default function Pricing() {
  return (
    <>
        <div className='logo'>
            <div className='logo__txt'>PRICING</div>
        </div>
        <div className='pricing'>
            <div className='pricing__title'>LOREM IPSUM</div>
            <div className='pricing__container'>
                <div className='pricing__container__pricebox'>
                    <div className='pricing__container__pricebox__price'>
                        NA BIEDNO 150$
                    </div>
                    <div className='pricing__container__pricebox__description'>
                        Lorem ipsum dolor sit ametconsectetur adipiscing elit. Proin nibh augue, 
                        suscipit a, scelerisque sed, lacinia in, mi.
                    </div>
                </div>
                <div className='pricing__container__pricebox'>
                    <div className='pricing__container__pricebox__price'>
                        SREDNIO 250$
                    </div>
                    <div className='pricing__container__pricebox__description'>
                        Lorem ipsum dolor sit ametconsectetur adipiscing elit. Proin nibh augue, 
                        suscipit a, scelerisque sed, lacinia in, mi.
                    </div>
                </div>
                <div className='pricing__container__pricebox'>
                    <div className='pricing__container__pricebox__price'>
                        NA BOGATO 450$
                    </div>
                    <div className='pricing__container__pricebox__description'>
                        Lorem ipsum dolor sit ametconsectetur adipiscing elit. Proin nibh augue, 
                        suscipit a, scelerisque sed, lacinia in, mi.
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}