import React, { useEffect } from 'react';
import axios from 'axios';


const UsersPage = () => {
    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('http://localhost:3001/users');
        }
        getUsers();

    }, []);

    return (
        <div className="page">
            <div className="page-users">

            </div>

        </div>
    )
}

export default UsersPage;