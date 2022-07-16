import { ComponentFactory, ComponentType } from "react";
import {useQuery} from 'useQuery';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const getUsers:User = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    const data = await response.json();
    return data;
}

const useUsersQuery = () => {
    return useQuery('users',getUsers);
}

interface User{
    id:number;
    name:string;
    username:string;
    email:string;
    address:Address
    phone:string;
    website:string;
    company:Company;
}

interface Address{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:Geo;
}

interface Geo{
    lat:number;
    lng:number;

}

interface Company{
    name:string;
    catchPhrase:string;
    bas:string;
}

const user1={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
  }
};

export {getUsers,useUsersQuery};