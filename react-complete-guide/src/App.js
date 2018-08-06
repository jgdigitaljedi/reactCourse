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

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Paul';
    this.setState({
      persons: [
        { name: newName, age: 37 },
        { name: 'Brandy', age: 33 },
        { name: 'Solis', age: 10 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'DJ', age: 37 },
        { name: event.target.value, age: 33 },
        { name: 'Solis', age: 10 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '.5em',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This works!</p>
        {/* bind sytax is better, this is here to show it can be done */}
        <button
          style={style}
          onClick={() => this.switchNameHandler('Paul')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'DJ')} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>My Job: Director of Marketing and Communications</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'A different way to do this!'));
  }
}

export default App;
