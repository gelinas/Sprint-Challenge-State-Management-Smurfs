import React from 'react';

import EditForm from './EditForm';

const Smurf = props => {
  return (
    <div>
    <div className="smurf-card">
      <p>{`Smurf: ${props.smurf.name}`}</p>
      <p>{`Age: ${props.smurf.age}`}</p>
      <p>{`Height: ${props.smurf.height}`}</p>
    </div>
    <EditForm smurf={props.smurf} />
    </div>
  )
};

export default Smurf;
