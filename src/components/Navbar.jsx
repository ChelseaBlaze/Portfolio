import React from "react"; 
import { NavLink } from "react-router-dom";
import Logo from "../assets/homelogo.svg";


/*
import {
  AiOutlineMenu,
} from "react-icons/ai";
*/


const Navbar = () => {

  return (
  <nav className =" navbar flex width-full h-20 bg-black text-white md:text-2xl lg:text-2xl text-xl">
      <section className = " logo flex justify-start ml-1 self-center items-center w-1/4">
            <NavLink to="/" className="w-3/4 md:w-1/3 " >
                <img src={Logo} className=" mx-2 md:mx-3 "/>
            </NavLink>
      </section>
      <section className = " navmenu flex flex-row justify-end items-center w-3/4 mr-2 md:mr-6 ">
        <ul className = " linklist flex flex-row  ">
            <NavLink to="/Projects">
                <li className=" mx-3 md:mx-8 transition duration-500 hover:text-main1">Projects</li>
            </NavLink>
            <NavLink to="/About">
                <li className=" mx-2 md:mx-8 transition duration-500 hover:text-main1 ">About Me</li>
            </NavLink>
        </ul>  
        
      </section>
  </nav>
    )
};

export default Navbar;
