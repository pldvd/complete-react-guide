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

  changeNameHandler = () => {
    this.setState({
      persons: [
        { name: "Pal David", age: 34 },
        { name: "Ana Rodriguez", age: 36 },
        { name: "Pal Petra", age: 33 }
      ]
    })
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, from the App component</h1>
        <button onClick={this.changeNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does it work now?'));
  }
}

export default App;
