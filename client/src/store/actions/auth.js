import { LOGOUT, SET_TOKEN } from '../types/auth'


export const setToken = token => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}