import { combineReducers } from 'redux'
import authReducer from './auth'
import typingReducer from './typing'

const rootReducer = combineReducers({
    auth: authReducer,
    typing: typingReducer
})

export default rootReducer