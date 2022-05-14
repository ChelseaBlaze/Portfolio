import React from "react";
import { AiFillInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="flex flex-row w-full sticky h-28 lg:h-20 bg-black text-white left-0 right-0 bottom-0 items-center justify-center z-99 ">
      <a href="https://www.instagram.com/chel.css" target="_blank" className=" transition duration-700 hover:text-main1 ">
        <AiFillInstagram className=" w-10 h-10 md:w-12 md:h-12 mx-2" alt="instagram"/>
      </a>
      <a href="https://github.com/ChelseaBlaze" target="_blank" className=" transition duration-700 hover:text-main1 ">
        <AiOutlineGithub className=" w-10 h-10 md:w-12 md:h-12 mx-2 " alt="github"/>
      </a>
      <a href="https://www.linkedin.com/in/chelseatrimmer/" target="_blank" className=" transition duration-700 hover:text-main1 ">
        <AiFillLinkedin className=" w-10 h-10 md:w-12 md:h-12 mx-2" alt="linkedin"/>
      </a>
      <button onClick={() => window.location = 'mailto:trimmer.chelsea@gmail.com'} className=" transition duration-700 hover:text-main1 ">
        <AiOutlineMail className=" w-10 h-10 md:w-12 md:h-12 mx-2" alt="email"/>
      </button>
    
      
      
    </footer>
  );
};

export default Footer;