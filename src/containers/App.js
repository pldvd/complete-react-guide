import React, { Component } from 'react';
import styled from 'styled-components';
// import './App.css';

import PersonList from '../components/PersonList/PersonList';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { throws } from 'assert';

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
  background-color: ${props => props.personsShown ? 'red' : 'green'};
  padding: 1em;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.personsShown ? 'salmon' : 'lightgreen'};
  };
`;

class App extends Component {

  state = {
    persons: [
      { id: 'vasd', name: 'david', age: 34 },
      { id: 'bcadf', name: 'ana', age: 36 },
      { id: 'ölläd', name: 'petra', age: 33 },
      { id: 'öläd', name: 'petruci', age: 33 }
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
    const guy = { ...this.state.persons[personIndex] }
    guy.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[personIndex] = guy;

    this.setState({
      persons: newPersons
    });

  }


  render() {
    

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
        <StyledButton personsShown={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle name
        </StyledButton>
        <PersonList personsAreShown={this.state.showPersons} persons={this.state.persons} deletePerson={this.deletePerson} changeName={this.changeName} />
      </AppStyledDiv>
    );
  }
}

export default App;