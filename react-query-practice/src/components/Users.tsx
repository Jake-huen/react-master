import React, { useEffect,useState } from 'react';
import { getUsers } from '../api/users';

const Users = () => {
    const usersQuery = useUsersQuery();
    
    // 로딩 상태일 경우 제거
    if(usersQuery.isLoading || usersQuery.isIdle){
        return <div>loading...</div>;
    }

    // 에러 발생 상태 제거
    if(usersQuery.isError){
        return <div>Error...</div>;
    }

    // 데이터가 존재한다고 확신할 수 있음
    return (
        <div>
            {usersQuery.data.map(user=>{
                <div>{user.name}</div>
            })}</div>
    );
};

export default Users;