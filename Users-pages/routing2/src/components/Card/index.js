import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { userInfo } from '../../actions';
import './style.css';


class Card extends Component {

    addFriend = async () => {

        try {
            const response = await axios.post(`http://localhost:3001/add-friend`,
                {
                    token: this.props.userToken,
                    index: this.props.index,
                }
            )
            console.log(response);
            const responseNew = await axios.get(`http://localhost:3001/users/${this.props.userIndex}`)

            this.props.userInfo(responseNew.data);
        }
        catch (err) {
            console.log(err);
            alert(err.response.data)
        }
    }
    deleteFriend = async () => {

        try {
            const response = await axios.post(`http://localhost:3001/remove-friend`,
                {
                    token: this.props.userToken,
                    index: this.props.index,
                }
            )
            console.log(response);
            const responseNew2 = await axios.get(`http://localhost:3001/users/${this.props.userIndex}`)

            this.props.userInfo(responseNew2.data);
        }
        catch (err) {
            console.log(err);
            alert(err.response.data)
        }
    }
    render() {
        return (
            <Link to={`users/${this.props.index}`} >
                <div className="card">
                    <img src={this.props.picture} className="card-image" />
                    <div className="card-content">
                        <h2>{this.props.name.first}</h2>
                        <h4> {this.props.name.last}</h4>
                    </div>
                    <div className="card-buttons">
                        <button className="card_button" onClick={this.addFriend}>Add</button>
                        <button className="card_button" onClick={this.deleteFriend}>Delete</button>
                    </div>
                </div>
            </Link >
        )
    }
}
const mapStateToProps = state => {
    return {
        userToken: state.token,
        userIndex: state.user?.index
    }
}
export default connect(mapStateToProps, { userInfo })(Card);
