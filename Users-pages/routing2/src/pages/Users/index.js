import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Card } from '../../components';


const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('http://localhost:3001/users');
            setUsers(response.data);
        }
        getUsers();

    }, []);

    return (
        <div className="page">
            <div className="page-users">
                {users.map((item, i) => {
                    return (
                        <Card
                            picutre={item.picutre}
                            name={item.name}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default UsersPage;