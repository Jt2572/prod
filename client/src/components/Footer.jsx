import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logoFooter from "../assets/logoPubligrafWhite.svg"
const Footer = () => {

    

    return (

        <footer >
            <div  className="footer__container">
                <div className="footer__container__50pc">
                    <img src={logoFooter} width={80} alt="publigraf" />

                    <p>Proporcionamos productos publicitarios litográficos y digitales económicos y de alta calidad</p>
                </div>

                <div className='footer__contactContainer'>

                    <div className="footer__container__25pc">
                        <h3 >Contactos</h3>
                        <ul>
                            <li>Email: info@example.com</li>
                            <li>Cel: 000 000 0000</li>
                        </ul>
                    </div>
                    <div className="footer__container__25pc">
                        <h3>Nuestras redes</h3>
                        <ul className="footer__container__25pc__socialIcons">
                            <li><FaFacebook /> cuentafb</li>
                            <li><FaInstagram /> cuentaInstagram</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="footer__copyright">
                
                <p>Copyright &copy; 2023 Example Co. All rights reserved.</p>
            </div> */}
        </footer>
    )
}
export default Footer;