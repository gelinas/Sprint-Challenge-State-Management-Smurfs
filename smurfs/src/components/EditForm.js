import React, { useState } from 'react';
import { connect } from 'react-redux';

import  { putSmurf, deleteSmurf } from '../actions'

const EditForm = props => {
    const [editSmurf, setEditSmurf] = useState({
        ...props.smurf
    });

    const handleChanges = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setEditSmurf({
            ...editSmurf,
            [name]: value
        });
    };

  //actual view render
  return (
    <div className="edit-fields">
    <input
      className="form-input"
      type="text"
      name="name"
      placeholder="Smurf Name"
      value={editSmurf.name}
      onChange={handleChanges}
    />
    <input
      className="form-input"
      type="text"
      name="age"
      placeholder="Smurf Age"
      value={editSmurf.age}
      onChange={handleChanges}
    />
    <input
      className="form-input"
      type="text"
      name="height"
      placeholder="Smurf Height"
      value={editSmurf.height}
      onChange={handleChanges}
    />
    <button onClick={() => props.putSmurf(editSmurf)}>
      Update Smurf
    </button>
    <button onClick={() => props.deleteSmurf(editSmurf)}>
      DELETE Smurf
    </button>
    </div>
  )

}

const mapStateToProps = state => {
    return {
      smurfList: state.smurf.smurfList,
      isFetching: state.smurf.isFetching,
      error: state.smurf.error
    };
};
  
export default connect(
    mapStateToProps,
    { putSmurf, deleteSmurf }
)(EditForm);