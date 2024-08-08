import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function NavBar() {
  const [IsActive, setIsActive] = useState(0);

  return (
    <div className="bg-blue fixed top-0 w-full p-4">
      <div className="flex  items-center justify-between mx-40">
        <Link to={""}>
          <h1 className="text-white text-3xl font-bold">Start Framework</h1>
        </Link>

        <ul className="flex gap-8">
          <li className={IsActive === 1 ? "Active" : ""}>
            <Link
              to={"about"}
              className="text-white text-md font-bold capitalize"
              onClick={() => setIsActive(1)}
            >
              ABOUT
            </Link>
          </li>
          <li className={IsActive === 2 ? "Active" : ""}>
            <Link
              to={"Portofolio"}
              className="text-white text-md font-bold capitalize"
              onClick={() => setIsActive(2)}
            >
              POROFOLIO
            </Link>
          </li>
          <li className={IsActive === 3 ? "Active" : ""}>
            <Link
              to={"contact"}
              className="text-white text-md font-bold capitalize"
              onClick={() => setIsActive(3)}
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
