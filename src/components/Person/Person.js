import React, { Component } from 'react';
import styled from 'styled-components';
// import './person.css';

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

class Person extends Component {

  constructor(props) {
    console.log('[Person] constructor');
    super(props);
    this.inputStyle = {
      borderRadius: '20px'
    }
  }

  // if (props.name === 'petruci') {
  //   throw new Error('name cannot be "petruci"');
  // }

  render() {
    console.log('[Person] render');
    return (
      <StyledDiv>
        <h2 className="mono" onClick={this.props.click}>Im {this.props.name}, I am {this.props.age} years old.</h2>
        <input type="text" onChange={this.props.changed} placeholder={this.props.name} style={this.inputStyle} />
      </StyledDiv >
    )
  }
}

export default Person;