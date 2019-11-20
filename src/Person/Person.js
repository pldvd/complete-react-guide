import React from 'react';
import styled from 'styled-components';
// import './person.css';


const Person = (props) => {

  const inputStyle = {
    borderRadius: '20px'
  }

  const StyledDiv = styled.div`
    width: 100%;
    border: 2px solid black;
    box-shadow: 0 2px 20px black;
    padding: 15px;
    box-sizing: border-box;
  
  :not(:last-child) {
    margin-bottom: 20px;
  }
  
  .mono {
    font-family: monospace;
    color: red;
  }  

  @media (min-width: 500px) {
    width: 450px;
  }
  `;

  return (
    <StyledDiv>
      <h2 className="mono" onClick={props.click}>Im {props.name}, I am {props.age} years old.</h2>
      <input type="text" onChange={props.changed} placeholder={props.name} style={inputStyle} />
    </StyledDiv>
  )

}

export default Person;