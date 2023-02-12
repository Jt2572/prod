// import Header from "./Header";
import Navigation from "./Navigation";
import image from '../assets/LandingPageBG.png';
import logoL from '../assets/logoL.svg';
import logoD from '../assets/logoD.svg';
import ItemsProd from "./Products";
import Footer from "./Footer";
// import logoD from '../components/logoD';


const LandingPage = () => {

    return (

        <>

            <Navigation />

            <section className="header__container">
                <img src={image} className="landing__image" alt="LandingPage" />
                <div className="landing">
                    <h1 className="landing__title">Incrementa tus ventas con productos publicitarios de alta calidad</h1>
                    <p className="landing__subtitle">Tarjetas, Membretes, Talonarios, Flyers, Brochures, Pendones y
                        una amplia gama de productos tanto litograficos como digitales</p>
                    <button>Comprar Ahora</button>
                </div>
            </section>

            <section className="landing__container">
                <img src={logoL} className="landing__logos" alt="logoL" />
                <img src={logoD} className="landing__logos" alt="logoD" />
            </section>


            <ItemsProd />
            <Footer/>



        </>
    );
};

export default LandingPage;

