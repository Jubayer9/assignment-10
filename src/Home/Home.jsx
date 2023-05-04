import React from 'react';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import Header from '../Pages/Home/Header/Header';
import Chef from '../Pages/Home/Chef/Chef';
import Footer from '../Pages/Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            
            <Header></Header>
            <Chef></Chef>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;