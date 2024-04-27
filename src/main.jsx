import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import NotFoundPage from './Components/Root/NotFoundPage/NotFoundPage.jsx';
import NavBer from './Components/Root/NavBer/NavBer.jsx';
import AllTourist from './Components/Root/AllTourist/AllTourist.jsx';
import Home from './Components/Root/Home/Home.jsx';
import AddTourist from './Components/Root/AddTourist/AddTourist.jsx';

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
        path:'/AllTourist',
        element:<AllTourist></AllTourist>
      },
      {
        path:'/AddTourist',
        element:<AddTourist></AddTourist>
      },
      {
        path:'/NavBer',
        element:<NavBer></NavBer>
      }

      
      
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
