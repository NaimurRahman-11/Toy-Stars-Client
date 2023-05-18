import React from 'react'
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
import AuthProvider from './components/Providers/AuthProvider';
import HomePage from './components/HomePage/HomePage';
import ErrorPage from './components/ErrorPage/error-page';


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