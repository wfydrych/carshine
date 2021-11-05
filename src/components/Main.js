import './Main.sass'
import ad1 from './img/section1_1.png'
import ad2 from './img/section1_2.png'
import ad3 from './img/section1_3.png'

export default function Main() {
  return (
    <>
        <div className='main'></div>
        <div className='introduce'>
            <div className='introduce__title'>Autopflege, Autoreinigung, Keramikversieglung der Spitzenklasse!</div>
            <div className='introduce__advertbox'>
                <div className='introduce__advertbox__advert'>
                    <img alt='pic1' src={ad1} />
                    <div className='introduce__advertbox__advert__text'>
                        <div><h2>Autopflege</h2></div>
Ihr Fahrzeug verdient die beste Pflege mit hochwertigen Produkten. Wir stehen für professionelle Dienstleistung in der Autopflege und Aufbereitung bis zur Keramikversieglung.
                    </div>
                </div>
                <div className='introduce__advertbox__advert'>
                    <img alt='pic1' src={ad2} />
                    <div className='introduce__advertbox__advert__text'>
                        <div><h2>Keramikversieglung</h2></div>
                    Die Keramikversieglung macht das Auto widerstandsfähig gegen äussere Einflüsse und vereinfacht die Reinigung. Je nach Witterung hält die Keramikversieglung für ca. 30 bis 36 Monate.
                    </div>
                </div>
                <div className='introduce__advertbox__advert'>
                    <img alt='pic1' src={ad3} />
                    <div className='introduce__advertbox__advert__text'>
                        <div><h2>Innenraum Desinfektion</h2></div>
                    Schützen Sie sich und Ihre Beifahrer vor Bakterien und Viren. Die Innenraum Desinfektion beinhaltet: – Gesamter Inenraumdesinfektion – Infektionsschutz – Virenvernichtung.
                    </div>
                </div>
            </div>
        </div>
        <div className='offer'>
            <div className='offer__backgr'>
                <div className='offer__backgr__title'>
                    VON DER LEIDENSCHAFT ZUM BERUF
                </div>
                <div className='offer__backgr__description'>
                    Wie so oft begann alles als Hobby. Ich fing an eigenen Autos mit Waschen und Polieren an, machte anfängliche Fehler, aus denen ich lernte. Und so entwickelte sich aus diesem Hobby eine Leidenschaft.<br /><br />
                    Was einst mit einer billigen Maschine begann, steigerte sich immer weiter zu hochpreisigen Produkten der Premiumklasse. Von den besten Wachsen und Versiegelungen bis hin zu mehreren Poliermaschinen ist nun alles im Einsatz. Wir haben es uns zum Ziel gesetzt jeden Lack auf besondere Art und Weise zum Glänzen zu bringen. Ohne, dass man gleich die Nummer eines Lackierers wählen muss.<br /><br />
                    Unsere Mission ist es, jedes Fahrzeug möglichst nahe an den Neuwagenzustand zu bringen und das mit qualitativ hochwertigen Produkten. Wir arbeiten an jedem Fahrzeug mit Leidenschaft, um das perfekte Gesamtbild zu erzeugen. Dazu arbeiten wir mit Wachsen oder Versiegelungen, die auf das Fahrzeug perfekt abgestimmt sind.
                </div>
            </div>
            <div className='offer__textbox'>
                <div className='offer__textbox__title'>
                    
                </div>
                <div className='offer__textbox__container'>
                    <div className='offer__textbox__container__box'>
                        <div className='offer__textbox__container__box__rectangle'></div>
                        <div className='offer__textbox__container__box__text'>
                        Shinefactory steht dafür, dass ihr Fahrzeug – egal ob Kleinwagen, Sportwagen oder aber auch Flugzeug – wieder im richtigen Licht steht und sich Andere nach Ihnen und Ihrem Fahrzeug umgucken. Dafür sorgen wir, Jimmy Strzecha und kim Tyszlak, höchstpersönlich.
                        </div>
                    </div>
                    <div className='offer__textbox__container__box'>
                        <div className='offer__textbox__container__box__rectangle'></div>
                        <div className='offer__textbox__container__box__text'>
                        Vereinbaren Sie gerne einen unverbindlichen Beratungstermin. Gerne werde ich Sie beraten und ein auf sie zugeschnittenes Angebot ganz nach Ihren Vorstellungen und Ihrem Budget erstellen.
                        </div>
                    </div>
                    <div className='offer__textbox__container__box'>
                        <div className='offer__textbox__container__box__rectangle'></div>
                        <div className='offer__textbox__container__box__text'>
                        Wir achten bei jeder Dienstleistung auf kompromisslose Qualität und sind jederzeit für Sie da, wenn Sie eine individuelle Beratung wünschen. Wir sind dein kompetenter Partner, wenn es um die Pflege deines Autos geht.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottomtext'>
            CAR SHINE FACTORY
        </div>
    </>
  )
}
