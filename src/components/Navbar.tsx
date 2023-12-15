// RDD
import { NavLink, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import jiva from "@/assets/jiva.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleOutsideClick = (event: React.MouseEvent) => {
  //   if (
  //     navbarRef.current &&
  //     !navbarRef.current.contains(event.target as Node)
  //   ) {
  //     setIsOpen(false);
  //   }
  // };

  const closeNavbarOnLocationChange = () => {
    setIsOpen(false);
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  useEffect(() => {
    closeNavbarOnLocationChange();
  }, [location]);

  return (
    <nav ref={navbarRef} className="mx-auto p-4 lg:p-0 bg-white border-b-2">
      <div className="container mx-auto flex items-center justify-between">
        <button
          id="menu"
          aria-expanded={isOpen}
          aria-label="Open menu"
          className="lg:hidden focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4  text-neutral-900 hover:text-neutral-600 transition-colors"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12h18M3 6h18M3 18h18"
            />
          </svg>
        </button>
        <div
          role="menubar"
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full absolute right-0 left-0 top-16 bg-white shadow-xl text-center p-6 text-lg font-semibold items-center`}
        >
          <NavLink
            to="/"
            aria-label="Dashboard"
            className="py-1 px-6 flex gap-2 items-center text text-primary focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 font-custom text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            <img src={jiva} alt="logo" className="w-12 h-12" />
            JIVA
          </NavLink>
          <a className="lg:mr-auto"></a>
          <NavLink
            to="/"
            aria-label="Dashboard"
            className="py-1 px-6 text dark:text-neutral-600 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4  text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/informasi"
            aria-label="Informasi"
            className="py-1 px-6 text dark:text-neutral-600 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4  text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Informasi
          </NavLink>
          <NavLink
            to="/Artikel"
            aria-label="Artikel"
            className="py-1 px-6 text dark:text-neutral-600 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4  text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Artikel
          </NavLink>
          <NavLink
            to="/mood"
            aria-label="Game"
            className="py-1 px-6 text dark:text-neutral-600 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4  text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Tes Kecemasan
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
