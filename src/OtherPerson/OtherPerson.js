import React from 'react';

const OtherPerson = () => {
  let age = Math.floor(Math.random() * 35);
  return <h2 className="mono">Im the other person, I am {age} years old.</h2>
}

export default OtherPerson;