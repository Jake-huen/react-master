import axios from 'axios';

const BASE_URL = 'https://api.coinpaprika.com/v1';

export interface Coin{
    id:string;
    name:string;
    symbol:string;
    rank:number;
    is_new:boolean;
    is_active:boolean;
    type:string;
}

const axiosCoins = async () =>{
    const response = await axios.get(`${BASE_URL}/coins`);
    const data:Coin[] = response.data;
    return data;
}
export {axiosCoins};