import { LOGOUT, SET_TOKEN } from 'store/types/auth'

export const setToken = token => ({
    type: SET_TOKEN,
    payload: token
})

export const logout = () => ({
    type: LOGOUT
})