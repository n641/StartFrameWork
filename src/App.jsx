import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home/home";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./components/layout/layout";
import About from './components/about/about';
import Portofolio from './components/portofolio/portofolio';
import Contact from './components/contact/contact';

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'about',
        element: <About />,
      },
      {
        path:'Portofolio',
        element: <Portofolio />,
      },
      {
        path:'contact',
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
