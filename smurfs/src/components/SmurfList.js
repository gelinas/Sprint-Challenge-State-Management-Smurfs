import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import  { fetchSmurf } from '../actions'

import SmurfCard from './SmurfCard';

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
    <h1>Louis' Smurf Village</h1>
      {props.error && <p>{props.error}</p>}
    <div className="smurf-container">
      {props.smurfList.map(smurf => (
          <SmurfCard key={smurf.id} smurf={smurf} />
      ))}
    </div>
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