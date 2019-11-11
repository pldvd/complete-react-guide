import React from 'react';
import './person.css';
import OtherPerson from '../OtherPerson/OtherPerson';


const person = () => {
  return (
    <div>
      <h1 className="mono">Hi I am a component</h1>
      <OtherPerson />
    </div>
  )
  
  // return React.createElement('h1', {className: "mono"} , 'Hello world!!!');
}

export default person;