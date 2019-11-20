import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'vasd', name: 'david', age: 34 },
      { id: 'bcadf', name: 'ana', age: 36 },
      { id: 'ölläd', name: 'petra', age: 33 },
      { id: 'öläd', name: 'petra', age: 33 }
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

  changeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = this.state.persons;
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }


  render() {
    let persons = null;

    const btnStyle = {
      backgroundColor: 'green',
      padding: '1em',
      // ':hover': {
      //   backgroundColor: 'lightgreen'
      // },
      cursor: 'pointer'
    }

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
                changed={event => this.changeName(event, person.id)}>
              </Person>
            })
        }
      </div>;

      btnStyle.backgroundColor = 'red';
      btnStyle[':hover'] = {
        backgroundColor: 'salmon'
      }
    }

    const paragraphClassList = [];
    if (this.state.persons.length <= 3) {
      paragraphClassList.push('red');
    }
    if (this.state.persons.length <= 1) {
      paragraphClassList.push('bold');
    }

    return (
        <div className='App'>
          <h1>Hi, from the App component</h1>
          <p className={paragraphClassList.join(' ')}>This is really working</p>
          <button style={btnStyle} onClick={this.togglePersonHandler}>Toggle name</button>
          {persons}
        </div>
    );
  }
}

export default App;