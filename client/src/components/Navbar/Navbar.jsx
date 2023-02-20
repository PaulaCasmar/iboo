import React from "react";
import logo from "../images/logo.png";
import { FiSettings } from "react-icons/fi";

const Navbar = () => {
  return (
    <div>
      <div id="mainNavigation">
        <nav role="navigation">
          <div className="py-3 text-center border-bottom">
            <img src={logo} alt="" className="invert" />
          </div>
        </nav>
        <div className="navbar-expand-md">
          <div
            className="text-center mt-3 collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/products">
                  Productos
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/categories">
                  Categorias
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link dropdown-toggle"
                  href="/categories"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FiSettings />
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/new_product">
                      Añadir producto
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/new_category">
                      Añadir categoria
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
