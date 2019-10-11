import * as a from '../actions'

const initialState = {
    isFetching: false,
    error: '',
    smurfList: []
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case a.START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case a.FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfList: action.payload
            }
        case a.FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}