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

  deletePerson = (e) => {
    const selected = e.currentTarget.getAttribute('name');

    this.setState({
      persons: [...this.state.persons.filter(person => person.name !== selected)]
    })
  }

  handleInput = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }


  render() {
    let persons = null;

    if (this.state.showPersons) {

      persons = <div className="container">
        {
          this.state.persons.map((person, index) => <Person key={index} name={person.name} age={person.age} click={this.deletePerson} changed={this.handleInput}></Person>)
        }
      </div>;
    }


    return (
      <div className='App'>
        <h1>Hi, from the App component</h1>
        <button onClick={this.togglePersonHandler}>Switch name</button>
        {persons}
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
