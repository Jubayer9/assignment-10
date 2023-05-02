import React from 'react';
import logo from '../../../../public/logo/531-Chef-Logo-Template.jpg'
import './Header.css'
import Chef from '../Chef/Chef';
const Header = () => {
    return (
      <dir>
          <div className='d-flex'>
             <img src={logo} alt="" />
            <h1 className='title'>Top😘 <br /> Bangladeshi 
            <br /> Chef👨‍🍳</h1>
        
        </div>
            <Chef></Chef>
      </dir>
    );
};

export default Header;