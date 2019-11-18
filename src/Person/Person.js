import React, { useState } from 'react';
import './person.css';


const person = (props) => {

  const [state, stateHandler] = useState({ isRed: false })

  const style = {
    borderRadius: "20px",
    backgroundColor: state.isRed ? "red" : "white"
  }

  const toggleRed = () => stateHandler({isRed: !state.isRed})


  return (
    <div className="Person">
      <h2 className="mono" onClick={props.click}>Im {props.name}, I am {props.age} years old.</h2>
      <input type="text" onChange={props.changed} placeholder={props.name} style={style}/>
    </div>
  )

  // return React.createElement('h1', {className: "mono"} , 'Hello world!!!');
}

export default person;