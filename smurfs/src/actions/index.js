import axios from 'axios';

// beer action types
export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const START_POST = 'START_POST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const START_PUT = 'START_PUT';
export const PUT_SUCCESS = 'PUT_SUCCESS';
export const PUT_FAILURE = 'PUT_FAILURE';

export const START_DELETE = 'START_DELETE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

// beer action creatoros
// standard form for asyc axios call with thunk
// thunk lets us return functions as actions well as regular objects
export const fetchSmurf = () => dispatch => {
    dispatch({ type: START_FETCH });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res=> dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));

};

export const postSmurf = (newSmurf) => dispatch => {
    dispatch({ type: START_POST });
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res=> dispatch({ type: POST_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_FAILURE, payload: err.response }));

};

export const putSmurf = (editSmurf) => dispatch => {
    dispatch({ type: START_DELETE });
    axios
        .put(`http://localhost:3333/smurfs/${editSmurf.id}`, editSmurf)
        .then(res=> dispatch({ type: DELETE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_FAILURE, payload: err.response }));

};

export const deleteSmurf = (editSmurf) => dispatch => {
    dispatch({ type: START_DELETE });
    axios
        .delete(`http://localhost:3333/smurfs/${editSmurf.id}`)
        .then(res=> dispatch({ type: DELETE_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_FAILURE, payload: err.response }));

};