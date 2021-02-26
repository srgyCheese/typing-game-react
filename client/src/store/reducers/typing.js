import { FINISH_TYPING, NEXT_LETTER, START_TYPING, WRONG_LETTER } from 'store/types/typing'

const initialState = {
    text: {},
    startTime: '',
    endTime: '',
    currentLetter: 0,
    endResults: {}
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
                endResults: {
                    speed: state.currentLetter / ((new Date() - state.startTime) / 60_000)
                }
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
        default: return state
    }
}

export default typingReducer