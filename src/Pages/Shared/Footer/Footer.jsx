import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className="  pt-4">
        <section className=" Icon ">
          <a href="https://www.facebook.com/"> <FaFacebook className='IC' /></a>
          <a href="https://www.twitter.com/"><FaTwitter className='IC' /></a>
          <a href="https://www.google.com/"><FaGoogle className='IC' /></a>
          <a href="https://www.instagram.com/"> <FaInstagram className='IC' /></a>
          <a href="https://www.github.com/"> <FaGithub className='IC' /></a><hr />

          <p className='mt-5  fs-3'>© 2023 Copyright : Super Chef BD.com</p>

        </section>
      </div>


    </footer>

  );
};

export default Footer;