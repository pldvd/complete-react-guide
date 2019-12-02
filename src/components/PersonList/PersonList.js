import React, { Component } from 'react';
import Person from '../Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class PersonList extends Component {

  constructor(props) {
    console.log('[Personlist] constructor')
    super(props);
    this.persons = null;
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[Personlist] getDerivedStateFromProps');
    return state;
  }

  //shouldComponentUpdate takes the nextProps and nextState objects as params and returns a boolean: true if the component should update and false if it should not.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Personlist] shouldComponentUpdate');
    return true;
  }

  //the getSnapshotBeforeUpdate takes the previous props and state object as params and returns a snapshot object (or null) which will be passed on as the 3rd param for the componentDidUpdate lifecycle method (this is used to pass on "last-minute" info about DOM props), must return either a snapshot or null
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Personlist] getSnapshotBeforeUpdate');
    return {
      snapshot: 'booom'
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Personlist] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[PersonList] render');
    if (this.props.personsAreShown) {
      this.persons = this.props.persons.map((person, index) => {
        return (
          <ErrorBoundary key={person.id}>
            <Person
              name={person.name}
              age={person.age}
              click={() => this.props.deletePerson(index)}
              changed={event => this.props.changeName(event, person.id)}>
            </Person>
          </ErrorBoundary>
        )
      })
    }

    return <div className="container">{this.persons}</div>;
  }

}

export default PersonList;

