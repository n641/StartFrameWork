import React from "react";

function NavBar() {
  return (
    <div className="bg-blue-900 ">
      <div className="flex  items-center justify-between w-9/12 ">
        <h1>Start Framework</h1>

        <ul className="flex gap-3">
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
