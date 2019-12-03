import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.personsShown ? 'red' : 'green'};
  padding: 1em;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.personsShown ? 'salmon' : 'lightgreen'};
  };
`;

const PersonsController = (props) => {

  useEffect(() => {
    console.log('[PersonsController] useEffect');
    // alert('useffect was triggered');
  }, [props.showPersons]);

  const paragraphClassList = [];
  if (props.persons.length <= 3) {
    paragraphClassList.push('red');
  }
  if (props.persons.length <= 1) {
    paragraphClassList.push('bold');
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={paragraphClassList.join(' ')}>This is really working</p>
      <StyledButton personsShown={props.showPersons} onClick={props.togglePersonHandler}>Toggle name
      </StyledButton>
    </div>
  )

}

export default PersonsController;