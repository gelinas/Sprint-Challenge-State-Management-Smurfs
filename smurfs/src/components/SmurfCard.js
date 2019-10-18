import React, { useState } from 'react';
import { connect } from 'react-redux';

import { toggleEdit, setSmurf } from '../actions';

import Smurf from './Smurf';
import EditForm from './EditForm';

const SmurfCard = props => {
  console.log("props from smurfCard", props)

  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div className="smurf-card">
      {isEditing 
      ? <EditForm smurf={props.smurf} /> 
      : <Smurf smurf={props.smurf} toggleEditing={toggleEditing} />
      }
    </div>
  )
};

const mapStateToProps = state => {
  return {
    editing: state.edit.editing,
    editSmurf: state.edit.editSmurf,
  };
};

export default connect(
  mapStateToProps,
  { toggleEdit, setSmurf }
)(SmurfCard);