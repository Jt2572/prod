
// import jackets from "../assets/jackets.jpg";
// import jacketIcon from "../assets/jacketIcon.png"
// import bags from "../assets/bags.jpg"
// import bagIcon from "../assets/bagIcon.png"
// import shoes from "../assets/shoes.jpg"
// import shoesIcon from "../assets/shoesIcon.png"
import flyers from '../assets/Flyers02.png'
import cards from '../assets/Cards02.png'
import banners from '../assets/Banners002.png'
// import LogoFlyers from '../components/MenuIcon copy'
import cardsIcon from '../assets/cardsIcon.png'
import flyerIcon from '../assets/flyerIcon.png'
import pendonIcon from '../assets/pendonIcon.png'

const items1 = [
    {
        id: 0,
        title: 'Productos',
        
        item: 'Flyers', 
        iref: 'ref0',
        image: flyers ,
        icon: flyerIcon,
        msg: 'Llegue a su público objetivo de manera directa',
        subMsg: 'Los flyers publicitarios son una forma eficaz y económica de llegar a un público objetivo y promocionar su producto o servicio, son una herramienta clave para generar interés en sus productos.',
    },
    {
        id: 1,
        title: 'About',
        
        item: 'Tarjetas', 
        iref: 'ref1',
        image: cards,
        icon: cardsIcon,
        msg: 'Mejore su interacción con los clientes',
        subMsg: 'Las tarjetas de presentación son una herramienta valiosa para promocionar una empresa o individuo, brindando una interacción personal, fácil distribución, refuerzo de la marca, economía y fácil accesibilidad..',
    },
    {
        id: 2,
        title: 'Información',
        item: 'Pendones', 
        iref: 'ref2',
        image: banners,
        icon: pendonIcon,
        msg: 'Aumente la visibilidad de sus productos o servicios',
        subMsg: 'Una de las grandes ventajas de los pendones es que pueden colocarse en lugares estratégicos para llamar la atención del publico, lo que puede ayudar a aumentar el reconocimiento de marca.',
    }
]

const items2 = [
    {
        id: 0,
        title: 'Ingresar',
        // image: jackets ,
        // icon: jacketIcon,
        msg: 'Prepara tu look para el frío ',
        subMsg: 'Las últimas tendencias en Chaquetas para damas, en distintos colores y texturas.',
    },
    {
        id: 1,
        title: 'Registrarse',
        // image: bags,
        // icon: bagIcon,
        msg: 'Prepara tu look para el frío ',
        subMsg: 'Las últimas tendencias en Chaquetas para damas, en distintos colores y texturas.',
    }
]


export {
    items1,
    items2
}