import React from 'react';
import './person.css';


const person = (props) => {
  return (
    <div className="Person">
      <h2 onClick={props.click} className="mono">Im {props.name}, I am {props.age} years old.</h2>
      <input type="text" onChange={props.changed} placeholder={props.name}/>
    </div>
  )
  
  // return React.createElement('h1', {className: "mono"} , 'Hello world!!!');
}

export default person;