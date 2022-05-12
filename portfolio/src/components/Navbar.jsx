import React from "react"; 
import { NavLink } from "react-router-dom";
/*import { NavLink } from "react-router-dom";
import {
  AiOutlineMenu,
} from "react-icons/ai";
*/


const Navbar = () => {

  return (
  <nav className =" navbar flex width-full h-20 bg-black text-white text-3xl ">
      <section className = " logo flex justify-start mx-3 items-center w-1/4 ">
            <NavLink to="/">
                <p className=" mx-8 transition duration-500 hover:text-main1">Logo</p>
            </NavLink>
      </section>
      <section className = " navmenu flex flex-row justify-end items-center w-3/4 mx-20">
        <ul className = " linklist flex flex-row mr-6 ">
            <NavLink to="/Projects">
                <li className=" mx-8 transition duration-500 hover:text-main1">Projects</li>
            </NavLink>
            <NavLink to="/About">
                <li className=" mx-8 transition duration-500 hover:text-main1 ">About Me</li>
            </NavLink>
        </ul>  
        
      </section>
  </nav>
    )
};

export default Navbar;
