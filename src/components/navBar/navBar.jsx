import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-blue-900 fixed top-0 w-full p-4">
      <div className="flex  items-center justify-between mx-40">
        <Link to={""}>
          <h1 className="text-white text-3xl font-bold">Start Framework</h1>
        </Link>

        <ul className="flex gap-8">
          <li>
            <Link
              to={"about"}
              className="text-white text-md font-bold capitalize"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to={"Portofolio"}
              className="text-white text-md font-bold capitalize"
            >
              POROFOLIO
            </Link>
          </li>
          <li>
            <Link
              to={"contact"}
              className="text-white text-md font-bold capitalize"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
