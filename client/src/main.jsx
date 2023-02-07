import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
import ReactDOM from "react-dom/client";
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  routes from "./routes/routes";

import './sass/styles.scss'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
