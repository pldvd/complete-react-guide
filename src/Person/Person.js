import React from 'react';
import './person.css';


const Person = (props) => {

  const inputStyle = {
    borderRadius: '20px'
  }

  return (
    <div className="Person">
      <h2 className="mono" onClick={props.click}>Im {props.name}, I am {props.age} years old.</h2>
      <input type="text" onChange={props.changed} placeholder={props.name} style={inputStyle} />
    </div>
  )

}

export default Person;