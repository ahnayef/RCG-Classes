import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Error404 from './Components/Error404';
import Routine from "./Components/Routine/Routine"
import Cr from "./Components/Cr/Cr"
import './index.css';

const router = createHashRouter([
  {
    path: "/",
    element: <Routine />,
    // errorElement: <Error404 />
  }, {
    path: "/cr",
    element: <Cr />,
    // errorElement: <Error404 />
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
