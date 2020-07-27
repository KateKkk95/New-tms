import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { Card } from '../../components';
import { getUsers } from '../../actions';
import './index.js';



class UsersPage extends Component {

    componentDidMount = async () => {

        try {
            const response = await axios.get('http://localhost:3001/users');
            this.props.getUsers(response.data);
        }
        catch (error) {
            console.log(error);
        }

    }

    render() {

        return (
            <div className="page">
                <div className="page-users">
                    {this.props.Users.map((item, i) => {
                        return (
                            <Link
                                key={item._id}
                                to={`/users/${item.index}`}
                            >
                                <Card
                                    picture={item.picture}
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
}
const mapStateToProps = state => {
    return {
        Users: state.users
    };
}

export default connect(mapStateToProps, { getUsers })(UsersPage);