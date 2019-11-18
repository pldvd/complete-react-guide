import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: "vasd", name: "david", age: 34 },
      { id: "bcadf", name: "ana", age: 36 },
      { id: "ölläd", name: "petra", age: 33 }
    ],
    showPersons: false
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  changeName = (event) => {
    console.log(event.target.value);
    // this.setState({

    // })
  }


  render() {
    let persons = null;

    if (this.state.showPersons) {

      persons = <div className="container">
        {
          this.state.persons
            .map((person, index) => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePerson(index)}
                changed={this.changeName}>
              </Person>
            })
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
}

export default App;