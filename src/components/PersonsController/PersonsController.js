import React, { useEffect, useRef, Fragment } from 'react';
import styled from 'styled-components';
import AuthContext from '../../context/Auth-context';

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

  const buttonReference = useRef(null);

  useEffect(() => {
    console.log('[PersonsController] useEffect');
    // alert('useffect was triggered');
    setTimeout(() => buttonReference.current.click(), 2000);
    return () => console.log('[PersonsController] UNMOUNT cleanup')
  }, []);
  //if you pass an empty array as second argument to useEffect, then useEffect will only triger at component did mount and the return function will only run at componentWillUnmount

  const paragraphClassList = [];
  if (props.persons.length <= 3) {
    paragraphClassList.push('red');
  }
  if (props.persons.length <= 1) {
    paragraphClassList.push('bold');
  }

  return (
    <Fragment>
      <h1>{props.title}</h1>
      <p className={paragraphClassList.join(' ')}>This is really working</p>
      <StyledButton personsShown={props.showPersons} onClick={props.togglePersonHandler} ref={buttonReference}>Toggle name
      </StyledButton>
      <AuthContext.Consumer>
        { (context) => <StyledButton onClick={context.logIn}>Login</StyledButton>
        }
      </AuthContext.Consumer>
    </Fragment>
  )

}

export default PersonsController;