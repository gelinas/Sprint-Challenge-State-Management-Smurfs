import React from 'react';
import { connect } from 'react-redux';

import { toggleEdit, setSmurf } from '../actions';

import Smurf from './Smurf';
import EditForm from './EditForm';

const SmurfCard = props => {
  console.log("props from smurfCard", props)
  return (
    <div className="smurf-card">
      <Smurf smurf={props.smurf} />
      <EditForm smurf={props.smurf} />
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