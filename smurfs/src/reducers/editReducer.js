import * as a from '../actions'

const initialState = {
    editing: false,
    editSmurf: {}
}

export const editReducer = (state = initialState, action) => {
    switch(action.type){
        case a.TOGGLE_EDIT:
          return {
            ...state,
            editing: !state.editing
          };
        case a.SET_SMURF:
          return {
            ...state,
            editSmurf: action.payload,
            editing: false
          };
        default:
            return state;
    }
}