import { FINISH_TYPING, NEXT_LETTER, START_TYPING, UPDATE_TYPING_SPEED, WRONG_LETTER } from 'store/types/typing'

const initialState = {
    text: {},
    startTime: 0,
    speed: 0,
    endTime: 0,
    currentLetter: 0
}

function typingReducer(state = initialState, action) {
    switch(action.type) {
        case START_TYPING:
            return {...initialState, text: action.payload, startTime: new Date()}
        case NEXT_LETTER:
            return {
                ...state,
                text: [
                    ...state.text.slice(0, state.currentLetter),
                    {
                        ...state.text[state.currentLetter],
                        type: 'solved'
                    },
                    {
                        ...state.text[state.currentLetter + 1],
                        type: 'current'
                    },
                    ...state.text.slice(state.currentLetter + 2)
                ],
                currentLetter: state.currentLetter + 1
            }
        case FINISH_TYPING:
            return {
                ...state,
                text: [
                    ...state.text.slice(0, state.currentLetter),
                    {
                        ...state.text[state.currentLetter],
                        type: 'solved'
                    },
                    ...state.text.slice(state.currentLetter + 1)
                ],
                endTime: new Date()
            }
        case WRONG_LETTER:
            return {
                ...state,
                text: [
                    ...state.text.slice(0, state.currentLetter),
                    {
                        ...state.text[state.currentLetter],
                        type: 'mistake'
                    },
                    ...state.text.slice(state.currentLetter + 1)
                ]
            }
        case UPDATE_TYPING_SPEED:
            return {
                ...state,
                speed: state.currentLetter / ((new Date() - state.startTime) / 60_000)
            }
        default: return state
    }
}

export default typingReducer