import React from 'react';

const Smurf = props => {
  console.log("props from Smurf", props);
  return (
    <div className="smurf-card">
      <div classname="smurf-data">
        <p>{`Smurf: ${props.smurf.name}`}</p>
        <p>{`Age: ${props.smurf.age}`}</p>
        <p>{`Height: ${props.smurf.height}`}</p>
      </div>
    </div>
  )
};

export default Smurf;
