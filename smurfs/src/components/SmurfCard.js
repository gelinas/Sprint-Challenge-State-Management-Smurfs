import React from 'react';

import Smurf from './Smurf';
import EditForm from './EditForm';

const SmurfCard = props => {
  return (
    <div className="smurf-card">
      <Smurf smurf={props.smurf} />
      <EditForm smurf={props.smurf} />
    </div>
  )
};

export default SmurfCard;
