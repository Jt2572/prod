import {  useState } from "react"
// import Header from "./Header";
import Navbar from "./navbar"
import Sidebar from "./Sidebar";

const Navigation = () => {
    const [ShowSide, setShowSide] = useState(false)


    const closeSide = () => {
        setShowSide(false)
    };

    const toggleMenu = () => {
        setShowSide(!ShowSide)
    }
    

    return (
        <>
            <Navbar ShowSide={ShowSide} toggleMenu={toggleMenu} />
        

            {!ShowSide ?
                <div className="sidebar__show" >
                </div>
                : <div className="sidebar__hide sidebar__show">
                    <Sidebar isOpen={ShowSide} closeSide={closeSide} toggleMenu={toggleMenu} />



                </div>
            }
        </>



    )
}

export default Navigation;