import { FINISH_TYPING, NEXT_LETTER, START_TYPING, UPDATE_TYPING_SPEED, WRONG_LETTER, BREAK_TYPING } from 'store/types/typing'

const initialState = {
    text: {},
    speed: 0,
    accuracy: 100,
    failedLettersCount: 0,
    currentLetter: 0,
    startTime: 0,
    endTime: 0
}

const calculateAccuracy = (state, isFail = false) => {
    const fails = isFail ? state.failedLettersCount + 1 : state.failedLettersCount

    console.log(fails, state.currentLetter)

    return (100 - (fails / (state.currentLetter + 1)) * 100).toFixed(1)
}

function typingReducer(state = initialState, action) {
    switch(action.type) {
        case START_TYPING:
            return {...initialState, text: action.payload.text, startTime: action.payload.date}
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
                currentLetter: state.currentLetter + 1,
                accuracy: calculateAccuracy(state)
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
                endTime: action.payload.date,
                accuracy: calculateAccuracy(state)
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
                ],
                failedLettersCount: state.failedLettersCount + 1,
                accuracy: calculateAccuracy(state, true)
            }
        case UPDATE_TYPING_SPEED:
            return {
                ...state,
                speed: (state.currentLetter / ((action.payload.date - state.startTime) / 60_000)).toFixed(1)
            }
        case BREAK_TYPING:
            return {...initialState}
        default: return state
    }
}

export default typingReducer