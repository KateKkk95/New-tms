import React from 'react';
import { Link } from 'react-router-dom';


import './style.css';
import { addFriend, deleteFriend } from '../../actions';


const Card = ({ picture, name, index }) => {

    const dispatch = useDispatch();

    onClickAdd = () => {
        dispatch
    };
    onClickDelete = () => {

    };
    return (
        <Link to={`users/${index}`} >
            <div className="card">
                <img src={picture} className="card-image" />
                <div className="card-content">
                    <h2>{name.first}</h2>
                    <h4> {name.last}</h4>
                </div>
                <div className="card-buttons">
                    <button className="card_button" >Add</button>
                    <button className="card_button" >Delete</button>
                </div>
            </div>
        </Link>
    )
}
export { Card };