import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "ABOUT", href: "about", current: true },
  { name: "PORTFOLIO", href: "Portofolio", current: false },
  { name: "CONTACT", href: "contact", current: false },
];

function NavBar() {
  const [IsActive, setIsActive] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-blue fixed top-0 w-full lg:px-7 ${
        scrolling ? "py-3" : "py-7"
      } transition-all duration-300 ease-in-out justify-center z-10`}
    >
      <div className="flex items-center justify-between sm:mx-40 mx-10 max-lg:flex-col">
        <div className="flex items-center justify-between w-full">
          <Link to={""} onClick={() => setIsActive(-1)}>
            <h1 className="text-white text-3xl font-bold">Start Framework</h1>
          </Link>

          {/* Toggle button for small screens */}
          <button
            className="lg:hidden text-white text-md font-bold"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="flex items-center gap-8 max-lg:hidden">
          {navigation.map((item, index) => (
            <li className={IsActive === index ? "Active" : ""} key={index}>
              <Link
                to={item.href}
                className="text-white text-md font-bold capitalize"
                onClick={() => setIsActive(index)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile navigation with animation */}
        <div
          className={`lg:hidden flex flex-col items-center   transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 mt-10"
              : "max-h-0 opacity-0 overflow-hidden h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {navigation.map((item, index) => (
              <li className={IsActive === index ? "Active" : ""} key={index}>
                <Link
                  to={item.href}
                  className="text-white text-md font-bold capitalize"
                  onClick={() => {
                    setIsActive(index);
                    setIsMenuOpen(false); // Close the menu after selection
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
