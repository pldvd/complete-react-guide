import React from 'react';

const OtherPerson = (props) => {
  return (
    <div>
      <h2 className="mono">Im {props.name}, I am {props.age} years old.</h2>
      <p>{props.children}</p>
    </div>
  )
}

export default OtherPerson;