// RDD
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mx-auto p-4 lg:p-0 bg-white border-b-2">
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
            className="py-1 px-6 text text-primary focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 font-custom text-neutral-900 hover:text-neutral-600 transition-colors"
          >
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
