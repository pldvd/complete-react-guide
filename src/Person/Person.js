import React from 'react';
import './person.css';

const person = () => {
  // return <h1>Hi I am a component</h1>
  return React.createElement('h1', {className: "mono"} , 'Hello world!!!');
}

export default person;