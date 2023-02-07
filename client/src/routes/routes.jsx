import {
    createBrowserRouter    
  } from "react-router-dom";  

import ErrorPage from "../components/error-page";
import Home from "../components/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      // element: <div>Hello world!</div>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/contact",
      element: <h2> hi, we 're in contact route</h2>,
      // element: <div>Hello world!</div>,
      errorElement: <ErrorPage/>
    },

  ]);

  export default router