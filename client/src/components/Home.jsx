import { useEffect, useState } from "react";
import LandingPage from "./Landing";


const Home = () => {
    
    
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      // Este efecto se ejecutará después de que se monte el componente
      // Aquí puedes agregar código para realizar una llamada a la API, por ejemplo
      // Cuando la llamada se complete, establece el estado isLoading a falso para indicar que el sitio ha terminado de cargar
      setIsLoading(false);
    }, []);

    return (
        <div >
     
            <LandingPage />
     
        </div>
    );
};

export default Home;

