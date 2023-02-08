import MenuIcon from "../components/MenuIcon";
import { items1, items2 } from "../assets/items";
import logo from "../assets/logoPubligraf.svg"
import { useEffect } from "react";

const Navbar = ({ ShowSide, toggleMenu }) => {
    useEffect(() => {
        console.log(ShowSide)
    }, [ShowSide])
    return (

        <header className="navbar">

            <div className={!ShowSide ? "navbar__hide" : "navbar__show"}>
            </div>

            <div className={ShowSide ? "navbar__hide" : "navbar__show"}>
                <img src={logo} alt="logo" />
            </div>




            <table >
                <tr>
                    {items1.map(i =>
                        <td className="navbar__items1">{i.title}</td>
                    )}
                    <td className="navbar"> </td>
                    {items2.map(i =>
                        <td className="navbar__items2">{i.title}</td>
                    )}
                </tr>

                <div className="navbar__icon" onClick={toggleMenu}>
                    <MenuIcon />
                </div>
            </table>

        </header>
    )
}

export default Navbar;