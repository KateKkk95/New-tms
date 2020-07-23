import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';


import './style.css';
import { ROUTES } from '../../const';

class NavBar extends Component {
    render() {

        console.log(this.props.User)
        return (
            < nav className="navbar" >
                <Link to={ROUTES.MAIN}> Main </ Link>
                <Link to={ROUTES.USERS}> Users </Link>
                <span> Friends:  {this.props.User?.length}</span>
                <Link to={ROUTES.PROFILE}> Profile </Link>
            </nav>
        );
    }

};
const mapStateToProps = state => {
    console.log(state)
    return {
        token: state.token,
        number2: state.number,
        User: state.user?.friends
    }
}

export default connect(mapStateToProps)(NavBar);