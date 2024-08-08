import "./App.css";
import Home from "./components/home/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Layout from "./components/layout/layout";
import Portofolio from "./components/portofolio/portofolio";

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
        path: "about",
        element: <About />,
      },
      {
        path: "Portofolio",
        element: <Portofolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
