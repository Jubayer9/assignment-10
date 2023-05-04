import React from 'react';
import { FaFacebook,FaTwitter,FaGoogle,FaInstagram,FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className=" pt-4">
        <section class=" Icon ">
         <FaFacebook className='IC'/>
         <FaTwitter className='IC'/>
         <FaGoogle className='IC'/>
    <FaInstagram className='IC'/>
         <FaGithub className='IC'/>
         
<p>© 2023 Copyright:.com</p>
          
        </section>
      </div>

      
    </footer>

  );
};

export default Footer;