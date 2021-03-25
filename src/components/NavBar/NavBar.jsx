import React from "react";
import CartWidget from "../CartWidget";
import { NavLink, Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-orange-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link exact to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
            ><span className="text-purple-500">[</span>24<span className="text-yellow-500">]</span>7 Shop</Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink to={`/category/golosinas`}
                  activeClassName="bg-indigo-500 rounded-full" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fas fa-candy-cane text-lg leading-lg text-white opacity-75"></i><span className="ml-2">golosinas</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/category/snack`}
                  activeClassName="bg-indigo-500 rounded-full" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fas fa-pizza-slice text-lg leading-lg text-white opacity-75"></i><span className="ml-2">snack</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={`/category/bebidas`}
                  activeClassName="bg-indigo-500 rounded-full" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fas fa-wine-bottle text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Bebidas</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="/cart"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <CartWidget />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}