import React, { Component } from 'react';
import styled from 'styled-components';

import PersonList from '../components/PersonList/PersonList';
import PersonsController from '../components/PersonsController/PersonsController';

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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'vasd', name: 'david', age: 34 },
        { id: 'bcadf', name: 'ana', age: 36 },
        { id: 'ölläd', name: 'petra', age: 33 },
        { id: 'öläd', name: 'petruci', age: 33 }
      ],
      showPersons: false
    }
    console.log('this is the constructor method');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('this is the getDerivedStateFromProps', props);
    return state;
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

  componentDidMount() {
    console.log('Component did mount');
  }

  render() {

    console.log('this is the render method');
    return (
      <AppStyledDiv>
        <PersonsController
          persons={this.state.persons}
          togglePersonHandler={this.togglePersonHandler}
          showPersons={this.state.showPersons}
          title={this.props.pageTitle}
        />
        <PersonList
          personsAreShown={this.state.showPersons}
          persons={this.state.persons}
          deletePerson={this.deletePerson}
          changeName={this.changeName}
        />
      </AppStyledDiv>
    );
  }
}

export default App;