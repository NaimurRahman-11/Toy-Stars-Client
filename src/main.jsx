import React, {  } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Login from './components/Login/Login.jsx';
import Blog from './components/Blog/Blog';
import Register from './components/Register/Register';
import AuthProvider, { } from './components/Providers/AuthProvider';
import HomePage from './components/HomePage/HomePage';
import ErrorPage from './components/ErrorPage/error-page';
import AddToy from './components/AddToy/AddToy';
import MyToys from './components/MyToys/MyToys';
import UpdateToy from './components/UpdateToy/UpdateToy';
import AllToys from './components/AllToys/AllToys';
import ViewDetails from './components/ViewDetails/ViewDetails';
import PrivateRoute from './components/Routes/PrivateRoute';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    
      {
        path: "/",
        element: <HomePage></HomePage>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/add-toy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "/my-toys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>
        
      },
      {
        path: "/update-toy/:id",
        element: <UpdateToy></UpdateToy>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: ({params}) => fetch(`https://toy-stars-server.vercel.app/toys/${params.id}`)
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('https://toy-stars-server.vercel.app/toys')
      },
      {
        path: "/view-details/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);