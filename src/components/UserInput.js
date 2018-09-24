import React, { Component } from 'react';
import "./UserInput.css";

class UserInput extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.username} onChange={this.props.changeEvent}></input>
            </div>
        )
    }
}

export default UserInput;