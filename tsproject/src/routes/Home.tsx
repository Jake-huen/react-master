import React, { useState } from 'react';
import Coins from '../components/Coins';

const Home = () => {
    // const [loading,setLoading] = useState(true);
    const [coins,setCoins] = useState([]);
    return (
        <div>
            {coins.map((coin)=>(
                <Coins />
            ))}
        </div>
    );
};

export default Home;