import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <h4>Developed by Eng. MHD Al Ameen Al Najjar </h4>
      <h4>Copyright &copy; 2024 MN</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Ameen014" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mohamad-alnajjar-00b8032b5" target='_blank'><FaLinkedin/></a>
        <a href='mohamadnajjar934@gmail.com' target='_blank'><SiGmail/></a>
        <a href='https://wa.me/+963938718838' target='_blank'><FaWhatsapp/></a>
      </div>
    </footer>
  )
}

export default Footer