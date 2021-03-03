import { LOGOUT, SET_TOKEN } from '../types/auth'


const initialState = {
    jwt: ''
}

function authReducer(state = initialState, action) {
    switch(action.type) {
        case SET_TOKEN:
            return {...state, jwt: action.payload}
        case LOGOUT:
            return {...state, jwt: ''}
        default: return state
    }
}

export default authReducer