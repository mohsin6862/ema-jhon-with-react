import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Card from './components/Card/Card';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import allProductLoader from './Loader/productLoader';


const router = createBrowserRouter([
  {
    path: '/',
    element:<App></App>,

    children :[
      {
        path:'/',
        element:<Card></Card>
  
      },
      {
        path: 'orders',
        element:<Orders></Orders>,
        loader:allProductLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      }
    ]
  }

 

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
