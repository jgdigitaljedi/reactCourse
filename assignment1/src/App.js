import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    userName: 'Joey'
  };

  changeNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.changeNameHandler}
          userName={this.state.userName}></UserInput>
        <UserOutput
          name={this.state.userName}></UserOutput>
        <UserOutput
          name={this.state.userName}></UserOutput>
        <UserOutput
          name={this.state.userName}></UserOutput>
      </div>
    );
  }
}

export default App;
