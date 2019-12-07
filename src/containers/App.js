import React, { Component } from 'react';
import styled from 'styled-components';

import PersonList from '../components/PersonList/PersonList';
import PersonsController from '../components/PersonsController/PersonsController';
import AuthContext from '../context/Auth-context';

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
    console.log('[App component] constructor');
    super(props);
    this.state = {
      persons: [
        { id: 'vasd', name: 'david', age: 34 },
        { id: 'bcadf', name: 'ana', age: 36 },
        { id: 'ölläd', name: 'petra', age: 33 },
        { id: 'öläd', name: 'petruci', age: 33 }
      ],
      showPersons: false,
      personsControllerIsOn: true,
      changeCount: 0,
      isLoggedIn: false,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App component] getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App component] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App component] getSnapshotBeforeUpdate');
    return {
      snapshot: 'app component'
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App component] componentDidUpdate');
    console.log(snapshot);
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

  logIn = () => {
    this.setState({ isLoggedIn: true });
  }

  changeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const guy = { ...this.state.persons[personIndex] }
    guy.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[personIndex] = guy;

    this.setState((prevState, props) => {
      return {
        persons: newPersons,
        changeCount: prevState.changeCount + 1,
      }
    });

  }

  componentDidMount() {
    console.log('[App component] componentDidMount');
  }

  render() {
    console.log('[App component] render');
    return (
      <AppStyledDiv>
        <button onClick={() => this.setState({ personsControllerIsOn: !this.state.personsControllerIsOn })}>Delete otherButton</button>
        <AuthContext.Provider
          value={
            {
              authenticated: this.state.isLoggedIn,
              logIn: this.logIn,
            }
          }>
          {this.state.personsControllerIsOn ?
            <PersonsController
              persons={this.state.persons}
              togglePersonHandler={this.togglePersonHandler}
              showPersons={this.state.showPersons}
              title={this.props.pageTitle}
            /> : null}
          <PersonList
            personsAreShown={this.state.showPersons}
            persons={this.state.persons}
            deletePerson={this.deletePerson}
            changeName={this.changeName}
          />
        </AuthContext.Provider>
      </AppStyledDiv>
    );
  }
}

export default App;