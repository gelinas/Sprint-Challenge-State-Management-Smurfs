import React from 'react';

const Smurf = props => {
  return (
    <div className="smurf-data">
      <p>{`Smurf: ${props.smurf.name}`}</p>
      <p>{`Age: ${props.smurf.age}`}</p>
      <p>{`Height: ${props.smurf.height}`}</p>
      <button onClick={() => props.toggleEditing()}>Edit Smurf</button>
    </div>
  )
};

export default Smurf;
