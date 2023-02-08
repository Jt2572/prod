import { items1, items2 } from "../assets/items.js";
import logo from "../assets/logoPubligraf.svg"
const Sidebar = ({ ShowSide, isOpen, closeSide }) => {


    return (

        <>

            {isOpen ?
                <div className='sidebar__show__cont' onClick={closeSide}>

                    <div className={ShowSide ? "navbar__hide" : "navbar__show"}>
                        <img src={logo} className='sidebar__logo' alt="logo" />
                    </div>

                    <nav className="sidebar__itemscont">
                        <table className="sidebar__menuItems">
                            <tr>
                                <th >
                                    {items1.map(i =>
                                        <ul className="sidebar__show__items">
                                            {i.title}
                                        </ul>
                                    )}

                                </th>
                            </tr>
                            <tr >

                            <th style={{borderTop:"solid 1px rgba(180, 186, 197, 0.8)", paddingTop:"20px"}} >
                                {items2.map(i =>
                                    <ul className="sidebar__show__items" >
                                        {i.title}
                                    </ul>
                                )}

                            </th>
                            </tr>
                        </table>


                    </nav>
                </div>

                : <></>
            }

        </>

    )
}
export default Sidebar;