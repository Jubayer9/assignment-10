import React from 'react';
import NavigationBar from '../../Pages/Shared/NavigationBar/NavigationBar';
import Header from '../../Pages/Home/Header/Header';
import Chef from '../../Pages/Home/Chef/Chef';
import './Main.css'
const Main = () => {
    return (
        <div className='BG'>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Chef></Chef>
            
        </div>
    );
};

export default Main;