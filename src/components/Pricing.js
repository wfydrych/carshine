import './Pricing.sass'

export default function Pricing() {
  return (
    <>
        <div className='logo'>
            <div className='logo__txt'>PREISE</div>
        </div>
        <div className='pricing'>
            <div className='pricing__title'>PREISE</div>
            <div className='pricing__container'>
                <div className='pricing__container__pricebox'>
                    <div className='pricing__container__pricebox__price'>
                        EXTERIEUR
                    </div>
                    <div className='pricing__container__pricebox__description'>
                        Detaillierte Handwäsche 7er Abo <br />
                        <strong>ab 150 CHF</strong><br /><br />
                        Swissvax Wachsversiegelung von Hand (inkl Handwäsche 7er Abo)<br />
                        <strong>ab 350 CHF</strong><br /><br />
                        Cabrioverdeck Imprägnierung<br />
                        <strong>150 CHF</strong> <br /><br />
                        Entfernung von Lackkratzern, Verätzungen, Teer etc.<br />
                        <strong>CHF 75.00</strong><br /><br />
                        Motorreinigung und Glanz-Motorversiegelung<br />
                        <strong>CHF 150.00</strong><br /><br />
                        Wachs/Keramikversieglung für Neuwagen <br />
                        <strong>Ab 200 CHF</strong><br /><br />
                    </div>
                </div>
                <div className='pricing__container__pricebox'>
                    <div className='pricing__container__pricebox__price'>
                        INTERIEUR
                    </div>
                    <div className='pricing__container__pricebox__description'>
                        Interieur Aufbereitung Standart<br />
                        <strong>ab 150 CHF</strong><br /><br />
                        Interieur Aufbereitung intensiv 4-5 Std.<br />
                        <strong>ab. 300 CHF</strong><br /><br />
                        Polsterreinigung / Nassaugen<br />
                        <strong>ab 100 CHF</strong><br /><br />
                        Dachhimmelreinigung<br />
                        <strong>75 CHF</strong><br /><br />
                        Geruchsneutralisierung<br />
                        <strong>50 CHF</strong><br /><br />
                        Ozonbehandlung<br />
                        <strong>75 CHF</strong><br /><br />
                        Hundehaarentfernung<br />
                        <strong>nach Absprache</strong><br /><br />
                        Keramikbeschichtung der Windschutzscheibe<br />
                        <strong>50 CHF</strong><br /><br />
                        Felgen Keramikbeschichtung (inkl. Reinigung)<br />
                        <strong>ab. 60 CHF/Felge</strong><br /><br />
                        Keramikbeschichtung der Radkasten<br />
                        <strong>150 CHF</strong><br /><br />
                        Lederreinigung inkl. Pflege<br />
                        <strong>40 CHF / Stunde</strong><br /><br />
                        Lederversiegelung<br />
                        <strong>150 CHF</strong><br />
                    </div>
                </div>
                <div className='pricing__container__pricebox'>
                    <div className='pricing__container__pricebox__price'>
                        NEUWAGEN: EXTERIEUR - INTERIEUR GRUNDREINIGUNG <br />& <br />WACHS/KERAMIK-BESCHICHTUNG
                    </div>
                    <div className='pricing__container__pricebox__description'>
                        Für Kleinwagen<br />
                        <strong>ab CHF 500.00</strong><br /><br />
                        Für Mittelklasse<br />
                        <strong>ab CHF 600.00</strong><br /><br />
                        Für Oberklasse (SUV, etc.)<br />
                        <strong>ab CHF 800.00</strong><br /><br />
                        Exoten und Sportwagen<br />
                        <strong>Preis auf Anfrage</strong><br /><br />
                    </div>
                    <div className='pricing__container__pricebox__price'>
                        OCCASIONEN: EXTERIEUR AUFBEREITUNG <br />INKL. SCHLEIF- UND HOCHGLANZPOLITUR <br />+ WACHS/KERAMIK-BESCHICHTUNG
                    </div>
                    <div className='pricing__container__pricebox__description'>
                        Für Kleinwagen<br />
                        <strong>ab CHF 450.00</strong><br /><br />
                        Für Mittelklasse<br />
                        <strong>ab CHF 600.00</strong><br /><br />
                        Für Oberklasse (SUV, etc.)<br />
                        <strong>ab CHF 850.00</strong><br /><br />
                        Exoten und Sportwagen<br />
                        <strong>Preis auf Anfrage</strong><br /><br />
                    </div>
                    <div className='pricing__container__pricebox__price'>
                        OCCASIONEN: INTERIEUR & EXTERIEUR AUFBEREITUNG <br />INKL. SCHLEIF- HOCHGLANZPOLITUR <br />+ WACHS/KERAMIK-BESCHICHTUNG
                    </div>
                    <div className='pricing__container__pricebox__description'>
                        Für Kleinwagen<br />
                        <strong>ab CHF 550.00</strong><br /><br />
                        Für Mittelklasse<br />
                        <strong>ab CHF 750.00</strong><br /><br />
                        Für Oberklasse (SUV, etc.)<br />
                        <strong>ab CHF 1000.00</strong><br /><br />
                        Exoten und Sportwagen<br />
                        <strong>Preis auf Anfrage</strong><br /><br />
                    </div>
                    <div className='pricing__container__pricebox__price'>
                        SONDERFAHRZEUGE WIE Z.B BOOTE, MOTORRÄDER, TRAKTOREN, HELIKOPTER USW.
                    </div>
                    <div className='pricing__container__pricebox__description'>
                        Bei diesen Sonderfahrzeugen können wir erst nach Besichtigung ein verbindliches Angebot erstellen.<br />
                        <strong>Preis auf Anfrage</strong><br />
                    </div>
                </div>
            </div>
            <div className='pricing__individual'>
                Bei einem individuellen Packet können sie uns gerne eine Nachricht senden oder telefonisch kontaktieren damit wir ein maßgeschneidertes Packet für ihr Auto erstellen können. <br /><strong>Preis auf Anfrage</strong>
            </div>
        </div>
    </>
  )
}