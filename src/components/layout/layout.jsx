import React from "react";
import NavBar from "../navBar/navBar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

function Layout() {
  return (
    <div>
      <NavBar />
      <div className="mt-16 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
