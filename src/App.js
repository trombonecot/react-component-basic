import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    username: "eduardcot"
  }

  manipulateState = (ev) => {
    this.setState({
      username: ev.target.value
    });
  }

  render() {
    return (
      <div className="App">

        <UserInput username={this.state.username} changeEvent={this.manipulateState}/>
        <UserOutput p1={this.state.username} p2="xxx" />
        <UserOutput p1="2eieiiee" p2="xxx" />
      </div>
    );
  }
}

export default App;
