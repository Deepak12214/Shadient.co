import React from 'react';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Root from './components/Root';
import AboutUs from './components/About/AboutUs';
import Services from './components/Services/Services';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Root/>, 
      children: [
        {
          path: "/",
          element: <Home/>,  
        },
        {
          path: "/about-us",
          element: <AboutUs/>,  
        },
        {
          path: "/service",
          element: <Services/>,  
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  );
}

export default App;

