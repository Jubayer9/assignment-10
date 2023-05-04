import React from 'react';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import Header from '../Pages/Home/Header/Header';
import Chef from '../Pages/Home/Chef/Chef';
import Footer from '../Pages/Shared/Footer/Footer';
import Marquee from "react-fast-marquee";
const Home = () => {
    return (
        <div className='ami'>
            <NavigationBar></NavigationBar>
            
            <Header></Header>
            <Marquee pauseOnHover speed={100} className='Marquee'>
                Welcome to Chef's website at the highest level in Bangladesh.🥳🥳
</Marquee>

            <Chef></Chef>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;