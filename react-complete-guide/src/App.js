import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Joey', age: 37 },
      { name: 'Brandy', age: 33 },
      { name: 'Solis', age: 9 }
    ]
  };

  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = 'Paul';
    this.setState({
      persons: [
        { name: 'Paul', age: 37 },
        { name: 'Brandy', age: 33 },
        { name: 'Solis', age: 10 }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This works!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Job: Director of Marketing and Communications</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'A different way to do this!'));
  }
}

export default App;
