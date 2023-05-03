import React from 'react';
import NavigationBar from '../../Pages/Shared/NavigationBar/NavigationBar';
import Header from '../../Pages/Home/Header/Header';
import Chef from '../../Pages/Home/Chef/Chef';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Chef></Chef>
            
        </div>
    );
};

export default Main;