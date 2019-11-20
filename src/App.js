import React, { Component } from 'react';
import styled from 'styled-components';
// import './App.css';

import Person from './Person/Person';

const AppStyledDiv = styled.div`
max-width: 800px;
margin: 0 auto;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;


.container {
display: flex;
flex-direction: column;
align-items: center;
}

.bold {
font-weight: bold;
}

.red {
color: red;
}
`

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  padding: 1em;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  };
`;

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
    }

    const paragraphClassList = [];
    if (this.state.persons.length <= 3) {
      paragraphClassList.push('red');
    }
    if (this.state.persons.length <= 1) {
      paragraphClassList.push('bold');
    }

    return (
      <AppStyledDiv>
        <h1>Hi, from the App component</h1>
        <p className={paragraphClassList.join(' ')}>This is really working</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle name</StyledButton>
        {persons}
      </AppStyledDiv>
    );
  }
}

export default App;