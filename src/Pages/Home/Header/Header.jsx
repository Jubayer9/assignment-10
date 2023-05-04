import React from 'react';
import logo from '../../../../public/logo/531-Chef-Logo-Template.jpg'
import './Header.css'

const Header = () => {
    return (
      <dir>
          <div className='d-flex header'>
             <img className='header-img'  src={logo} alt="" />
            <h1 className='title'>Top😘 <br /> Bangladeshi
            <br /> Chef 👨‍🍳</h1>
        
        </div>
           
      </dir>
    );
};

export default Header;