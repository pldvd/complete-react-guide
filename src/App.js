import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "david", age: 34 },
      { name: "ana", age: 36 },
      { name: "petra", age: 33 }
    ]
  }

  changeNameHandler = (name) => {
    this.setState({
      persons: [
        ...this.state.persons,
        { name: name, age: 87 }
      ],
      wasClicked: true
    });
  };

  handleInput = (event) => {
    this.setState({
      persons: [
        { name: "david", age: 34 },
        { name: event.target.value, age: 36 },
        { name: "petra", age: 33 }
      ]
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hi, from the App component</h1>
        <button onClick={this.changeNameHandler.bind(this, 'Davidkaaaa')}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.changeNameHandler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changeNameHandler} changed={this.handleInput}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.changeNameHandler} />
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does it work now?'));
}

export default App;

// state = {
//   persons: [
//     { name: "david", age: 34 },
//     { name: "ana", age: 36 },
//     { name: "petra", age: 33 }
//   ]
// }
