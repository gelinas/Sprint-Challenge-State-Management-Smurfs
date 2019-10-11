import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import  { fetchSmurf } from '../actions'

import Smurf from './Smurf';

// import Smurf from './Smurf';

const SmurfList = props => {
  useEffect(() => {
    // get request here, possubly fetchSmurf from actions
    props.fetchSmurf();
  }, [])

  // implement loading spinner
  if (props.isFetching) {
    return <h2>Fetching smurfs</h2>; 
  }

  //actual view render
  return (
    <>
      {props.error && <p>{props.error}</p>}
      {props.smurfList.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </>
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
    { fetchSmurf }
)(SmurfList);