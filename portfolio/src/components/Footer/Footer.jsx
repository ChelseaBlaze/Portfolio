import React from "react";
import { AiFillInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="flex flex-row w-full h-36 bg-black text-white fixed left-0 right-0 bottom-0 items-center justify-center ">
      <a href="https://www.instagram.com/chel.css" target="_blank" className=" transition duration-700 hover:text-main1 ">
        <AiFillInstagram className=" w-16 h-16 mx-2" alt="instagram"/>
      </a>
      <a href="https://github.com/ChelseaBlaze" target="_blank" className=" transition duration-700 hover:text-main1 ">
        <AiOutlineGithub className=" w-16 h-16 mx-2 " alt="github"/>
      </a>
      <a href="https://www.linkedin.com/in/chelseatrimmer/" target="_blank" className=" transition duration-700 hover:text-main1 ">
        <AiFillLinkedin className=" w-16 h-16 mx-2" alt="linkedin"/>
      </a>
      <a href="" target="_blank" className=" transition duration-700 hover:text-main1 ">
        <AiOutlineMail className=" w-16 h-16 mx-2" alt="email"/>
      </a>
    
      
      
    </footer>
  );
};

export default Footer;