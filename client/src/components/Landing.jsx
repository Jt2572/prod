// import Header from "./Header";
import Navigation from "./Navigation";
import image from '../assets/LandingPageBG.png';
import logoL from '../assets/logoL.svg';
import logoD from '../assets/logoD.svg';
import price from '../assets/price.svg';
import ItemsProd from "./Products";
import Footer from "./Footer";
import { landingContent } from "../assets/content";

// import IsInViewport from "./View";
import { useEffect, useRef, useState } from "react";



const LandingPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [isLoading]);

    const [Yscroll, SetYscroll] = useState()

    const refLogos = useRef(null);
    const refForm = useRef(null);
    const refCards = useRef(null);
    const refFlyers = useRef(null);
    const refBanners = useRef(null);

    window.onscroll = function () {
        var y = window.scrollY;
        SetYscroll(y)
        console.log('current ', Yscroll);
    };

// console.log('isLoading...',isLoading)

    return (



        <div className={isLoading ? 'landing__hideLand' : 'landing__showLand'}>

            <Navigation />



            <div >

                <section className="header__container">
                    
                    <img src={image} className="landing__image" alt="LandingPage" />
                    
                    <div >
                        <h1 className="landing__title">{landingContent.title}</h1>
                        <p className="landing__subtitle">{landingContent.subtitle}</p>
                        <button>Comprar Ahora</button>
                    </div>
                    
                </section>

            </div>








            <section ref={refLogos} className={refLogos.current && Yscroll > refLogos.current.offsetTop - 500 ? 'landing__show' : 'landing__hide'} >
                <div className="landing__container ">

                    <img src={logoL} className="landing__logos" alt="logoL" />
                    <img src={logoD} className="landing__logos" alt="logoD" />
                </div>
            </section>


            <ItemsProd refCards={refCards} refFlyers={refFlyers} refBanners={refBanners} Yscroll={Yscroll} />

            <section ref={refForm} className={refForm.current && Yscroll > refForm.current.offsetTop - 450 ? 'landing__show' : 'landing__hide'}>
                <div className="landing__formCont">

                    <div className="landing__formCont__form ">

                        <img src={price} width={40} alt="" />
                        <h5>COTIZAR PRODUCTO</h5>
                        <p>Si aún no te haz registrado o logeado, por favor ingresa tu correo y recibirás
                            tu cotización a la mayor brevedad</p>
                        <input type="text" placeholder="ingresa tu email" />
                        <button>Continuar</button>



                    </div>



                </div>

            </section>




            <Footer />



        </div>
    );
};

export default LandingPage;

