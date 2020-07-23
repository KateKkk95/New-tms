import React, { Component } from 'react';
import { connect } from 'react-redux'

import './index.css';
import { userInfo } from '../../actions';


class ProfilePage extends Component {
    componentDidMount = () => {
        // try {
        //     const response = await axios.get(`http://localhost:3001/users/${props.match.params.index} `)
        //     setUserData(response.data);
        //     setLoading(false);
        // } catch (err) {
        //     console.log(err);
        //     setLoading(false);
        // }

    }
    render() {

        return (
            <div className="page">
                <div>
                    <h1>PROFILE PAGE</h1>
                </div>
                <div>
                    <h2>{this.props.User}</h2>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        User: state.user
    };
}

export default connect(mapStateToProps, { userInfo })(ProfilePage);