import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import  { fetchSmurf } from '../actions'

const SmurfForm = props => {

  //actual view render
  return (
    <div>
      Smurf Form Here
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
    {  }
)(SmurfForm);