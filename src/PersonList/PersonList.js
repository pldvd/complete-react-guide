import React from 'react';
import Person from '../Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const PersonList = (props) => {

  let persons = null;

  if (props.personsAreShown) {
    persons = props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            click={() => props.deletePerson(index)}
            changed={event => props.changeName(event, person.id)}>
          </Person>
        </ErrorBoundary>
      )
    })
  }

  return <div className="container">{persons}</div>
}

export default PersonList;

