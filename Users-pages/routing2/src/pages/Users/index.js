import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Card } from '../../components';
import './index.js';



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
                        <Link 
                        key={item._id}
                        to= {`/users/${item.index}`}
                        >
                            <Card
                                picutre={item.picutre}
                                name={item.name}
                                index={item.index}
                            />
                        </Link >
                    )
                })}
            </div>

        </div>
    )
}
export default UsersPage;