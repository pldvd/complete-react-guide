import React from 'react';
import './person.css';


const Person = (props) => {

  const inputStyle = {
    borderRadius: '20px'
  }

  const personStyle = {
    // '@media (min-width: 500px)' : {
    //   width: '450px'
    // }
  }

  return (
    <div className="Person" style={personStyle}>
      <h2 className="mono" onClick={props.click}>Im {props.name}, I am {props.age} years old.</h2>
      <input type="text" onChange={props.changed} placeholder={props.name} style={inputStyle}/>
    </div>
  )

  // return React.createElement('h1', {className: "mono"} , 'Hello world!!!');
}

export default Person;