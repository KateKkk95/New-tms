import React from 'react';

import { User } from '../../components';

const Card = ({ picture, name }) => {
    return (
        <div className="card">
            <img src={picture} className="card-image" />
            <div className="card-content">
                <h2>{name.first}</h2>
                <h4> {name.first}</h4>
            </div>
        </div>
    )
}

export { Card };