import React from 'react';

const Auxiliary = (props) => {
  return (
    <div className={props.name}>
      {props.children}
    </div>
  )
};

export default Auxiliary;