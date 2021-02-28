import { NEXT_LETTER, INIT_TYPING, START_TYPING, TRY_ADD_LETTER, WRONG_LETTER, FINISH_TYPING, UPDATE_TYPING_SPEED, BREAK_TYPING } from 'store/types/typing'


export const initTyping = () => ({
    type: INIT_TYPING
})

export const startTyping = text => ({
    type: START_TYPING,
    payload: {
        text,
        date: Date.now()
    }
})

export const finishTyping = () => ({
    type: FINISH_TYPING,
    payload: {
        date: Date.now()
    }
})

export const tryAddLetter = letter => ({
    type: TRY_ADD_LETTER,
    payload: letter
})

export const nextLetter = () => ({
    type: NEXT_LETTER
})

export const wrongLetter = () => ({
    type: WRONG_LETTER
})

export const updateTypingSpeed = () => ({
    type: UPDATE_TYPING_SPEED,
    payload: {
        date: Date.now()
    }
})

export const breakTyping = () => ({
    type: BREAK_TYPING
})