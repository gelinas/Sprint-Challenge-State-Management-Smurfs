import React, { useState } from 'react';
import { connect } from 'react-redux';

import  { postSmurf } from '../actions'

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
    });

    const handleChanges = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setNewSmurf({
            ...newSmurf,
            [name]: value
        });
    };

  //actual view render
  return (
    <div className="form-fields">
    <input
      className="form-input"
      type="text"
      name="name"
      placeholder="Smurf Name"
      value={newSmurf.name}
      onChange={handleChanges}
    />
    <input
      className="form-input"
      type="text"
      name="age"
      placeholder="Smurf Age"
      value={newSmurf.age}
      onChange={handleChanges}
    />
    <input
      className="form-input"
      type="text"
      name="height"
      placeholder="Smurf Height"
      value={newSmurf.height}
      onChange={handleChanges}
    />
    <button onClick={() => props.postSmurf(newSmurf)}>
      Add Smurf
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
    { postSmurf }
)(SmurfForm);