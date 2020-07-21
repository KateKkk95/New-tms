import React, { Component } from 'react';
import TextInput from '../TextInput';

import './style.css';


class SignIn extends Component {

    state = {
        Email: '',
        Pincode: '',
        token: '',
    }
    render() {
        return (
            <div className="sign-in">

                <TextInput
                    label="Email:"
                    onChangeFromProps={(event) => { this.setState({ Email: event.target.value }) }}
                    valueFromProps={this.state.Email}
                />
                <TextInput
                    label="Pincode:"
                    onChangeFromProps={(event) => { this.setState({ Pincode: event.target.value }) }}
                    valueFromProps={this.state.Pincode}
                />
                <div className="buttons">
                    <button className="button" onClick={() => this.setState({ Email: '', Pincode: '' })}>Clear</button>
                    <button className="sign-in_button" onClick={() => this.setState({ token: '' })}>Log In</button>
                </div>
            </div >
        )
    }
}
export default SignIn;