import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


import './style.css';
import { ROUTES } from '../../const';


const NavBar = () => {
    const numberOfFriends = useSelector((state) => { return state.number });
    return (
        < nav className="navbar" >
            <Link to={ROUTES.MAIN}> Main </ Link>
            <Link to={ROUTES.USERS}> Users </Link>
            <span> Friends:  {numberOfFriends}</span>
            <Link to={ROUTES.PROFILE}> Profile </Link>
        </nav>
    );
};

export { NavBar };