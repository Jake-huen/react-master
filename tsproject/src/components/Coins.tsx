import React from 'react';
import {useQuery} from 'react-query';
import { axiosCoins } from '../api/coins';

const Coins = () => {
    const coinsQuery = useQuery('coins',axiosCoins);
    if(coinsQuery.isLoading || coinsQuery.isIdle){
        return <div>loading...</div>;
    }

    if(coinsQuery.isError){
        return <div>Error...</div>;
    }

    return (
        <div>
            {coinsQuery.data.map((coin)=>{
                return <div key={coin.id}>{coin.name}</div>
            })}
        </div>
    )
};

export default Coins;