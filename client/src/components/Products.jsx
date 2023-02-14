import { useRef, useState } from "react";
import { items1 } from "../assets/items";

const ItemsProd = ({ refCards, refFlyers, refBanners, Yscroll }) => {

    const ref1 = useRef()
    // const props = ItemsProd.props
    console.log('Yscroll', Yscroll)

    return (
        < >
        
            {/* {items1.map(i =>
                <section ref={refCards} className={refCards.current && Yscroll > refCards.current.offsetTop - 1450 ? 'landing__show' : 'landing__hide'} >
                    <section className={i.id !== 1 ? "jackets" : 'jackets__rev'} >
                        <img src={i.image} className="jackets__cont jackets__image" alt="" />
                        <div className="jackets__cont">
                            <h2 className="jackets__productTitle">{i.item}</h2>
                            <img src={i.icon} className="jackets__icon" alt={i.title} />
                            <article className="jackets__cont__info">
                                <h2 className="jackets__itemsTitle">{i.msg}</h2>
                                <p className="jackets__itemsSubtitle">{i.subMsg}</p>                                
                            </article>
                        </div>
                        <div></div>
                    </section>
                </section>
            )} */}
            


            <section ref={refFlyers} className={refFlyers.current && Yscroll > refFlyers.current.offsetTop - 480 ? 'landing__show' : 'landing__hide'} >
                <section className='jackets' >
                    <img src={items1[0].image} className="jackets__cont jackets__image" alt="" />
                    <div className="jackets__cont">
                        <h2 className="jackets__productTitle">{items1[0].item}</h2>
                        <img src={items1[0].icon} className="jackets__icon" alt={items1[0].title} />
                        <article className="jackets__cont__info">
                            <h2 className="jackets__itemsTitle">{items1[0].msg}</h2>
                            <p className="jackets__itemsSubtitle">{items1[0].subMsg}</p>
                            {/* <Msg /> */}
                        </article>
                    </div>
                </section>
            </section>

            <section ref={refCards} className={refCards.current && Yscroll > refCards.current.offsetTop - 480 ? 'landing__show' : 'landing__hide'} >
                <section className='jackets__rev' >
                    <img src={items1[1].image} className="jackets__cont jackets__image" alt="" />
                    <div className="jackets__cont">
                        <h2 className="jackets__productTitle">{items1[1].item}</h2>
                        <img src={items1[1].icon} className="jackets__icon" alt={items1[1].title} />
                        <article className="jackets__cont__info">
                            <h2 className="jackets__itemsTitle">{items1[0].msg}</h2>
                            <p className="jackets__itemsSubtitle">{items1[0].subMsg}</p>
                            {/* <Msg /> */}
                        </article>
                    </div>
                </section>
            </section>

            <section ref={refBanners} className={refBanners.current && Yscroll > refBanners.current.offsetTop - 480 ? 'landing__show' : 'landing__hide'} >
                <section className='jackets' >
                    <img src={items1[2].image} className="jackets__cont jackets__image" alt="" />
                    <div className="jackets__cont">
                        <h2 className="jackets__productTitle">{items1[2].item}</h2>
                        <img src={items1[2].icon} className="jackets__icon" alt={items1[2].title} />
                        <article className="jackets__cont__info">
                            <h2 className="jackets__itemsTitle">{items1[2].msg}</h2>
                            <p className="jackets__itemsSubtitle">{items1[2].subMsg}</p>
                        </article>
                    </div>
                </section>
            </section>
        </>
    )
}
export default ItemsProd;