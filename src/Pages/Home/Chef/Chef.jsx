import React, { useEffect, useState } from 'react';
import ChefCard from '../../ChefCard/ChefCard';
import './Chef.css'

const Chef = () => {
    const [Chefs, setChef] = useState([]);
    useEffect(() => {
        fetch('https://assignment-10-server-delta-henna.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='AA row row-cols-4 '>
            {
                Chefs.map(chef => <ChefCard
                    key={chef.id}
                    Chef={chef}
                ></ChefCard> )
            }
        </div>
    );
};

export default Chef;