import {
    createBrowserRouter    
  } from "react-router-dom";  

import ErrorPage from "../components/error-page";
import Home from "../components/Home";
import LandingPage from "../components/Landing";
// import Tmp2 from "../components/Tmp2";


const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
      // element: <div>Hello world!</div>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/contact",
      element: <h2> hi, we 're in contact route</h2>,
      // element: <div>Hello world!</div>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/view",
      // element: <Tmp2/>,
      element: <div>Hello world!</div>,
      errorElement: <ErrorPage/>
    },

  ]);

  export default router