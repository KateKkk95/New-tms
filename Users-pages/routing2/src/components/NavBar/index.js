import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';


import './style.css';
import { ROUTES } from '../../const';

class NavBar extends Component {
    render() {
        return (
            < nav className="navbar" >
                <Link to={ROUTES.MAIN}> Log in </ Link>
                <Link to={ROUTES.USERS}> Users </Link>
                <span> Friends:  {this.props.Friends?.length}</span>
                <Link to={`/users/${this.props.userIndex}`}> Your Profile </Link>
            </nav>
        );
    }

};
const mapStateToProps = state => {
    console.log(state)
    return {
        token: state.token,
        number2: state.number,
        Friends: state.user?.friends,
        userIndex: state.user?.index
    }
}

export default connect(mapStateToProps)(NavBar);