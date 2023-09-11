import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homeuser from './components/Homeuser.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Homeadmin from './components/Homeadmin.jsx'


import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Homeuser /> 
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path:'/admin',
    element: <Homeadmin />
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
