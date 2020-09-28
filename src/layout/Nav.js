import React from "react";
import { NavLink } from "react-router-dom";

const navs = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/products",
    name: "View Products"
  },
  {
    path: "/contact",
    name: "Contact"
  },
  {
    path: "/cart",
    name: "Cart"
  }
]

const Nav = () => (
  <nav className="text-blue-800 p-4 shadow">
    <ul className="flex space-x-4 justify-between">
      {navs.map((navItem) => (
        <li key={navItem.name}>
          <NavLink 
            exact to={navItem.path} 
            activeClassName="border-b-2 border-blue-900">
            {navItem.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;