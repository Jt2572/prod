import { useRef, useState } from "react";
import { items1 } from "../assets/items";

const ItemsProd = () => {

    const ref1 = useRef()



    return (
        < >
            {items1.map(i =>
            // <section  ref={ref0} className={ref0.current && Yscroll > ref0.current.offsetTop - 1600 ? 'landing__show' : 'landing__hide'} >

                    
                <section  className={i.id !== 1 ? "jackets" : 'jackets__rev' } >
                    <img src={i.image} className="jackets__cont jackets__image" alt="" />
                    <div className="jackets__cont">

                        <h2 className="jackets__productTitle">{i.item}</h2>

                        <img src={i.icon} className="jackets__icon" alt={i.title} />

                        <article className="jackets__cont__info">
                            <h2 className="jackets__itemsTitle">{i.msg}</h2>
                            <p className="jackets__itemsSubtitle">{i.subMsg}</p>
                            {/* <Msg /> */}
                        </article>
                        
                    </div>
                    <div></div>
                </section>
            // </section>
            )}
        </>
    )
}
export default ItemsProd;