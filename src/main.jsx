import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import NotFoundPage from './Components/Root/NotFoundPage/NotFoundPage.jsx';
import Home from './Components/Root/Home/Home.jsx';
import Footer from './Components/Root/Home/Footer/Footer.jsx';
import NavBer from './Components/Root/NavBer/NavBer.jsx';
import Login from './Components/Root/Login/Login.jsx';
import Register from './Components/Root/Register/Register.jsx';
import AuthProvider from './Components/Root/AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<NotFoundPage></NotFoundPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/Footer',
        element:<Footer></Footer>
      },
      {
        path:'/NavBer',
        element:<NavBer></NavBer>
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
      {
        path:'/Register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
