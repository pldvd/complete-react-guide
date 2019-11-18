import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "david", age: 34 },
      { name: "ana", age: 36 },
      { name: "petra", age: 33 }
    ],
    showPersons: false
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  changeNameHandler = (name) => {
    this.setState({
      persons: [
        ...this.state.persons,
        { name: name, age: 87 }
      ],
      wasClicked: true
    }, () => console.log(this.state));
  };

  handleInput = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hi, from the App component</h1>
        <button onClick={this.togglePersonHandler}>Switch name</button>
        { this.state.showPersons ?
          <div className="container">
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.changeNameHandler.bind(this, 'Tatuka')} changed={this.handleInput} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.changeNameHandler} changed={this.handleInput} />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.changeNameHandler} changed={this.handleInput} />
          </div> : null
        }
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
