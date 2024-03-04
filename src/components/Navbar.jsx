import React from "react";
import { NavLink, Link } from "react-router-dom"; 
import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";


const activeNavLink = ({ isActive }) => (isActive ? "active_link text-indigo-600" : "");

const Navbar = () => {
  return (
    <nav className="sticky top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-3">
      <Link to="/">
        <span className="ml-1 text-white text-4xl hidden md:block">
          <span className="text-indigo-600 font-semibold">LP</span>SECURITY
        </span>
        </Link>
        <div className="flex items-center mx-auto md:mx-0">
          {/* Responsive Navbar for small screens */}
          <div className="md:hidden flex gap-x-6 sticky top-0 text-white z-50">
            <NavLink to="/" className={activeNavLink}>
              <FaHome size={24} />
            </NavLink>
            <NavLink to="/team" className={activeNavLink}>
              <RiTeamFill size={24} />
            </NavLink>
            <NavLink to="/about" className={activeNavLink}>
              <FaRegQuestionCircle size={24} />
            </NavLink>
            <NavLink to="/contact" className={activeNavLink}>
              <AiFillPhone size={24} />
            </NavLink>
          </div>
          {/* Navbar for medium and above screens */}
          <ul className="hidden md:flex md:text-md text-white flex-col md:flex-row md:space-x-8 items-center">
            <li>
              <Link to="/" className="block py-2 px-3 hover:text-indigo-600 duration-400 transition-all" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link to="/team" className="block py-2 px-3 hover:text-indigo-600 duration-400 transition-all">
                Team
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 hover:text-indigo-600 duration-400 transition-all">
                About
              </Link>
            </li>
            <div className="">
              <Link
                to="/contact"
                className="text-white border-2 text-xl border-indigo-700 px-3 py-1 rounded-md hover:bg-indigo-700 transition-all duration-500"
              >
                Contact
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
