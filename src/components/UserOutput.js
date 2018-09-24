import React, { Component } from 'react';
import "./UserOutput.css";

class UserOutput extends Component{

    render() {
        return (
            <div>
                <p>{this.props.p1}</p>
                <p>{this.props.p2}</p>
            </div>
        )
    }
}

export default UserOutput;