import React, { Component } from 'react';

import './style.css';


class TextInput extends Component {
    render() {
        return (
            <div className="text-input">
                <span className="label">{this.props.label}</span>
                <input
                    type="text"
                    className="input"
                    onChange={(event) => this.props.onChangeFromProps(event)}
                    value={this.props.valueFromProps}
                />
            </div>
        )
    }
}
export default TextInput;