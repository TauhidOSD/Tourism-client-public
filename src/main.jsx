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
import Banner from './Components/Root/Banner/Banner.jsx';
import Card from './Components/Root/Card/Card.jsx';
import CardDetails from './Components/Root/CardDetails/CardDetails.jsx';
import MyListPage from './Components/Root/MyListPage/MyListPage.jsx';
import UpdatePage from './Components/Root/UpdatePage/UpdatePage.jsx';
import SignUp from './Components/Root/SignUp/SignUp.jsx';
import SignIn from './Components/Root/SignIn/SignIn.jsx';
// import AuthProvider from './Provider/AuthProvider.jsx';
import Footer from './Components/Root/Footer/Footer.jsx';
import AuthProvider from './Components/Root/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './Components/Root/PrivateRoute/PrivateRoute.jsx';
import TestSection from './Components/Root/TextSection/TestSection.jsx';
import Country from './Components/Root/Country/Country.jsx';

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
        element:<AllTourist></AllTourist>,
        
      },
      {
        path:'/AddTourist',
        element:<PrivateRoute>
           <AddTourist/>
           </PrivateRoute>
         
        
      },
      {
        path:'/NavBer',
        element:<NavBer></NavBer>
      },
      {
        path:'/card',
        element:<Card></Card>,
       
      },
      {
        path:'/Banner',
        element:<Banner></Banner>
      },
      {
        path:'/:_id',
        element:<CardDetails></CardDetails>,
        loader: () => fetch('http://localhost:5000/Place')

      },
      {
        path:'/myListedPage',
        element:<PrivateRoute><MyListPage/></PrivateRoute>
          
       
      },
      {
        path:'/UpdatePage/:id',
        element:<UpdatePage></UpdatePage>,
        loader:({params}) => fetch(`http://localhost:5000/Place/${params.id}`)
        
      },
      {
        path:'/SignUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/SignIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/Footer',
        element:<Footer></Footer>
      },
      {
        path:'TextSection',
        element:<TestSection></TestSection>
      },
      {
        path:'/country',
        element:<Country></Country>
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
