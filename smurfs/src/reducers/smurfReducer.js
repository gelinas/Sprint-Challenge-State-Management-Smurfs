import * as a from '../actions'

const initialState = {
    isFetching: false,
    error: '',
    smurfList: []
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        // GET requests
        case a.START_FETCH:
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
        // POST requests
        case a.START_POST:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case a.POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfList: action.payload
            }
        case a.POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        // PUT requests
        case a.START_PUT:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case a.PUT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfList: action.payload
            }
        case a.PUT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        // DELETE requests
        case a.START_DELETE:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case a.DELETE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfList: action.payload
            }
        case a.DELETE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}