import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

import './index.css';


const ProfilePage = (props) => {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const getUser = async () => {

            try {
                const response = await axios.get(`http://localhost:3001/users/${props.match.params.index} `)
                setUserData(response.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }

        }
        getUser();
    }, [props.match.params.index]);


    return (
        <div className="page">
            {loading && <span>Loading...</span>}
            <div>
                <h1>PROFILE PAGE</h1>
            </div>
            <div>
                <h2>{userData?.picture}</h2>
                <h2>{userData?.name.first}</h2>
                <h2>{userData?.name.last}</h2>
                <h2>{userData?.phone}</h2>
                <h2>{userData?.address}</h2>
                <h2>{userData?.friends}</h2>
            </div>
        </div>

    );
}

export default ProfilePage;