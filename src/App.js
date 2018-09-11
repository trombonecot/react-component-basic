import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">

        <UserInput/>
        <UserOutput paragraph="hola" paragraph2="hola" />
      </div>
    );
  }
}

export default App;
