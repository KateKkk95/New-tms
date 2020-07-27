import React, { Component } from 'react';
import TextInput from '../TextInput';
import axios from 'axios';
import { connect } from 'react-redux';


import { setToken, userInfo } from '../../actions';
import './style.css';


class SignIn extends Component {
    state = {
        phone: '',
        password: '',
    }
    SignIn = async () => {

        try {
            const response = await axios.post(`http://localhost:3001/auth/sign-in`,
                {
                    phone: this.state.phone,
                    password: "123",
                })

            console.log(response);
            console.log(response.data.token);

            this.props.setToken(response.data.token);
            this.props.userInfo(response.data);
        } catch (err) {
            console.log(err);

        }
    }


    render() {
        return (

            <div className="sign-in">
                <div className="greeting">
                    <h1>Henllo</h1>
                </div>
                <TextInput
                    label="Phone:"
                    onChangeFromProps={(event) => { this.setState({ phone: event.target.value }) }}
                    valueFromProps={this.state.phone}
                />
                <TextInput
                    label="Password:"
                    onChangeFromProps={(event) => { this.setState({ password: event.target.value }) }}
                    valueFromProps={this.state.password}
                />
                <div className="buttons">
                    <button className="button" onClick={() => this.setState({ phone: '', password: '' })}>Clear</button>
                    <button className="sign-in_button" onClick={this.SignIn}>Log In</button>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        num: state.number,
        phone: state.phone,
        password: state.password,
    }
}

export default connect(mapStateToProps, { setToken, userInfo })(SignIn);