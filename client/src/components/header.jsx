import Navigation from "./Navigation";
import image from '../assets/LandingPageBG.png'

const Header = () => {
    return (
        <div>

            <header  >
    
                <Navigation />
            </header>

            <section className="header__container">
                <img src={image} className ="landing__image" alt="LandingPage" />
                <div className="landing">
                    <h1 className="landing__title">Incrementa tus ventas con productos publicitarios de alta calidad</h1>
                    <p className="landing__subtitle">Tarjetas, Membretes, Talonarios, Flyers, Brochures, Pendones y 
                                                    una amplia gama de productos tanto litograficos como digitales</p>
                    <button>Comprar Ahora</button>
                </div>
            </section>

        </div>
    )
}
export default Header;