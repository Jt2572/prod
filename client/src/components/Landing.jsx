// import Header from "./Header";
import Navigation from "./Navigation";
import image from '../assets/LandingPageBG.png';
import logoL from '../assets/logoL.svg';
import logoD from '../assets/logoD.svg';
import ItemsProd from "./Products";
import Footer from "./Footer";

// import IsInViewport from "./View";
import { useEffect, useRef, useState } from "react";



const LandingPage = () => {

    const [Yscroll, SetYscroll] = useState()

    const containerRef = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);


    window.onscroll = function () {
        var y = window.scrollY;
        SetYscroll(y)
        console.log('current ', Yscroll);
    };

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



            <section ref={ref1} className={ref1.current && Yscroll > ref1.current.offsetTop - 500 ? 'landing__show' : 'landing__hide'} >
                <div className="landing__container ">

                    <img src={logoL} className="landing__logos" alt="logoL" />
                    <img src={logoD} className="landing__logos" alt="logoD" />
                </div>
            </section>

            <section ref={ref2} className={ref2.current && Yscroll > ref2.current.offsetTop - 450 ? 'landing__show' : 'landing__hide'}  >

                <ItemsProd />
            </section>



            <Footer />



        </>
    );
};

export default LandingPage;

