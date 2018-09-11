import React, { Component } from 'react';

class UserOutput extends Component{

    render() {
        return (
            <div>
                <p>{this.props.paragraph}</p>
                <p>{this.props.paragraph2}</p>
            </div>
        )
    }
}

export default UserOutput;