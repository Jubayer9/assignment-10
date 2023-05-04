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
         
<p className='mt-5 fs-3'>© 2023 Copyright : Super Chef BD.com</p>
          
        </section>
      </div>

      
    </footer>

  );
};

export default Footer;